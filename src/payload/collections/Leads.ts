import type { CollectionConfig } from 'payload/types'

const Leads: CollectionConfig = {
  slug: 'leads',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
    },
  ],
}

export default Leads
