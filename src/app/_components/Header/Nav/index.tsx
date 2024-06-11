'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType, Settings } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'
import Image from 'next/image'

export const HeaderNav: React.FC<{ header: HeaderType; settings: Settings }> = ({
  header,
  settings,
}) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  const fileName = settings?.siteLogo?.filename || ''
  const logoAlt = settings?.siteLogo?.alt || 'AZ & Partners'

  return (
    <div className={classes.navWrapper}>
      <div>
        <Link href={'/'}>
          <Image width={220} height={20} alt={logoAlt} src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`} />
        </Link>
      </div>
      <nav
        className={[
          classes.nav,
          // fade the nav in on user load to avoid flash of content and layout shift
          // Vercel also does this in their own website header, see https://vercel.com
          user === undefined && classes.hide,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {navItems.map(({ link }, i) => {
          return <CMSLink key={i} {...link} appearance="none" />
        })}
        <CMSLink className={classes.bookingBtn} {...header?.link} appearance="primary" />
        {/* {user && <Link href="/account">Account</Link>} */}
        {/*
        // Uncomment this code if you want to add a login link to the header
        {!user && (
          <React.Fragment>
            <Link href="/login">Login</Link>
            <Link href="/create-account">Create Account</Link>
          </React.Fragment>
        )}
      */}
      </nav>
    </div>
  )
}