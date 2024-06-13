import React from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'
import { LeadsForm } from './LeadsForm'

type Props = Extract<Page['layout'][0], { blockType: 'leadsFormBlock' }>

export const LeadsFormBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ richText }) => {
  return (
    <section className={classes.cardParentWrapper}>
      <Gutter className={classes.cardsWithContent}>
        <div className={classes.darkContent}>
          <RichText className={classes.richText} content={richText} />
          <h1>LEAD FORM COMPONENT</h1>
        </div>
        <LeadsForm />
      </Gutter>
    </section>
  )
}
