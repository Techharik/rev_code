import React, { Suspense } from "react";

const List = async () => {
  const data = await fetch("https://fakestoreapi.com/carts").then((response) =>
    response.json(),
  );
  console.log(data);
  return (
    <div>
      <Suspense>
        <div>
          {data.map((d: any) => (
            <h1 key={d.id}>{d.id}</h1>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default List;
