'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Comment } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
}

export const LeadsForm: React.FC = () => {
  const pathname = usePathname()
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<React.ReactNode | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<FormData>()

  const { user } = useAuth()

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...data,
          }),
        })

        if (!res.ok) throw new Error()

        setError(null)

        setSuccess(
          <Fragment>
            {'Your comment was submitted for moderation successfully. To approve it, '}
          </Fragment>,
        )

        reset()
      } catch (_) {
        setError('Something went wrong')
      }
    },
    [reset],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      <Input
        name="firstName"
        label="First Name"
        required
        register={register}
        error={errors.firstName}
        type="text"
        placeholder={'First Name'}
        disabled={isLoading}
        validate={value => {
          if (!value) return 'Please enter your first name!'
          return true
        }}
      />
      <Input
        name="lastName"
        label="Last Name"
        register={register}
        error={errors.lastName}
        type="text"
        placeholder={'First Name'}
        disabled={isLoading}
        validate={value => {
          if (!value) return 'Please enter your last name!'
          return true
        }}
      />
      <Input
        name="email"
        label="Email Address"
        register={register}
        error={errors.email}
        type="text"
        placeholder={'Email Address'}
        disabled={isLoading}
        validate={value => {
          if (!value) return 'Please enter your email!'
          return true
        }}
      />
      <Input
        name="phone"
        label="Phone Number"
        register={register}
        error={errors.phone}
        required
        type="text"
        placeholder={'Phone Number'}
        disabled={isLoading}
        validate={value => {
          if (!value) return 'Please enter your phone number!'
          return true
        }}
      />
      <Input
        name="message"
        label="Your Message"
        register={register}
        required
        error={errors.message}
        type="textarea"
        placeholder={'Your Message'}
        disabled={isLoading}
        validate={value => {
          if (!value) return 'Please enter your message!'
          return true
        }}
      />
      <Button
        type="submit"
        appearance="primary"
        label={isLoading ? 'Processing' : 'Submit'}
        disabled={isLoading}
        className={classes.submit}
      />
    </form>
  )
}
