import * as React from 'react';
import { Provider, connect } from 'react-redux';
import { Store } from 'redux';
import { ApplicationState } from '../store';
import './App.css';
import TodoList from './todo/List';

interface PropsFromDispatch {
    [key: string]: any;
}

interface OwnProps {
    store: Store<ApplicationState>;
}

type AllProps = PropsFromDispatch & OwnProps;

class App extends React.PureComponent<AllProps> {
    public render() {
        return (
            <Provider store={this.props.store}>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">bitsCamp - Redux</h1>
                    </header>
                    <div className="App-content">
                        <TodoList />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default connect<null, PropsFromDispatch, OwnProps, ApplicationState>(null)(App);
