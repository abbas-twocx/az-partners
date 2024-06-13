import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'shortFooterText',
      type: 'textarea',
      label: 'Short Footer Text',
    },
    {
      name: 'navItemsGroup',
      type: 'array',
      label: 'Navigations Group',
      maxRows: 4,
      fields: [
        {
          name: 'navGroupName',
          type: 'text',
          label: 'Navigation Group Name',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [link()],
        },
      ],
    },
    {
      name: 'footerSocials',
      type: 'array',
      label: 'Footer Socials',
      maxRows: 4,
      fields: [
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          label: 'Social Icon',
        },
        link(),
      ],
    },
    {
      name: 'copyrightText',
      type: 'textarea',
      label: 'Copyright Text',
      required: true,
    },
  ],
}
