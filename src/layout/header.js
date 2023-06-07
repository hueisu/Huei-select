import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isToggleOn, setIsToggleOn] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="row row-center">
          <h1 className="logo">
            <Link href="/">Huei Select</Link>
          </h1>
          {/* TODO: Search function */}
          {/* <div className="header-search-box">
            <input placeholder="Search by keyword" />
          </div> */}
        </div>

        <nav className="nav-list">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Mobile view start*/}
        <div
          className="nav-toggle"
          onClick={() => setIsToggleOn((prevState) => !prevState)}
        >
          {isToggleOn ? (
            <i className="fa-solid fa-xmark fa-xl" />
          ) : (
            <i className="fa-solid fa-bars fa-xl" />
          )}
        </div>
        <nav className={`${isToggleOn ? "" : "hide"} side-nav-list`}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </nav>
        {/* Mobile view end */}
      </div>
    </header>
  );
}
