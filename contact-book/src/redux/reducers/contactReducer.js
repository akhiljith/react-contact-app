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
        case "UPDATE_CONTACT":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const deleteState = state.filter(contact => contact.id !== action.payload && contact);
            state = deleteState;
            return state;
        default:
            return state;
    }
};

export default contactReducer;