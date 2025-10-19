import { atom, atomFamily, selector, selectorFamily } from 'recoil';

let BASE_URL = "https://jsonplaceholder.typicode.com/users"


export const getAllUsers = selector({
    key: 'getAllUsers',
    get: async ({ get }) => {
        try {
            const res = await fetch(`${BASE_URL}`);
            const data = await res.json();
            console.log(data)
            return data;
        } catch (e) {
            return e
        }
    }
})

export const getSingleUsers = selectorFamily({
    key: 'singleUser',
    get: (id) => async ({ get }) => {
        try {
            if (id == 0) return;
            const res = await fetch(`${BASE_URL}/${id}`);
            const data = await res.json();
            console.log(data)
            return data;
        } catch (e) {
            return e
        }
    },
    set: (id) => async ({ get }) => {

    }
})

