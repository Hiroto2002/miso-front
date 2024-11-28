import Link from "next/link";
import React from "react";

const page = () => {
  const id = 1;
  return (
    <>
      <Link href={"/articles/" + id}>link to {id}</Link>
    </>
  );
};

export default page;
