import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { TodosState, todosReducer } from './todos';

// The top-level state object
export interface ApplicationState {
    todos: TodosState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface ConnectedReduxProps<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<ApplicationState>({
    todos: todosReducer,
});
