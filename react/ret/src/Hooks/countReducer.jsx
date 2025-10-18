export const init = { count: 0 }; // initial state

export function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1  // ✅ use colon and reference state.count
            };
        default:
            return state; // always return state for unknown actions
    }
}
