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
// Redux store
let store = Redux.createStore(groceryReducer);
// Clear button to clear grocery list
const clearList = () => {
    // Clear user input
    document.querySelector('#newItem').value = '';
    // Call action to clear list
    store.dispatch({ type: 'grocery/clear' });
};
const newGrocery = (e) => {
    e.preventDefault();
    // Get value from user input
    const item = document.querySelector('#newItem').value;
    // If input is empty return
    if(item === '') return
    // Redux
    store.dispatch({
        type: 'grocery/add',
        text: item
    });
    console.log(store.getState());
};
grocerySubmit.addEventListener('click', e => newGrocery(e));
clearBtn.addEventListener('click', clearList);