import React from 'react'
import Image from 'next/image'
import LinkedIn from './icons/linkedin.svg'
import Github from './icons/github-mark-white.svg'

export default function Footer() {
  return (
    <div className="flex flex-col h-48 w-full items-center justify-center">
      <div className="flex w-11/12 items-center justify-center sm:w-9/12">
        <div className="m-2.5 h-fit">
          <Image src={LinkedIn} alt='LinkedIn Logo' height={35} />
        </div>
        <div className="m-2.5 h-fit">
          <Image src={Github} alt='Github Logo' height={35} />
        </div>
      </div>
      <div className='m-5'>©2023 ianwmeyer.com</div>
    </div>
  );
}
