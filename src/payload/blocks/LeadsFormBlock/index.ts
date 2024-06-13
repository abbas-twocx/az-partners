import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'
import link from '../../fields/link'

export const LeadsFormBlock: Block = {
  slug: 'leadsFormBlock',
  labels: {
    singular: 'Leads Form Block',
    plural: 'Leads Form Block',
  },
  fields: [richText()],
}
