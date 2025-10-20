import React from "react";

const List = ({ languages = ['js', 'java', 'else'] }) => {

    return <div>
        {
            languages.map((l) => <p>{l}</p>)
        }
    </div>;
};

export default List;
