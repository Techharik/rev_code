import React from "react";

const ListPattern = ({ datas, ChildComponent }) => {
    console.log(datas, ChildComponent)
    return <div>
        {
            datas?.map((data, ind) => {
                return <ChildComponent key={ind} props={{ ...data }} />
            })
        }
    </div>;
};

export default ListPattern;
