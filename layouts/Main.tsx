import React from "react";

const Page: React.SFC = ({ children }) => (
  <main>
    <style>{`
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }
    `}</style>

    {children}
  </main>
);

export default Page;
