import React from "react";

//link
import Link from "@material-ui/core/Link";

//icon
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

//scss
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer-wrapper">
      <h2>@2020 Made by Muhammad Salman Asif</h2>
      <div className="footer-social-links">
        <Link
          href="https://www.facebook.com/profile.php?id=100015273218086"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon style={{ color: "#3b5998", fontSize: "4rem" }} />
        </Link>
        <Link
          href="https://github.com/Salman-007-Pro"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            style={{ color: "#333", fontSize: "3.5rem" }}
            rel="noopener"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
