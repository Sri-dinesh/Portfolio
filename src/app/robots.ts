import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Googlebot-Extended', 'CCBot', 'Claude-Web', 'anthropic-ai', 'ClaudeBot', 'OAI-SearchBot'],
        allow: '/',
      }
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
