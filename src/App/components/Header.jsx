import PropTypes from "prop-types";

import { GiChameleonGlyph } from 'react-icons/gi'

export function Header(props) {
  return (
    <div className="flex-col mt-2 w-screen mb-2 text-center">
      <header className=" w-11/12 m-auto p-2">
        <h1>{props.title}</h1>
        <h2 className="flex gap-2 items-center justify-center">{props.children}  <GiChameleonGlyph className="text-lime-400 bg-lime-900 relative rounded"/></h2>
       
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.DefaultProps = {
  title: `Dick Chamaleon Blog`,
};
