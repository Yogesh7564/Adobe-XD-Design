import React from 'react';
import MobileContainer from '../MobileContainer/MobileContainer.jsx';

/**
 * Top-level layout – renders the centered mobile container.
 */
function Layout({ children }) {
  return <MobileContainer>{children}</MobileContainer>;
}

export default Layout;
