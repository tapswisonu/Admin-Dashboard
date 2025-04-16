import React from "react";
// import { HelmetProvider, Helmet } from "react-helmet-async";

// Component to set page title and description
const PageMeta = ({ title, description }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
   </>
);

// Wrap your app with HelmetProvider for context
export const AppWrapper = ({ children }) => (
  // <HelmetProvider>\<>
  <>
    {/* </HelmetProvider> */}
    <PageMeta title="My App" description="This is my app" />
  </>
);

export default PageMeta;
