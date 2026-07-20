import { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdditiveBlending, type Group, type Points } from 'three';

type PointerTarget = {
  x: number;
  y: number;
};

type LiquidMetalBlobSceneProps = {
  active: boolean;
  pointerTarget: PointerTarget;
  isDark?: boolean;
};

type BlobProps = {
  pointerTarget: PointerTarget;
  active: boolean;
  palette: Palette;
};

type Palette = {
  wireframe: string;
  wireframeEmissive: string;
  wireframeOpacity: number;
  glow: string;
  glowOpacity: number;
  sparks: string;
  ambient: number;
  keyLight: string;
  keyIntensity: number;
  rimLight: string;
  rimIntensity: number;
};

const DARK_PALETTE: Palette = {
  wireframe: '#c7d4ff',
  wireframeEmissive: '#a9bbff',
  wireframeOpacity: 0.42,
  glow: '#9fb5ff',
  glowOpacity: 0.1,
  sparks: '#cdd9ff',
  ambient: 0.18,
  keyLight: '#eff4ff',
  keyIntensity: 1.15,
  rimLight: '#8ea6ff',
  rimIntensity: 0.55,
};

const LIGHT_PALETTE: Palette = {
  wireframe: '#5a6ba6',
  wireframeEmissive: '#7488c9',
  wireframeOpacity: 0.34,
  glow: '#7f97dd',
  glowOpacity: 0.14,
  sparks: '#6d80c4',
  ambient: 0.55,
  keyLight: '#ffffff',
  keyIntensity: 1.35,
  rimLight: '#aab8ee',
  rimIntensity: 0.7,
};

// Cubic ease-out — fast start, gentle settle. Used for the entry animation.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

// Duration (seconds) of the one-time entrance animation.
const INTRO_DURATION = 1.2;

