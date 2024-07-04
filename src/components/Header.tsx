import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={149} height={67} />
    </div>
  );
};

export default Header;
