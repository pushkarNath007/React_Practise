import React from "react";

const Header = ({ Comp }) => {
  return (
    <>
      <p> Header</p>
      <div>
        <Comp.Home />
      </div>
      <div>
        <Comp.Footer />
      </div>
    </>
  );
};

export default Header;
