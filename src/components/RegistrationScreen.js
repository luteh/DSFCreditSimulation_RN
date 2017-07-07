/**
 * Created by Luteh on 22/06/2017.
 */
import React, {Component} from 'react'
import {View, ScrollView, Text} from 'react-native'
import {Input, ButtonRNE, Footer} from './common'
import {CheckBox} from 'native-base'


class RegistrationScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#C62828',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerBackTitleStyle: {
            color: 'white'
        },
    };

    state = {checked: false};

    checkBoxHandler() {
        if (this.state.checked) {
            this.setState({checked: false})
        } else {
            this.setState({checked: true});
        }
        console.log(this.state.checked)
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView>
                    <Input returnKeyType="next">
                        Nama Lengkap *
                    </Input>
                    <Input keyboardType="numeric"
                           returnKeyType="next">
                        No. Handphone *
                    </Input>
                    <Input returnKeyType="next">
                        No. KTP
                    </Input>
                    <Input returnKeyType="next">
                        Tempat Lahir
                    </Input>
                    <Input returnKeyType="next">
                        Nama Dealer
                    </Input>
                    <Input returnKeyType="next">
                        Daerah Dealer
                    </Input>
                    <Input returnKeyType="next">
                        Alamat Dealer
                    </Input>
                    <Input keyboardType="email-address"
                           returnKeyType="next">
                        Email *
                    </Input>
                    <Input secureTextEntry
                           returnKeyType="next">
                        Password *
                    </Input>
                    <Input secureTextEntry>
                        Ulangi Password *
                    </Input>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <CheckBox
                            checked={this.state.checked}
                            onPress={() => this.checkBoxHandler()}
                        />
                        <Text style={{fontSize: 10, left: 20}}>
                            Saya setuju terhadap <Text style={{color: 'red'}} onPress={() => console.log('Pressed!')}>
                            syarat & ketentuan</Text> yang berlaku
                        </Text>
                    </View>

                    <ButtonRNE
                        title="REGISTER"
                        onPress={() => console.log('Register Pressed!')}
                    />
                    <Footer style={{marginTop: 5, marginBottom: 5}}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent:'space-around'
    }
};

export {RegistrationScreen}