import React from 'react'
import Link from 'next/link'
import { Footer, Settings } from '../../../payload/payload-types'
import { fetchFooter, fetchSettings } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import Image from 'next/image'
import classes from './index.module.scss'

export async function Footer() {
  let footer: Footer | null = null
  let settings: Settings | null = null

  try {
    footer = await fetchFooter()
    settings = await fetchSettings()
  } catch (error) {
    console.error(error)
  }

  const navItemsGroup = footer?.navItemsGroup || []
  const footerSocials = footer?.footerSocials || []
  const shortFooterText = footer?.shortFooterText || ''
  const copyrightText = footer?.copyrightText || ''
  const fileName = settings?.siteLogo?.filename || ''
  const imageAltText = settings?.siteLogo?.alt || 'AZ & PARTNERS'

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        <div className={classes.leftSection}>
          <Image
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`}
            alt={imageAltText}
            width={240}
            height={90}
          />
          <div className={classes.certifications}>
            <Image src="/charterd-logo.svg" alt="Certification" width={124} height={80} />
            <Image src="/tax-agent-logo.svg" alt="Certification" width={124} height={80} />
            <Image src="/trusted-logo.svg" alt="Certification" width={124} height={80} />
          </div>
        </div>

        <div className={classes.rightSection}>
          <nav className={classes.nav}>
            {navItemsGroup.map((item, i) => (
              <div key={i} className={classes.column}>
                <h3 className={classes.namGroupName}>{item?.navGroupName}</h3>
                {item.navItems.map((navItem, j) => (
                  <Link className={classes.navGroupNav} key={j} href={'#'}>
                    {navItem?.link?.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
          <div className={classes.socials}>
            {footerSocials.map((social, i) => (
              <Image
                key={i}
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${social.media.filename}`}
                alt={social.media.alt || 'Social Media Icon'}
                width={32}
                height={32}
              />
            ))}
          </div>
        </div>
      </Gutter>
      {/* <div className={classes.copyright}>{copyrightText}</div> */}
    </footer>
  )
}
