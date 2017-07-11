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
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
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
    containerStyle:{
      marginBottom:5
    },
    textStyle:{
        fontSize:10
    },
    pickerStyle:{
        color:'#E0E0E0',
        borderWidth:1,
        borderRadius:5,
        borderColor:'grey'
    }
};


export {ComboBox}