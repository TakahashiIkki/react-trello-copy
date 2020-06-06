import {CONSTANTS} from "../actions";

let listID = 2;
let cardID = 5;

const initialState = [
    {
        title: "Last Episode",
        id: `list-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "We created a static list and a static card"
            },
            {
                id: `card-${1}`,
                text: "We used a mix between material UI React and styled components"
            },
        ]
    },
    {
        title: "This Episode",
        id: `list-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "We will create our first reducer"
            },
            {
                id: `card-${3}`,
                text: "and render many cards on out list with static data"
            },
            {
                id: `card-${4}`,
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
                id: `list-${listID}`
            }
            listID += 1
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            }
            cardID += 1

            return state.map(list => {
                if (list.id === action.payload.listID) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
        default:
            return state;
    }
}

export default listsReducer;