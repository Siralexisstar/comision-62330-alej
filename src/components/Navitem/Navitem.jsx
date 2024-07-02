/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const linkStyle = css`
  color: blue;
  text-decoration: none;
  padding: 10px;
  &:hover {
    color: red;
  }
`;

const Navitem = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  );
};
export default Navitem;
