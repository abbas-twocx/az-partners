import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import link from '../../fields/link'

export const OurServicesBlock: Block = {
  slug: 'ourServicesBlock',
  labels: {
    singular: 'Our Services Block',
    plural: 'Our Services Block',
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
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Icon',
          required: true,
        },
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
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
