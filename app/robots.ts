import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/const';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
};

export default robots;
