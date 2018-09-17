import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { ApplicationState } from '../store';
import { Todo } from '../../store/todos';
import * as todosActions from '../../store/todos/actions';

interface PropsFromDispatch {
    addTodo: typeof todosActions.addTodo;
}

class NewTodo extends React.PureComponent<PropsFromDispatch & FormComponentProps> {
    handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.addTodo({ text: values.text, checked: false });
                this.props.form.resetFields()
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('text', {
                        rules: [{ required: true, message: 'Please input your text' }],
                    })(<Input placeholder="Text" />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Ok
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const NewTodoForm = Form.create<PropsFromDispatch>()(NewTodo);

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addTodo: (todo: Todo) => dispatch(todosActions.addTodo(todo)),
});
export default connect(
    null,
    mapDispatchToProps
)(NewTodoForm);
