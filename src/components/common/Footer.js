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
                    POWERED BY
                </Text>
            </View>

            <Image
                style={styles.imageStyle}
                source={{uri: 'https://siva.jsstatic.com/id/1404/images/banner/1404_banner_0_90874.jpg'}}
            />
        </View>
    )
};


const styles = {
    containerStyle: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imageStyle: {
        height: 40,
        width: 80,
        resizeMode: 'stretch'

    }
};

export {Footer}