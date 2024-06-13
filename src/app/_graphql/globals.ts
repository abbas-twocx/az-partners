import { LINK_FIELDS } from './link'
import { MEDIA, MEDIA_FIELDS } from './media'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
    link ${LINK_FIELDS({ disableAppearance: true })}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
  shortFooterText
  navItemsGroup {
    navGroupName
    navItems {
      link ${LINK_FIELDS()}
		}
  }
  footerSocials {
    ${MEDIA}
    link ${LINK_FIELDS()}
  }
  copyrightText
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    siteLogo {
       ${MEDIA_FIELDS}
    }
    postsPage {
      slug
    }
    projectsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
