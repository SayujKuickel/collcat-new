import PropTypes from "prop-types";

const ContainerLayout = ({ children, styles }) => {
  return (
    <section className={`container px-5 mx-auto ${styles}`}>{children}</section>
  );
};

ContainerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerLayout;
