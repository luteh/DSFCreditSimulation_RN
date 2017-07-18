import React, { Component } from 'react';
import { TextInput, Dimensions } from 'react-native';
import ModalPicker from "../modalPicker/ModalPicker";

const CustomModalPicker = ({ children, onChangeOption, optData }) => {
    return(
        <ModalPicker
            data={optData}
            onChange={onChangeOption}>

            <TextInput
                style={styles.textInputStyle}
                underlineColorAndroid='transparent'
                editable={false}
                value={children} />

        </ModalPicker>
    );
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
    textInputStyle: {
        width: SCREEN_WIDTH * 0.9,
        height: 40,
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8
    }
}

export { CustomModalPicker };