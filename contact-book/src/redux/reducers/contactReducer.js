const initialState = [
    {
        id: 0,
        name: "Akhiljith",
        number: 1234567890
    },
    {
        id: 1,
        name: "Krish",
        number: 2234567890
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default contactReducer;