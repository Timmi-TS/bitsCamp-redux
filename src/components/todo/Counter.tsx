import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Badge } from 'antd';
// import { Todo } from '../store/list'
// import * as listActions from '../store/list/actions'

interface PropsFromState {
    unCheckedTodos: number;
    checkedTodos: number;
}

class Counter extends React.PureComponent<PropsFromState> {
    render() {
        const { checkedTodos, unCheckedTodos } = this.props;
        return (
            <div>
                <span style={{marginRight:10}}>
                    Todo <Badge count={unCheckedTodos} showZero={true} />
                </span>
                | 
                <span style={{marginLeft:10}}>
                    Done <Badge count={checkedTodos} showZero={true} style={{ backgroundColor: '#52c41a' }} />
                </span>
            </div>
        );
    }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ todos }: ApplicationState) => ({
    unCheckedTodos: todos.list.filter(t => !t.checked).length,
    checkedTodos: todos.list.filter(t => t.checked).length,
});

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(
    mapStateToProps,
    null
)(Counter);
