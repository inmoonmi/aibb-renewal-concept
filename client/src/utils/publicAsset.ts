
/**
 * GitHub Pages 하위 경로(/aibb-renewal-concept/)를 자동으로 붙여주는 이미지 경로 함수
 * 이미 경로가 붙어 있거나 외부 주소(https://)인 경우에는 그대로 둡니다.
 */
export function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL;
  if (!path || path.startsWith(base) || /^(https?:|data:|blob:)/.test(path)) return path;
  const cleanPath = path.replace(/^\/+/, '');
  return `${base}${cleanPath}`;
}
