"use client";
import Link from "next/link";


export default function Nav() {
  return (
    <div className="w-6/10 navbar sticky top-0 z-30 m-auto flex justify-center bg-base-100">
      <div className="w-11/12 sm:w-9/12">
        <div className="flex-1 ">
          <Link className="btn btn-ghost text-xl normal-case" href="/">
            Ian Meyer
          </Link>
        </div>
          <a href="/Ian-Meyer-Resume-2023.pdf" target="_blank" className="btn normal-case btn-secondary btn-sm mx-4 transform hover:scale-110">Resume</a>
      </div>
    </div>
  );
}
