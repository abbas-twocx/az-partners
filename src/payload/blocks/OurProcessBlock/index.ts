import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import link from '../../fields/link'

export const OurProcessBlock: Block = {
  slug: 'ourProcessBlock',
  labels: {
    singular: 'Our Process Block',
    plural: 'Our Process Block',
  },
  fields: [
    richText(),
    link(),
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      fields: [
        {
          type: 'text',
          name: 'heading',
          label: 'Card Heading',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Card Description',
          required: true,
        },
      ],
    },
  ],
}
