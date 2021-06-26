import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

import HeaderModule from '../../shared/HeaderModule';

import * as actions from '../stores/board/actions';

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <HeaderModule />
                <br />
                <Container fluid>
                    
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, actions)(BoardContainer);