import Link from "next/link";
import React from "react";

const Header = () => {

  return (

    <div className="flex py-4 bg-stone-100 ">
      <p className="ml-4">Next 13 Auth</p>
      <div className="ml-auto mr-4 flex justify-center gap-2 uppercase text-sm font-medium">
        <div className="text-emerald-700 mr-4">
          <p>Hi Tzur,</p>
        </div>
        <Link href='/login'>Login</Link>
        <Link href='/'>Logout</Link>
      </div>
    </div>
  
  );
};

export default Header;