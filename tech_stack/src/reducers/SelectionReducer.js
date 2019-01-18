// if state is 'undefined' (when initializing), give it a initial value (null)
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload; // which is the id of library
        default:
            return state;
    }
};