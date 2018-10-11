import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import view from './Demo1';
import * as actions from '../../../../../actions';
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
const Demo1 = connect(mapStateToProps, mapDispatchToProps)(view)
export default Demo1;
