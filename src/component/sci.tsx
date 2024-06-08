import React from "react";
import { scis } from "@/data/data";

export default function Sci() {
  return (
    <>
      {scis.map((sci) => (
        <a
          href={sci.link}
          key={sci.id}
          target="_blank"
          className="mx-2 color-black"
        >
          <span className={sci.icon}></span>
        </a>
      ))}
    </>
  );
}
