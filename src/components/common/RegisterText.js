/**
 * Created by Luteh on 06/07/2017.
 */
import React from 'react'
import {View, Text} from "react-native";

const RegisterText = ({onPress}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.fontStyle}>
                Tidak punya akun? <Text style={[styles.fontStyle, {fontWeight: 'bold'}]}
                                        onPress={onPress}>
                DAFTAR SEKARANG
            </Text>
            </Text>
        </View>
    )
};

const styles = {
    fontStyle: {
        color: 'red'
    }
};

export {RegisterText}