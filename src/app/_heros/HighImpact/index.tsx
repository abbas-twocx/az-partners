import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'
import Image from 'next/image'
import HeroSvg from './heroSvg'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const fileName = media?.filename || ''

  return (
    <section className={classes.heroSection}>
      <Gutter className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.heroText}>
            <RichText content={richText} />
          </div>
          {Array.isArray(links) && links.length > 0 && (
            <ul className={classes.links}>
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={classes.imageWrapper}>
          <Image
            width={420}
            height={420}
            alt={media?.alt || 'Hero Image'}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`}
          />
          <HeroSvg />
        </div>
      </Gutter>
    </section>
  )
}
