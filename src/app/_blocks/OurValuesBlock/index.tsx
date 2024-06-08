import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'ourValuesBlock' }>

export const OurValuesBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ richText, media, cards }) => {
  
  return (
    <section className={classes.cardParentWrapper}>
      <Gutter className={classes.cardsWithContent}>
        <div className={classes.darkContent}>
          <RichText className={classes.richText} content={richText} />
        </div>
      </Gutter>
    </section>
  )
}
