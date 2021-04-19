import React from 'react'

const initialState = [
    {
        title: "last episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "we created a static card"
            },
            {
                id: 1,
                text: "we mixed material ui"
            }
        ]
    },
    {
        title: "this episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "we created a reducer"
            },
            {
                id: 1,
                text: "render cards using static data"
            },
            {
                id : 2,
                text: "and miscellinus changes"
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default listReducer;