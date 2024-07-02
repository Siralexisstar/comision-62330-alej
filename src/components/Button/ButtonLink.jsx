/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const ButtonLink = ({ href, text }) => {
  return (
    <a href={href} css={buttonStyle}>
      {text}
    </a>
  );
};

export default ButtonLink;
