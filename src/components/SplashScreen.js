/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from 'react'
import {View, Image, Dimensions, StatusBar} from 'react-native'

class SplashScreen extends Component {
    componentWillMount(){
        console.ignoredYellowBox = [
            'Unable to symbolicate',
            'source.uri',
            'Possible Unhandled Promise'
        ];

        StatusBar.setHidden(true);
    }
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


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImageStlye: {
        flex: 1,
        width: width,
        height: height,
        resizeMode: 'stretch'
    },
    imageStyle: {
        width: 250,
        height: 100,
        resizeMode: 'stretch'
    }
};
export {SplashScreen}