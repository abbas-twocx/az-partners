import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const fileName = media?.filename || ''
  const backgroundImageStyle =
    media && typeof media === 'object'
      ? {
          backgroundImage: `url(${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      : {}

  return (
    <section className={classes.heroSection} style={backgroundImageStyle}>
      <Gutter className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.heroText}>
            <RichText content={richText} />
            {/* <h1>{heading || 'Hero Heading'}</h1>
            <p>{subHeading || 'Hero Sub Heading'}</p> */}
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
      </Gutter>
    </section>
  )
}
