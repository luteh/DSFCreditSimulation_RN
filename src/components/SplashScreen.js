/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from 'react'
import {View, Image, Dimensions} from 'react-native'

class SplashScreen extends Component {
    componentDidMount(){
    this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    source={{uri: 'https://siva.jsstatic.com/id/1404/images/banner/1404_banner_0_90874.jpg'}}
                    style={styles.imageStyle}
                />
            </View>
        )
    }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
    containerStyle: {
        flex: 1
    },
    imageStlye: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        resizeMode: 'stretch'
    }
};
export {SplashScreen}