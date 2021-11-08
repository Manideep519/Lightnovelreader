import React, { useEffect } from "react";

const Page = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export default Page;
