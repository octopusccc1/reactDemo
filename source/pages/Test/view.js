import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Test from './Test';
import * as actions from './actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return Object.assign({},
        bindActionCreators(actions, dispatch),
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);
