import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://myesoftware.com.ar';

// Rutas estáticas de la aplicación
const routes = [
  { path: '/', priority: '1.0' },
  { path: '/servicios', priority: '0.8' },
  { path: '/contacto', priority: '0.7' },
  { path: '/nosotros', priority: '0.6' }
];

const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicPath = path.resolve(__dirname, '../public/sitemap.xml');

fs.writeFileSync(publicPath, sitemap, 'utf8');
console.log('✅ sitemap.xml generado correctamente en public/sitemap.xml');
