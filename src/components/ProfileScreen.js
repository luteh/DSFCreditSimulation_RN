/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from 'react';
import {Text, View, AsyncStorage, Image, Button, Dimensions} from 'react-native';

class ProfileScreen extends Component {
    componentWillMount() {
        this.getProfile();

        //Ignore the 'Setting a timer' warning from firebase for Android
        console.ignoredYellowBox = [
            'source.uri'
        ]
    }

    constructor() {
        super();
        this.state = {
            full_name: '',
            phone_number: '',
            dealer_address: '',
            email: '',
            avatar: ''
        }
    }

    getProfile = async () => {
        try {
            await AsyncStorage.getItem('user', (error, result) => {
                if (result) {
                    let resultParsed = JSON.parse(result);
                    const {full_name, phone_number, dealer_address, email, avatar} = resultParsed;
                    this.setState({full_name, phone_number, dealer_address, email, avatar});
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image
                    style={styles.profileImageStyle}
                    source={{uri: this.state.avatar}}
                />
                <View>
                    <Text style={{fontWeight:'bold'}}>Nama Lengkap</Text>
                    <Text>{this.state.full_name}</Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>No. Handphone</Text>
                    <Text>{this.state.phone_number}</Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>Alamat Kantor</Text>
                    <Text>{this.state.dealer_address}</Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>Email</Text>
                    <Text>{this.state.email}</Text>
                </View>
                <Button
                    style={{alignSelf:'center'}}
                    title="Edit Profile / Password"
                    onPress={() => console.log('Pressed!')}
                />
            </View>
        )
    }
}

const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        margin:16
    },
    profileImageStyle: {
        height: SCREEN_HEIGHT * 0.25,
        width: SCREEN_HEIGHT * 0.25,
        alignSelf:'center'
    }
};

export {ProfileScreen};