import {CONSTANTS} from "../actions";

let listID = 2;

const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "We created a static list and a static card"
            },
            {
                id: 1,
                text: "We used a mix between material UI React and styled components"
            },
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "We will create our first reducer"
            },
            {
                id: 1,
                text: "and render many cards on out list with static data"
            },
            {
                id: 2,
                text: "we will also make some little changes"
            },
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listID
            }
            listID += 1
            return [...state, newList];
        default:
            return state;
    }
}

export default listsReducer;