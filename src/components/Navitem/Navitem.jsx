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

const Navitem = (props) => {
  console.log(props);
  return (
    <div>
      <a href="#">{props.name}</a>
    </div>
  );
};
export default Navitem;
