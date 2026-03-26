import Link from "next/link";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <div>
      <div>String</div>
      <div>{slug}</div>
      <Link href={"/"}>main page</Link>
    </div>
  );
};

export default page;
