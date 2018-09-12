export interface Todo {
    text: string;
    checked: boolean;
}

export const enum TodoActionTypes {
    ADD_TODO = '@@list/ADD_TODO',
    SET_TODO_CHECKED = '@@list/ADD_TODO_CHECKED',
    SET_TODO_DELETE = '@@list/ADD_TODO_DELETE',
}

export interface TodosState {
    readonly list: Todo[];
}
