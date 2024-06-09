import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const CardsWithImageBlock: Block = {
  slug: 'cardsWithImageBlock',
  labels: {
    singular: 'Cards With Image Block',
    plural: 'Cards With Image Block',
  },
  fields: [richText()],
}
