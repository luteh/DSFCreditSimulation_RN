/**
 * Created by Luteh on 06/07/2017.
 */
import React from 'react'
import {View, Text, Image} from 'react-native'

const Footer = () => {
    return (
        <View style={styles.containerStyle}>
            <Text>
                POWERED BY
            </Text>
            <Image
                style={styles.imageStyle}
                source={{uri: 'https://siva.jsstatic.com/id/1404/images/banner/1404_banner_0_90874.jpg'}}
            />
        </View>
    )
};


const styles = {
    containerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    imageStyle: {
        flex:1,
        height: 30,
        width: 100,
        resizeMode:'stretch'
    }
};

export {Footer}