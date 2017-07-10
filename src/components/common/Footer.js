/**
 * Created by Luteh on 06/07/2017.
 */
import React from 'react'
import {View, Text, Image} from 'react-native'

const Footer = () => {
    return (
        <View style={styles.containerStyle}>
            <View style={{justifyContent:'center'}}>
                <Text style={{fontSize: 10}}>
                    POWERED BY :
                </Text>
            </View>
            <View style={{width:5}}>

            </View>

            <Image
                style={styles.imageStyle}
                source={require('../../../imgs/footer_logo.png')}
            />
        </View>
    )
};


const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageStyle: {
        height: null,
        width: 100,
        resizeMode: 'stretch'

    }
};

export {Footer}