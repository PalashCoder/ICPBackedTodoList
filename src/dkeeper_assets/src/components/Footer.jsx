import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ {year} to{" "}
        <a href="https://github.com/PalashCoder" target="_blank">Palash</a>
      </p>
    </footer>
  );
}

export default Footer;
