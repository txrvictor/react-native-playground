// Action Creator function
export const selectLibrary = (id) => {
    return {
        type: 'select_library',
        payload: id
    }; // this object is the Action itself
};