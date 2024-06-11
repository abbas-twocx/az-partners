import React, { Suspense } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'
import { VerticalPadding } from '../../_components/VerticalPadding'

import classes from './index.module.scss'
import Image from 'next/image'
import CardsLoading from '../../_components/CardsLoading'
import Link from 'next/link'

const themeColors: { [key: string]: string } = {
  orange: 'rgb(241, 119, 32)',
  blue: 'rgb(84, 137, 230)',
  darkBlue: 'rgb(3 10 47)',
  white: 'rgb(255, 255, 255)',
}

type Props = Extract<Page['layout'][0], { blockType: 'cardBlock' }>

export const CardBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ richText, backgroundColor, cards }) => {
  const bgColor = themeColors[backgroundColor] || themeColors.white
  const contentClass = backgroundColor === 'white' ? classes.darkContent : classes.content


  return (
    <section className={classes.cardParentWrapper} style={{ backgroundColor: bgColor }}>
      <Gutter className={classes.cardsWithContent}>
        <div className={contentClass}>
          <RichText className={classes.richText} content={richText} />
        </div>
        <Suspense fallback={<CardsLoading />}>
          <div className={classes.cardsWrapper}>
            {cards.map((card, i) => {
              const fileName = card?.media?.filename
              const imageAltText = card?.media?.alt

              return (
                <div key={i} className={classes.card}>
                  {card?.media && (
                    <Image
                      alt={imageAltText || `Image ${i}`}
                      width={120}
                      height={120}
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`}
                    />
                  )}
                  <div className={classes.cardContent}>
                    <RichText className={classes.richText} content={card.cardContent} />
                  </div>
                  {card?.link?.url != '#' && (
                    <CMSLink appearance="none" className={classes.link} {...card.link} />
                  )}
                </div>   
              )
            })}
          </div>
        </Suspense>
      </Gutter>
    </section>
  )
}
