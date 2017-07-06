/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ComboBox, RadioBtn} from './common'

class CreditSimulationScreen extends Component {


    render() {
        return (
            <View style={styles.containerStyle}>
                    <ComboBox text="Kendaraan"/>
                    <ComboBox text="Cabang DSF"/>
                    <ComboBox text="Region"/>
                    <ComboBox text="Harga"/>
                    <ComboBox text="Tenor"/>
                    <ComboBox text="Tipe Pembayaran"/>
                    <ComboBox text="Jenis Asuransi"/>
                <RadioBtn/>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor:'white',
        justifyContent:'space-around',
        padding:16
    }
};

export {CreditSimulationScreen};