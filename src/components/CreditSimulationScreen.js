/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ComboBox, RadioBtn, Input, ButtonRNE, Footer} from './common'

class CreditSimulationScreen extends Component {
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

    redirect(route) {
        this.props.navigation.navigate(route);
    }

    render() {
        const {containerStyle, contentContainerStlye} = styles;
        return (
            <View style={containerStyle}>
                <ScrollView>
                    <View style={contentContainerStlye}>
                        <View>
                            <ComboBox text="Kendaraan"/>
                            <ComboBox text="Cabang DSF"/>
                            <ComboBox text="Region"/>
                            <Input>
                                Harga
                            </Input>
                            <ComboBox text="Tenor"/>
                            <ComboBox text="Tipe Pembayaran"/>
                            <ComboBox text="Jenis Asuransi"/>
                        </View>
                        <View>
                            <RadioBtn text="TJH/TPL"/>
                            <RadioBtn text="Loan Protection"/>
                            <RadioBtn text="Apakah asuransi ingin dimasukkan ke pokok hutan?"/>
                        </View>
                        <View>
                            <Input>
                                Provisi (%)
                            </Input>
                            <ComboBox text="Type Customer"/>
                        </View>

                        <RadioBtn text="Jenis Simulasi"/>
                        <Input>
                            Rupiah
                        </Input>
                        <View style={{marginTop:32}}>
                            <ButtonRNE
                                title="HITUNG"
                                onPress={this.redirect.bind(this, 'resultScreen')}
                            />
                        </View>
                        <View style={{marginTop:32, marginBottom:70}}>
                            <Text
                                style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}
                                onPress={() => console.log("RESET Pressed!")}
                            >
                                RESET
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 32}}>
                        <Footer/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainerStlye: {
        padding: 24
    }
};

export {CreditSimulationScreen};