import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://martinzadrazil.com';

  return [
    {
      url: `${baseUrl}/cs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
};

export default sitemap;
