import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://urgentwheels.in',
      lastModified: new Date(),
      priority: 1.0,
    },
  ]
}