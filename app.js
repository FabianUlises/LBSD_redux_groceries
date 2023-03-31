// Dom elements
const groceryList = document.querySelector('#list');
const grocerySubmit = document.querySelector('#addGrocery');
const clearBtn = document.querySelector('#clear');
// Initial state default value
const initialState = {
    groceries: []
};
// Reducer
const groceryReducer = (state = initialState.groceries, action) => {
    switch(action.type) {
        case 'grocery/add':
            return [
                ...state,
                {
                    text: action.text
                }
            ]
        case 'grocery/clear':
            return []
        default:
            return state
    }
};