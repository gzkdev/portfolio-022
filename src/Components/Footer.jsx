import FooterStyled from "./FooterStyled";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <div>
          <div>
            <a href="mailto:ezihegodswill01@gmail.com">
              ezihegodswill01@gmail.com
            </a>
            <a href="tel:+2347041877819">+2347041877819</a>
          </div>
          <div>Lagos, Nigeria</div>
        </div>
        <div>
          <div>2020 &copy; Godswill</div>
          <ul>
            <li>
              <a
                href="https://twitter.com/gzkdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/ezihe-godswill"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/gzkdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>

            <li>
              <a
                href="https://codepen.io/gzkdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codepen
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  );
}

export default Footer;
