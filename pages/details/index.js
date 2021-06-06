import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      Pokemon Description
      <li>
        <Link href="blog/pickachu">
          <a>How pickachu got his name</a>
        </Link>
      </li>
    </div>
  );
};

export default index;
