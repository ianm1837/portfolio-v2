import React from 'react'

export default function CaseStudyTLDR({ tldr } : { tldr: string[]}) {
  return (
    <div className='lg:w-4/12'>
      <h2 className='mt-0'>TL;DR</h2>
      <ul className=''>
      {tldr.map((tldrItem, index) => (
          <li key={index}>{tldrItem}</li>
          ))}
      </ul>
    </div>
  )
}
