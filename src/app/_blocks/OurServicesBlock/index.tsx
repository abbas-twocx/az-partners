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

type Props = Extract<Page['layout'][0], { blockType: 'ourServicesBlock' }>

export const OurServicesBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ richText, link, cards }) => {
  return (
    <section className={classes.cardParentWrapper}>
      <Gutter className={classes.cardsWithContent}>
        <div className={classes.darkContent}>
          <RichText className={classes.richText} content={richText} />
          <span>.</span>
          {/* <CMSLink appearance={link?.appearance || 'primary'} className={classes.link} {...link} /> */}
        </div>
        <Suspense fallback={<CardsLoading />}>
          <div className={classes.cardsWrapper}>
            {cards &&
              cards.map((card, i) => {
                const fileName = card?.media?.filename
                const imageAltText = card?.media?.alt || 'Card Icon'

                return (
                  <div key={i} className={classes.card}>
                    <div className={classes.cardNumber}>
                      <Image
                        width={26}
                        height={26}
                        alt={imageAltText}
                        src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${fileName}`}
                      />
                    </div>
                    <div className={classes.cardContent}>
                      <h5 className={classes.cardHeading}>{card?.heading}</h5>
                      <p className={classes.cardDescription}>{card?.description}</p>
                    </div>
                    <div className={classes.linkArrow}>
                      <Image
                        className={classes.arrow}
                        width={24}
                        height={24}
                        alt="Arrow"
                        src="/arrow-right.svg"
                      />
                    </div>
                  </div>
                )
              })}
          </div>
        </Suspense>
      </Gutter>
    </section>
  )
}
