import React from "react";

export const Left = ({ width }) => {
    return <div style={{ width: `${width}%` }} className="bg-red-500 min-h-[200px]">
        Left
    </div>
}
export const Right = ({ width }) => {
    return <div style={{ width: `${width}%` }} className="bg-green-500 min-h-[200px]">
        Right
    </div>
}


const ConatinerComp = ({ Left, Right }) => {
    return <div>
        This is My Container:Used For controlling the width;
        <div className="flex">
            < Left width={60} />
            <Right width={90} />
        </div >
    </div >;
}




export { ConatinerComp };
