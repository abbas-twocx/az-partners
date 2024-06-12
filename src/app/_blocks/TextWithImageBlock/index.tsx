import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import Image from 'next/image' // Ensure you have next/image installed and set up

import classes from './index.module.scss'
import TextWithImageSvg from './TextWithImageSvg'

type Props = Extract<Page['layout'][0], { blockType: 'textWithImageBlock' }>

export const TextWithImageBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ richText, media }) => {
  return (
    <section className={classes.cardParentWrapper}>
      <Gutter className={classes.cardsWithContent}>
        <div className={classes.backgroundSvgWrapper}>
          <TextWithImageSvg/>
        </div>
        <div className={classes.leftSection}>
          <img
            alt={media.alt || 'Image'}
            width={990}
            height={980}
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`}
            className={classes.image}
          />
        </div>
        <div className={classes.rightSection}>
          <RichText className={classes.richText} content={richText} />
        </div>
      </Gutter>
    </section>
  )
}

export default TextWithImageBlock
