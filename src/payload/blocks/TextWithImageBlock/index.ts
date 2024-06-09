import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const TextWithImageBlock: Block = {
  slug: 'textWithImageBlock',
  labels: {
    singular: 'Text With Image Block',
    plural: 'Texts With Image Block',
  },
  fields: [
    richText(),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Text Related Image',
    },
  ],
}
