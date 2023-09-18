import React from "react";

export default function ({ children } : { children: React.ReactNode}) {
  return <div className="mt-16 mx-auto w-11/12 md:w-8/12 xl:w-7/12 container">{children}</div>;
}
