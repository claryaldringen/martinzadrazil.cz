import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/const';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: `${SITE_URL}/cs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
};

export default sitemap;
