import type { APIRoute } from 'astro';
import { SITE } from '../site';
import { legal } from '../legal';
export const GET: APIRoute = () => {
  const paths = ['', '/contact', ...Object.keys(legal).map((s) => '/' + s)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${SITE.url}${p}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
