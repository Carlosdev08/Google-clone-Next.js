"use client";
import React, { useEffect } from 'react'

export default function error({error, reset}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
     console.error('error', error);
    }, [error]);

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Something went wrong! </h1>
        <button className='text-blue-500'>Try again</button>
    </div>
  )
}
