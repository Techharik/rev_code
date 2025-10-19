import React, { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext({

})

const InitialState = {
    data: [],
    loading: false,
    error: null
}

const dataReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null }
        case 'FETCH_SUCCESS':
            return { ...state, data: action.payload, loading: false, error: null }
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload }
        case 'ADD_DATA':
            return { ...state, data: action.payload, loading: false, error: null }
    }
}




const DataContextProvider = ({ children }) => {
    // const [data, setData] = useState([]);
    const [state, dispatch] = useReducer(dataReducer, InitialState);

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_START'
    //     })
    //     try {
    //         const res = async function () {
    //             const data = await fetch('https://fakestoreapi.com/products');
    //             const result = await data.json();
    //             dispatch({
    //                 type: 'FETCH_SUCCESS',
    //                 payload: result
    //             })
    //         }
    //         res()
    //     } catch (e) {
    //         dispatch({
    //             type: 'FETCH_FAIL',
    //             payload: e.message
    //         })
    //     }


    // }, [])

    return <DataContext.Provider value={{ state }}>
        {children}
    </DataContext.Provider>;
};

export default DataContextProvider;
