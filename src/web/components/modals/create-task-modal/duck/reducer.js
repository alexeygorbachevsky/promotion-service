const reducer = (state, action) => {
    const {
        type,
        payload: { value },
    } = action;
    return { ...state, [type]: value };
};

export default reducer;