// Small cloud of orbiting motes that adds depth around the core.
function Sparks({ color, intro }: { color: string; intro: React.RefObject<number> }) {
  const pointsRef = useRef<Points | null>(null);
  const materialRef = useRef<any>(null);

  const positions = useMemo(() => {
    const count = 60;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      // Deterministic spherical distribution so the layout is stable across renders.
      const t = (i / count) * Math.PI * 2;
      const y = 1 - (i / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const spin = t * 7.5;
      const shell = 1.55 + (i % 5) * 0.06;
      arr[i * 3] = Math.cos(spin) * radius * shell;
      arr[i * 3 + 1] = y * shell;
      arr[i * 3 + 2] = Math.sin(spin) * radius * shell;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) {
      return;
    }
    const elapsed = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.08;
    pointsRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.15;

    if (materialRef.current) {
      // Sparks drift in slightly after the shell, on the tail of the intro.
      const t = intro.current;
      materialRef.current.opacity = 0.75 * Math.max(0, (t - 0.35) / 0.65);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color={color}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

function Blob({ pointerTarget, active, palette }: BlobProps) {
  const meshRef = useRef<Group | null>(null);
  const wireframeMaterialRef = useRef<any>(null);
  const glowMaterialRef = useRef<any>(null);
  const currentOffset = useRef({ x: 0, y: 0 });

  // Normalized 0→1 progress of the one-time entrance. Shared with <Sparks>.
  const introProgress = useRef(0);
  const introElapsed = useRef(0);

  const shellGeometryArgs = useMemo(() => [1, 6] as const, []);

  useFrame((state, delta) => {
    if (!meshRef.current) {
      return;
    }

    // Advance the entrance timeline (independent of the ambient clock so it
    // always starts from 0 on first mount, regardless of scene warm-up time).
    if (introProgress.current < 1) {
      introElapsed.current = Math.min(INTRO_DURATION, introElapsed.current + delta);
      introProgress.current = introElapsed.current / INTRO_DURATION;
    }
    const intro = easeOutCubic(introProgress.current);

    // Pause continuous motion when off-screen, but keep the mesh mounted and
    // visible so scrolling back never re-triggers a fade or reveal.
    if (!active) {
      return;
    }

    currentOffset.current.x += (pointerTarget.x - currentOffset.current.x) * Math.min(1, delta * 3.2);
    currentOffset.current.y += (pointerTarget.y - currentOffset.current.y) * Math.min(1, delta * 3.2);

    const elapsed = state.clock.getElapsedTime();
    const turn = elapsed * ((Math.PI * 2) / 34);

    // Entrance adds an extra settle-spin on top of the idle rotation, easing out.
    const introSpin = (1 - intro) * Math.PI * 0.9;

    meshRef.current.rotation.y = turn + currentOffset.current.x * 0.16 + introSpin;
    meshRef.current.rotation.x = Math.sin(elapsed * 0.12) * 0.08 + currentOffset.current.y * 0.12;
    meshRef.current.rotation.z = Math.sin(elapsed * 0.08) * 0.04;

    // Scale eases up from a compact 0.72 → full size, blended with the idle pulse.
    const scalePulse = 1 + Math.sin(elapsed * 0.35) * 0.015;
    const baseScale = 1.05 + scalePulse * 0.02;
    meshRef.current.scale.setScalar(baseScale * (0.72 + intro * 0.28));

    if (wireframeMaterialRef.current) {
      wireframeMaterialRef.current.opacity =
        (palette.wireframeOpacity + Math.sin(elapsed * 0.25) * 0.04) * intro;
    }

    if (glowMaterialRef.current) {
      glowMaterialRef.current.opacity =
        (palette.glowOpacity + Math.sin(elapsed * 0.4) * 0.02) * intro;
    }
  });

  return (
    <group ref={meshRef} scale={0.72}>
      {/* Soft outer glow shell. */}
      <mesh scale={1.34}>
        <icosahedronGeometry args={shellGeometryArgs} />
        <meshStandardMaterial
          ref={glowMaterialRef}
          color={palette.glow}
          emissive={palette.glow}
          emissiveIntensity={0.4}
          metalness={0.15}
          roughness={0.86}
          transparent
          opacity={0}
          wireframe
        />
      </mesh>

      {/* Crisp wireframe cage. */}
      <mesh scale={1.28}>
        <icosahedronGeometry args={shellGeometryArgs} />
        <meshStandardMaterial
          ref={wireframeMaterialRef}
          color={palette.wireframe}
          emissive={palette.wireframeEmissive}
          emissiveIntensity={0.22}
          metalness={0.08}
          roughness={0.72}
          transparent
          opacity={0}
          wireframe
        />
      </mesh>

      <Sparks color={palette.sparks} intro={introProgress} />
    </group>
  );
}

export default function LiquidMetalBlobScene({ active, pointerTarget, isDark = true }: LiquidMetalBlobSceneProps) {
  const [isReady, setIsReady] = useState(false);
  const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;

  return (
    <Canvas
      dpr={[1, 2]}
      // Keep rendering while visible; drop to on-demand when scrolled away so
      // we stop burning frames without unmounting or hiding the scene.
      frameloop={active ? 'always' : 'demand'}
      gl={{
        antialias: true,
        alpha: true,
        premultipliedAlpha: false,
        powerPreference: 'high-performance',
      }}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      style={{
        backgroundColor: 'transparent',
        // Reveal once, permanently. The intro animation inside the scene is the
        // actual entrance; this opacity flip just avoids showing an empty
        // (pre-composite) canvas for a frame on cold load.
        opacity: isReady ? 1 : 0,
        transition: 'opacity 120ms ease-out',
      }}
      onCreated={({ gl, scene, camera }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;

        // Warm up shader compilation and force one correctly-cleared frame so
        // the very first visible frame is already the intro at t=0 (compact +
        // transparent), not a flash of a fully-formed sphere.
        gl.compile(scene, camera);
        gl.render(scene, camera);

        // gl.render() returning doesn't mean the compositor has actually
        // picked up that frame yet. Two rAFs of slack lets the browser display
        // the correct first frame before we reveal — so there's no blank flash.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsReady(true);
          });
        });
      }}
      className="h-full w-full"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={palette.ambient} />
        <directionalLight position={[-3.8, 4.2, 5]} intensity={palette.keyIntensity} color={palette.keyLight} />
        <directionalLight position={[2.5, -1.5, 3]} intensity={palette.rimIntensity} color={palette.rimLight} />
        <pointLight position={[0, 0, 2.5]} intensity={0.4} color={palette.glow} />
        <Blob active={active} pointerTarget={pointerTarget} palette={palette} />
      </Suspense>
    </Canvas>
  );
}
