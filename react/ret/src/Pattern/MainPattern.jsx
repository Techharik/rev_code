import React from "react";
import { Left, Right, ConatinerComp } from "./ConatinerComp";
import ListPattern from "./ListPattern";
import ListChild from "./ListChild";
import Modal from "./Modal";
const MainPattern = () => {
    return <div>
        <h1>Main Pattern Concepts Here</h1>
        <ConatinerComp Left={Left} Right={Right} />


        <Modal >
            <ListPattern
                datas={[{ name: 'Hari Prasath' }, { name: 'Sabari' }]}
                ChildComponent={ListChild} />
        </Modal>
    </div>;
}

export default MainPattern;
