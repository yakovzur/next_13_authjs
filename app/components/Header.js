'use client'

import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Header = () => {

  const { data } = useSession();

  return (

    <div className="flex py-4 bg-stone-100 ">
      <p className="ml-4">Next 13 Auth</p>
      <div className="ml-auto mr-4 flex justify-center gap-2 text-sm font-medium">
        {data?.user ? (
          <>
            <div className="text-emerald-700 mr-4">
            <p>Hi, {data?.user?.name}</p>
            </div>
            <span className="cursor-pointer" onClick={() => signOut()}>
              Logout
            </span>
            </>
        ) : (   
          <Link href='/login'>Login</Link>
        )}  
      </div>
    </div>
  );
};

export default Header;