import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import link from '../../fields/link'

export const OurValuesBlock: Block = {
  slug: 'OurValuesBlock',
  labels: {
    singular: 'Our Values Block',
    plural: 'Our Values Block',
  },
  fields: [
    richText(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Our Values Banner',
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
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
