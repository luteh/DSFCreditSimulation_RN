/**
 * Created by Luteh on 13/07/2017.
 */
import React, {Component} from 'react'
import {View, Image, Text, Dimensions} from 'react-native'
import {ButtonRNE, Footer} from './common'

class SyaratKetentuanScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#C62828',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: null
    };

    render() {
        const {imageStyle, contentContainerStlye, textKembaliStyle} = styles;
        return (
            <View style={{flex: 1}}>
                    <Image
                        style={imageStyle}
                        source={require('../../imgs/result_img.png')}
                    />
                <View style={contentContainerStlye}>

                    <View style={{marginTop: 32}}>
                        <ButtonRNE
                            title="SETUJU"
                            onPress={() => this.props.navigation.navigate('creditSimulationScreen')}
                        />
                    </View>

                    <View style={{marginTop: 32, marginBottom: 70}}>
                        <Text style={textKembaliStyle}>
                            KEMBALI
                        </Text>
                    </View>
                </View>
                <View style={{marginBottom: 32}}>
                    <Footer/>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get('window').width;
const styles = {
    contentContainerStlye: {
        padding: 24
    },
    imageStyle: {
        width: width,
        height: width * 0.6,
        resizeMode: 'stretch',
    },
    textKembaliStyle: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center'
    }
};

export {SyaratKetentuanScreen}