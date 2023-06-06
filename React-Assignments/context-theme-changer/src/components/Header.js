import { useContext, useState } from "react";
import { DarkModeContext } from "../context";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log("dark mode", darkMode);
  return (
    <header>
      <nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="130"
          height="102.14"
          viewBox="0 0 241 102.14"
        >
          <g id="logo" transform="translate(-632 -392)">
            <text
              id="Moham"
              transform="translate(632 459)"
              fill="#3378f9"
              font-size="64"
              font-family="Poppins-SemiBold, Poppins"
              font-weight="600"
              letter-spacing="-0.041em"
            >
              <tspan x="0" y="0" fill={darkMode ? "#fff" : "#000"}>
                M
              </tspan>
              <tspan y="0" fill="#3378f9">
                o
              </tspan>
              <tspan y="0" fill={darkMode ? "#fff" : "#000"}>
                ha
              </tspan>
              <tspan y="0" fill="#3378f9">
                m
              </tspan>
            </text>
            <path
              id="Path_1"
              data-name="Path 1"
              d="M839,484.3s-99.25,60.755-132.333,0"
              transform="translate(0 -19.297)"
              fill="none"
              stroke="#3378f9"
              stroke-width="4"
            />
          </g>
        </svg>
        <div class="nav-items">
          <ul>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Home
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                About
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Blog
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
                More
              </a>
            </li>
          </ul>
          <div class="contact">
            <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
              Login
            </a>
            <button class="btn" style={{ color: darkMode ? "#fff" : "#000" }}>
              Contact Us
            </button>
          </div>
        </div>
        <svg
          version="1.1"
          id="menu_bar"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          className="menu_bar"
          fill={darkMode ? "#fff" : "#000"}
          width="24.75px"
          height="24.75px"
          viewBox="0 0 24.75 24.75"
          onClick={() => setToggle(!toggle)}
        >
          <g>
            <path
              d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
              c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
              c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
            ></path>
          </g>
        </svg>
      </nav>
      {/* for small devices*/}
      {toggle && (
        <div class="mobile-nav" id="mobile_nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
          <div class="contact">
            <a href="/">Login</a>
            <button class="btn">Contact Us</button>
          </div>
        </div>
      )}
    </header>
  );
}
