import * as React from 'react';
import { List } from 'antd';
import NewTodo from './NewTodo'
import Counter from './Counter'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Todo } from '../../store/todos';
import * as todosActions from '../../store/todos/actions';

import TodoEntry from './TodoEntry';

interface PropsFromDispatch {
    setTodoChecked: typeof todosActions.setTodoChecked;
    setTodoDelete: typeof todosActions.setTodoDelete;
}

interface PropsFromState {
    list: Todo[];
}

type Props = PropsFromDispatch & PropsFromState;

class TodoList extends React.PureComponent<Props> {
    handleTodoChecked = (index: number, checked: boolean) => {
        this.props.setTodoChecked(index, checked);
    };
    handleTodoDelete = (index: number) => {
        this.props.setTodoDelete(index)
    }
    renderTodoEntry = (todo: Todo, index: number) => {
        return (
            <List.Item>
                <TodoEntry key={index} todo={todo} index={index} 
                onChange={this.handleTodoChecked} 
                onDelete={this.handleTodoDelete}
                />
            </List.Item>
        );
    };
    render() {
        const { list } = this.props;
        return (
            <List
                header={<div><Counter /></div>}
                footer={<div><NewTodo /></div>}
                bordered={true}
                itemLayout="horizontal"
                dataSource={list}
                renderItem={this.renderTodoEntry}
            />
        );
    }
}

const mapStateToProps = ({ todos }: ApplicationState) => ({
    list: todos.list,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setTodoChecked: (index: number, checked: boolean) => dispatch(todosActions.setTodoChecked(index, checked)),
    setTodoDelete: (index: number) => dispatch(todosActions.setTodoDelete(index)),
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
