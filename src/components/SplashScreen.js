/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from 'react'
import {View, Image} from 'react-native'

class SplashScreen extends Component {

    componentWillMount() {
        console.ignoredYellowBox = [
            'Unable to symbolicate',
            'source.uri',
            'Possible Unhandled Promise'
        ];
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('syaratKetentuan')
        }, 2000)
    }

    render() {
        const {containerStyle, imageStyle, backgroundStlye} = styles;
        return (
            <Image
                style={backgroundStlye}
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
    backgroundStlye: {
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