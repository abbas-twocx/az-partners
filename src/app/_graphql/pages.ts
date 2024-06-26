import {
  ARCHIVE_BLOCK,
  CALL_TO_ACTION,
  CARD_BLOCK,
  CARDS_WITH_IMAGE_BLOCK,
  CONTENT,
  LEADS_FORM_BLOCK,
  MEDIA_BLOCK,
  OUR_PROCESS_BLOCK,
  OUR_SERVICES_BLOCK,
  OUR_VALUES_BLOCK,
  TEXT_WITH_IMAGE_BLOCK,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300)  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { slug: { equals: $slug }}, limit: 1, draft: $draft) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
          ${CARD_BLOCK}
          ${OUR_VALUES_BLOCK}
          ${CARDS_WITH_IMAGE_BLOCK}
          ${TEXT_WITH_IMAGE_BLOCK}
          ${OUR_PROCESS_BLOCK}
          ${OUR_SERVICES_BLOCK}
          ${LEADS_FORM_BLOCK}
        }
        ${META}
      }
    }
  }
`
