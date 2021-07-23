const initialState = [
    {
        id: 0,
        name: "Akhiljith",
        number: 1234567890,
        email: "akhil@gmail.com"
    },
    {
        id: 1,
        name: "Krish",
        number: 2234567890,
        email: "krish@gmail.com"
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
        default:
            return state;
    }
};

export default contactReducer;