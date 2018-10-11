import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MarketPrecipitation from './marketPrecipitation';
import * as actions from './actions';
import { bindActionCreators } from 'redux';


const mapStateToProps = (state) => {
    return {
        ...state.marketPrecipitation
    };
};

const mapDispatchToProps = (dispatch) => {
    return Object.assign({},
        bindActionCreators(actions, dispatch),
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(MarketPrecipitation);
