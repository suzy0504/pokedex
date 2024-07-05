import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between w-full">
      <Image src="/logo.png" alt="logo" width={149} height={67} />
    </div>
  );
};

export default Header;
