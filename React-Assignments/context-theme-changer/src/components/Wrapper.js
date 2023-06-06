import React, { useContext } from "react";

import Header from "./Header";
import Hero from "./Hero";
import { DarkModeContext } from "../context";

export default function Wrapper() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log("from wrapper", darkMode);
  return (
    <section
      style={{
        backgroundColor: darkMode ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <Header />
      <Hero />
    </section>
  );
}
