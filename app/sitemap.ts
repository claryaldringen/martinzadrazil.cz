import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/const';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: `${SITE_URL}/cs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          cs: `${SITE_URL}/cs`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          cs: `${SITE_URL}/cs`,
          en: `${SITE_URL}/en`,
        },
      },
    },
  ];
};

export default sitemap;
