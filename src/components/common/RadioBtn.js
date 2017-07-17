/**
 * Created by Luteh on 06/07/2017.
 */
import React, {Component} from 'react'
import {View, Text, AsyncStorage} from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Divider} from 'react-native-elements'

const radio_props = [
    {label: 'Ya', value: 0},
    {label: 'Tidak', value: 1}
];

class RadioBtn extends Component {
    state = {
        types3: [
            {label: 'Ya', value: 0},
            {label: 'Tidak', value: 1},
        ],
        value3: 0,
        value3Index: 0,
    };

    render() {
        return (
            <View>
                <Text style={{fontSize: 10, marginBottom: 5}}>
                    {this.props.text}
                </Text>
                <RadioForm
                    formHorizontal={true}
                    animation={true}
                >
                    {this.state.types3.map((obj, i) => {
                        let onPress = (value, index) => {
                            this.setState({
                                value3: value,
                                value3Index: index
                            })
                        };
                        return (
                            <RadioButton
                                labelHorizontal={true}
                                key={i}
                            >
                                {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={this.state.value3Index === i}
                                    onPress={onPress}
                                    buttonInnerColor={'black'}
                                    buttonOuterColor={'black'}
                                    buttonSize={10}
                                    buttonStyle={{}}
                                    buttonWrapStyle={{}}
                                />
                                <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    labelHorizontal={true}
                                    onPress={onPress}
                                    labelStyle={{color: 'black'}}
                                    labelWrapStyle={{marginRight: 40}}
                                />
                            </RadioButton>
                        )
                    })}
                </RadioForm>
                {/*<Text>selected: {this.state.types3[this.state.value3Index].label}</Text>*/}
                <Divider style={{backgroundColor: '#EEEEEE', marginTop: 5, marginBottom: 5}}/>
            </View>
        )
    }
}

export {RadioBtn}