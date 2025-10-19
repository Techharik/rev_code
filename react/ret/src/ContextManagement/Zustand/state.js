import create from 'zustand';

const useStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const userStore = create((set) => ({
    users: [],
    loading: false,
    error: null,

    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetch(BASE_URL);
            if (!res.ok) throw new Error('Failed to fetch users');
            const data = await res.json();
            set({ users: data, loading: false });
        } catch (err) {
            set({ loading: false, error: err.message });
        }
    },
}));