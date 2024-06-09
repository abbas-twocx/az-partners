import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const CardsWithImageBlock: Block = {
  slug: 'cardsWithImageBlock',
  labels: {
    singular: 'Cards With Image Block',
    plural: 'Cards With Image Block',
  },
  fields: [
    richText(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      label: 'Card Media',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Media',
        },
        richText({
          name: 'cardContent',
          label: 'Card Content',
          required: true,
        }),
      ],
    },
  ],
}
