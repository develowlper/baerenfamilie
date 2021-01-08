import React from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return children;
};

Layout.displayName = "Layout";

Layout.propTypes = { children: PropTypes.node.isRequired };

Layout.defaultProps = {};

export default Layout;
