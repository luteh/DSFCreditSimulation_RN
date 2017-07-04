/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from 'react';
import {Text, View, Picker} from 'react-native';

class CreditSimulationScreen extends Component {
    render() {
        return (
            <View>
                <Picker
                    // selectedValue={this.state.language}
                    // onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around'
    }
};

export {CreditSimulationScreen};