/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from 'react'
import {View, Image, Dimensions} from 'react-native'

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('syaratKetentuan')
        }, 2000)
    }

    render() {
        const {containerStyle, imageStyle, backgroundImageStyle} = styles;
        return (
        <Image
        style={backgroundImageStyle}
        source={require('../../imgs/splashscreen.png')}
        >
            <View style={containerStyle}>
                <Image
                    style={imageStyle}
                    source={require('../../imgs/splashscreen_logo.png')}
                />
            </View>
        </Image>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImageStlye: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    imageStyle: {
        width: 250,
        height: 100,
        resizeMode: 'stretch'
    }
};
export {SplashScreen}