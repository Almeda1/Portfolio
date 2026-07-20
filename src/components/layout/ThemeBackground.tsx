import { useThemeMode } from '@/hooks/useThemeMode';
import lightBackground from '@/assets/background-light.jpg';
import darkBackground from '@/assets/background-dark.jpg';

export default function ThemeBackground() {
  const { isDark } = useThemeMode();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-out ${isDark ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: `url(${lightBackground})` }}
      />
      <div
        className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-out ${isDark ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundImage: `url(${darkBackground})` }}
      />
      <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'bg-black/20' : 'bg-white/10'}`} />
    </div>
  );
}