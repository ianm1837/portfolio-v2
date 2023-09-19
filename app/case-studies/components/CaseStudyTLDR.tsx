import React from 'react'

export default function CaseStudyTLDR({ tldr } : { tldr: string[]}) {
  return (
    <div>
      <h1 className='text-2xl font-bold text-warning'>TL;DR</h1>
      <ul className='list-disc list-inside'>
      {tldr.map((tldrItem, index) => (
          <li>{tldrItem}</li>
          ))}
      </ul>
    </div>
  )
}
