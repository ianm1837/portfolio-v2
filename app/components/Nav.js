import React from 'react';

export default function Nav() {
  return (
    <div className="navbar bg-base-100 m-auto w-6/10">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Ian Meyer</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm btn-secondary mr-4">
          resume
        </button>
      </div>
    </div>
  );
}
