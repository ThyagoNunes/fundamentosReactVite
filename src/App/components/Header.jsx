import PropTypes from "prop-types";

export function Header(props) {
  return (
    <div className="mt-2 w-screen mb-2 text-center">
      <header className="w-11/12 m-auto p-2">
        <h1>{props.title}</h1>
        <h2>{props.children}</h2>
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
