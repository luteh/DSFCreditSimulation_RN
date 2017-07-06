/**
 * Created by Luteh on 06/07/2017.
 */
import React, {Component} from 'react'
import {View, Text, Picker} from 'react-native'

class ComboBox extends Component{
    state={
        language: 'Select item'
    };
    render(){
        return(
            <View>
                <Text>
                    {this.props.text}
                </Text>
                <Picker
                    style={styles.pickerStyle}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        )
    }
}

const styles = {
    pickerStyle:{
        color:'#E0E0E0'
    }
};


export {ComboBox}