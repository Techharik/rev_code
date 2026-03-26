import React, { Suspense } from "react";
import List from "./List";

const page = async () => {
  return (
    <div>
      Hello world
      <div>Hello</div>
      {/* Patial rendering */}
      <Suspense fallback={<p>loading....</p>}>
        <List />
      </Suspense>
    </div>
  );
};

export default page;
