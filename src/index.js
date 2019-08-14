/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @nukupay developer
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
    _INCREMENT,
    _DECREMENT
} from './redux/actions/index';
class App extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center' }}>{this.props.example.count}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Button title="Increment (+)" onPress={this.props._INCREMENT} />
                    <Button title="Decrement (-)" onPress={this.props._DECREMENT} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { example } = state
    return {
        example
    }
}
export default connect(mapStateToProps, {
    _INCREMENT,
    _DECREMENT
})(App);
