import { Reducer } from 'redux';
import { TodosState, TodoActionTypes } from './types';

// Type-safe initialState!
const initialState: TodosState = {
    list: [
        { text: 'First Task', checked: false },
        { text: 'Drink beer', checked: true },
        { text: 'Drink more beer', checked: false },
        { text: 'Beeeeer', checked: true },
        { text: '😀 + 🍺 = 😎', checked: false },
    ],
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<TodosState> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO: {
            const list = [...state.list, action.payload];
            return { ...state, list };
        }
        case TodoActionTypes.SET_TODO_CHECKED: {
            const { checked, index } = action.payload;

            console.log(action.payload);
            let list = [...state.list];
            list = list.map((item, i) => {
                if (i !== index) {
                    // This isn't the item we care about - keep it as-is
                    return item;
                }

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    checked,
                };
            });
            return { ...state, list };
        }
        case TodoActionTypes.SET_TODO_DELETE: {
            const index = action.payload;
            const list = [...state.list.slice(0, index), ...state.list.slice(index + 1)];
            return { ...state, list };
        }
        default: {
            return state;
        }
    }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as todosReducer };
