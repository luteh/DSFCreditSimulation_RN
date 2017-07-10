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

    redirect(route){
        this.props.navigation.navigate(route);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <ScrollView>
                    <View style={{flex: 1, justifyContent: 'space-around'}}>
                        <ComboBox text="Kendaraan"/>
                        <ComboBox text="Cabang DSF"/>
                        <ComboBox text="Region"/>
                        <Input>
                            Harga
                        </Input>
                        <ComboBox text="Tenor"/>
                        <ComboBox text="Tipe Pembayaran"/>
                        <ComboBox text="Jenis Asuransi"/>
                        <RadioBtn text="TJH/TPL"/>
                        <RadioBtn text="Loan Protection"/>
                        <RadioBtn text="Apakah asuransi ingin dimasukkan ke pokok hutan?"/>
                        <Input>
                            Provisi (%)
                        </Input>
                        <ComboBox text="Type Customer"/>
                        <RadioBtn text="Jenis Simulasi"/>
                        <Input>
                            Rupiah
                        </Input>
                        <ButtonRNE
                            title="HITUNG"
                            onPress={this.redirect.bind(this,'resultScreen')}
                        />
                        <Text
                            style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}
                            onPress={() => console.log("RESET Pressed!")}
                        >
                            RESET
                        </Text>
                        <View style={{marginBottom:32}}>
                            <Footer/>
                        </View>
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
        paddingLeft: 16,
        paddingRight: 16
    }
};

export {CreditSimulationScreen};