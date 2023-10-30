import Link from "next/link";
import React from "react";

const DBLink = ({ url, name, className }) => {
  return (
    <>
      <Link href={url} className={className}>
        {name}
      </Link>
    </>
  );
};

export default DBLink;
