import type { ThemeMode } from '@/hooks/useThemeMode';

const encodeSvg = (svg: string) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

const lightBackgroundSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 2200" preserveAspectRatio="none">
  <defs>
    <linearGradient id="lightBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#faf8f3" />
      <stop offset="52%" stop-color="#f4f0ea" />
      <stop offset="100%" stop-color="#ece7e1" />
    </linearGradient>
    <linearGradient id="lightFold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95" />
      <stop offset="55%" stop-color="#f4f2ee" stop-opacity="0.92" />
      <stop offset="100%" stop-color="#d9d3cb" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="lightShade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ded8cf" stop-opacity="0" />
      <stop offset="50%" stop-color="#cfc7bc" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#bdb4a7" stop-opacity="0.15" />
    </linearGradient>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="22" />
    </filter>
  </defs>
  <rect width="1440" height="2200" fill="url(#lightBase)" />
  <ellipse cx="180" cy="280" rx="480" ry="520" fill="url(#lightFold)" opacity="0.92" />
  <path d="M-120 800C210 520 500 360 770 120C900 5 1075 -20 1235 30C1365 71 1455 166 1500 260L1500 0L-120 0Z" fill="#ffffff" opacity="0.58" />
  <path d="M250 1080C430 860 660 710 905 430C1030 290 1175 245 1440 310L1440 0L0 0L0 1180C55 1170 125 1145 250 1080Z" fill="url(#lightFold)" opacity="0.92" />
  <path d="M900 1480C1110 1110 1320 890 1500 730L1500 2040C1340 2000 1185 1850 1085 1685C1020 1580 955 1525 900 1480Z" fill="url(#lightShade)" opacity="0.9" />
  <path d="M-120 1860C160 1500 385 1390 640 1210C835 1080 1030 1015 1265 1045C1365 1060 1435 1090 1500 1130L1500 2200L-120 2200Z" fill="#f7f4ef" opacity="0.92" />
  <path d="M0 1680C220 1420 410 1340 640 1180C850 1035 1085 1000 1440 1180" stroke="#ffffff" stroke-width="28" stroke-linecap="round" opacity="0.9" filter="url(#blur)" />
  <path d="M-10 650C250 790 450 920 650 1160C830 1375 930 1600 990 2040" stroke="#ffffff" stroke-width="34" stroke-linecap="round" opacity="0.85" filter="url(#blur)" />
</svg>`;

const darkBackgroundSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 2200" preserveAspectRatio="none">
  <defs>
    <linearGradient id="darkBase" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050505" />
      <stop offset="50%" stop-color="#090909" />
      <stop offset="100%" stop-color="#111111" />
    </linearGradient>
    <linearGradient id="darkFold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1d1d1d" stop-opacity="0.95" />
      <stop offset="55%" stop-color="#090909" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#000000" stop-opacity="1" />
    </linearGradient>
    <linearGradient id="darkShade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#000000" stop-opacity="0" />
      <stop offset="50%" stop-color="#3a3a3a" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#0d0d0d" stop-opacity="0.2" />
    </linearGradient>
    <filter id="darkBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="26" />
    </filter>
  </defs>
  <rect width="1440" height="2200" fill="url(#darkBase)" />
  <ellipse cx="240" cy="240" rx="520" ry="550" fill="url(#darkFold)" opacity="0.95" />
  <path d="M-120 790C210 510 500 355 780 115C910 -5 1085 -25 1235 20C1360 58 1450 145 1500 240L1500 0L-120 0Z" fill="#151515" opacity="0.68" />
  <path d="M220 1060C395 840 625 700 905 420C1040 285 1185 245 1440 305L1440 0L0 0L0 1165C55 1160 120 1135 220 1060Z" fill="url(#darkFold)" opacity="0.94" />
  <path d="M880 1480C1095 1110 1305 890 1500 735L1500 2040C1335 2000 1180 1860 1088 1690C1020 1572 950 1520 880 1480Z" fill="url(#darkShade)" opacity="0.9" />
  <path d="M-120 1860C160 1500 385 1390 640 1210C835 1080 1030 1015 1265 1045C1365 1060 1435 1090 1500 1130L1500 2200L-120 2200Z" fill="#080808" opacity="0.94" />
  <path d="M0 1680C220 1420 410 1340 640 1180C850 1035 1085 1000 1440 1180" stroke="#ffffff" stroke-width="30" stroke-linecap="round" opacity="0.18" filter="url(#darkBlur)" />
  <path d="M-10 650C250 790 450 920 650 1160C830 1375 930 1600 990 2040" stroke="#ffffff" stroke-width="36" stroke-linecap="round" opacity="0.12" filter="url(#darkBlur)" />
</svg>`;

export const getThemeBackgroundImage = (theme: ThemeMode) => {
  return theme === 'dark' ? encodeSvg(darkBackgroundSvg) : encodeSvg(lightBackgroundSvg);
};