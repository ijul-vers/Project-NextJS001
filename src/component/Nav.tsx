import React from "react";
import "./nav.css";
import { navs } from "@/data/data";
import Link from "next/link";

export default function Nav() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
