import React from 'react';

// import { Container } from './styles';

function ButtonLink(props) {
  return <a href={props.href} className={props.className}>
      {props.children}
  </a>;
}

export default ButtonLink;