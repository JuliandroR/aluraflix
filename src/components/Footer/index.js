import React from "react";
import { FooterBase, ImageLogo } from "./styles";
import Logo from "../../assets/img/Logo.png";

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <ImageLogo src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
