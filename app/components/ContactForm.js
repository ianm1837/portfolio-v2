import React from 'react';

export default function ContactForm() {
  return (
    <div className="flex w-11/12 mx-auto mt-28">
      <div className='w-6/12'>
        <h1 className='text-xl font-bold'>
          Contact Me
        </h1>
        <p>
          Thanks for stopping by to take a look at my work.
        </p>
      </div>

      <div className='flex flex-col w-6/12'>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
}
