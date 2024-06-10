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
> = ({ links, richText, invertBackground }) => {
  return (
    <section
      className={[classes.ctaSectionWrapper, invertBackground && classes.invert]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.ctaGutter}>
        <div className={classes.callToAction}>
          <RichText className={classes.richText} content={richText} />
          <div className={classes.linkGroup}>
            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} {...link} invert={invertBackground} />
            })}
          </div>
        </div>
      </Gutter>
    </section>
  )
}

export default CallToActionBlock
