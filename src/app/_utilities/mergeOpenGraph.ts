import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'Oh Man Clothing',
  title: 'Oh Man Clothing',
  description: 'A clothing brand paying homage to the culture',
  images: [
    {
      url: 'https://i.imgur.com/34Omd7h.jpg',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
