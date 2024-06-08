import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import link from '../../fields/link'

export const CardBlock: Block = {
  slug: 'cardBlock',
  labels: {
    singular: 'Card Block',
    plural: 'Cards Block',
  },
  fields: [
    richText(),
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      label: 'Background Color',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Orange',
          value: 'orange',
        },
        {
          label: 'Dark Blue',
          value: 'darkBlue',
        },
      ],
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
