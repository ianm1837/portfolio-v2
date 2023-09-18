import React from 'react'

export default function CaseStudyHeader({ header } : { header: string }) {
  return (
    <div className='my-5'>
      <h1 className='text-4xl font-bold text-secondary'>
        {header}
      </h1>
    </div>
  )
}
