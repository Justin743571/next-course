'use client'
import React from 'react'

interface Props{
    error: Error,
    reset: () => void
}

const ErrorPage = ({error,reset}: Props) => {
    console.log('Error',error)

  return (
    <>
    <div>一个不期待的错误发生了</div>
    <button className='btn' onClick={() => reset()}>重试</button>
    </>
  )
}

export default ErrorPage