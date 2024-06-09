import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'
import Image from 'next/image'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, richText, invertBackground, media }) => {
  const fileName = media?.filename || ''

  return (
    <section
      className={[classes.ctaSectionWrapper, invertBackground && classes.invert]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter>
        <div className={classes.callToAction}>
          <div className={classes.wrap}>
            <div className={classes.content}>
              <RichText className={classes.richText} content={richText} />
              <div className={classes.linkGroup}>
                {(links || []).map(({ link }, i) => {
                  return <CMSLink key={i} {...link} invert={invertBackground} />
                })}
              </div>
            </div>
            <div className={classes.imageWrapper}>
              <Image
                alt={media?.alt || 'Call to Action Image'}
                width={440}
                height={710}
                src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`}
                className={classes.image}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default CallToActionBlock
