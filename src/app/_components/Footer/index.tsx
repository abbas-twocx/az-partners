import React from 'react'
import Link from 'next/link'

import { Footer, Settings } from '../../../payload/payload-types'
import { fetchFooter, fetchSettings } from '../../_api/fetchGlobals'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
import { Gutter } from '../Gutter'
import { CMSLink } from '../Link'

import classes from './index.module.scss'
import Image from 'next/image'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    console.error(error)
  }

  const navItemsGroup = footer?.navItemsGroup || []
  const footerSocials = footer?.footerSocials || []
  const shortFooterText = footer?.shortFooterText || ''
  const copyrightText = footer?.copyrightText || ''

  return (
    <footer className={classes.footer}>
      <Gutter className={classes.wrap}>
        {/* Short footer text */}
        <div className={classes.shortText}>{shortFooterText}</div>

        {/* Footer links */}
        <nav className={classes.nav}>
          {navItemsGroup.map(({ navGroupName, navItems }, i) => (
            <div key={i} className={classes.column}>
              <h3 className={classes.namGroupName}>{navGroupName}</h3>
              {navItems.map((navItem, j) => (
                <CMSLink key={j} {...navItem} />
              ))}
            </div>
          ))}
        </nav>

        {/* Footer socials */}
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

        {/* Copyright */}
        <div className={classes.copyright}>{copyrightText}</div>
      </Gutter>
    </footer>
  )
}
