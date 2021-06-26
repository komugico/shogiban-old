import React from 'react';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import BoardStore from './stores/board/store';
import BoardContainer from './containers/BoardContainer.js';

class ToolsRouter extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/shogiban/board">
                    <Provider store={BoardStore}>
                        <BoardContainer />
                    </Provider>
                </Route>
            </div>
        )
    }
}

export default ToolsRouter;