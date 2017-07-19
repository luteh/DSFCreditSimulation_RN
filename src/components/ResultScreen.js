/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from "react";
import {Dimensions, ScrollView, Text, View} from "react-native";
import {ListItem} from "native-base";
import {ButtonRNE, Footer, PerincianText, ResultText} from "./common";
import {Button} from "react-native-elements";

const biaya = '50.000.000';
let perincian = [
    {title: 'Uang Muka', biaya},
    {title: 'Angsuran Pertama', biaya},
    {title: 'Asuransi', biaya},
    {title: 'Provisi', biaya},
    {title: 'Admin Fee', biaya},
    {title: 'Total DP', biaya},
    {title: 'Sisa Angsuran (x11)', biaya},
];

class ResultScreen extends Component {
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

    state = {
        cabang: '',
        region: '',
        tjhtpl: '',
        loanProtection: '',
        asuransi: ''
    };

    componentWillMount() {
    }

    renderResultView(title, detail) {
        return (
            <ResultText
                titleText={title}
                detailText={detail}
            />
        )
    }

    renderRowDirectionView(title1, detail1, title2, detail2) {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    {this.renderResultView(title1, detail1)}
                </View>
                <View style={{flex: 1}}>
                    {this.renderResultView(title2, detail2)}
                </View>
            </View>
        )
    }

    renderPerincianList() {
        return perincian.map((data, i) => {
            return (
                <PerincianText
                    key={i}
                    titleText={data.title}
                    biayaText={data.biaya}
                />
            )
        })
    }

    render() {
        const {kendaraan, cabang, region, harga, tenor, tipePembayaran, jenisAsuransi, provisi, typeCostumer, jenisSimulasi, dpPersen, dpRupiah} = this.props.navigation.state.params;
        const {containerStyle, perincianKreditStyle, perincianKreditTextStyle, disclaimerBtnStyle, simulasiLainTextStyle} = styles;
        return (
            <ScrollView>
                <View style={containerStyle}>
                    <View style={{padding: 24}}>
                        <View>
                            {this.renderResultView('Kendaraan', kendaraan)}
                            {this.renderResultView('Cabang DSF', cabang)}
                            {this.renderResultView('Region', region)}
                            {this.renderResultView('Cabang DSF', cabang)}
                            {this.renderResultView('Harga', harga)}

                            {this.renderRowDirectionView('Tenor', tenor, 'Tipe Pembayaran', tipePembayaran)}
                            {this.renderRowDirectionView('Jenis Asuransi', jenisAsuransi, 'Provisi', provisi)}

                            {this.renderResultView('Asuransi Perluasan', 'Tidak')}

                            {this.renderRowDirectionView('TJH / TPL', 'Ya', 'Loan Protection', 'Ya')}

                            {this.renderResultView('Apakah asuransi ingin dimasukkan ke pokok hutang?', 'Ya')}

                            {this.renderRowDirectionView('Type Costumer', typeCostumer, 'Jenis Simulasi', jenisSimulasi)}
                        </View>

                        <View style={{marginTop: 32}}>
                            <View style={perincianKreditStyle}>
                                <Text style={perincianKreditTextStyle}>
                                    Perincian Kredit (Rp)
                                </Text>
                            </View>
                            <View style={{marginBottom: 2}}>
                                {this.renderPerincianList()}
                            </View>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <Button
                                buttonStyle={disclaimerBtnStyle}
                                textStyle={{fontWeight: 'bold'}}
                                title="Disclaimer"
                                onPress={() => console.log('Disclaimer Pressed!')}
                            />
                        </View>

                        <View style={{marginTop: 32}}>
                            <ButtonRNE
                                title="SIMPAN KE PDF"
                                onPress={() => console.log('Simpan Pressed!')}
                            />
                        </View>

                        <Text style={simulasiLainTextStyle}>
                            SIMULASI LAIN
                        </Text>

                    </View>

                    <View style={{marginTop: 32}}>

                    </View>

                    <View style={{marginBottom: 32}}>
                        <Footer/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const width = Dimensions.get('window').width;

const styles = {
    containerStyle: {
        backgroundColor: 'white'
    },
    perincianKreditStyle: {
        backgroundColor: '#BDBDBD',
        paddingTop: 3,
        paddingBottom: 3
    },
    perincianKreditTextStyle: {
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    imageStyle: {
        width: width,
        height: width * 0.6,
        resizeMode: 'stretch'
    },
    disclaimerBtnStyle: {
        width: width * 0.85,
        backgroundColor: '#B71C1C'
    },
    simulasiLainTextStyle: {
        color: 'red',
        alignSelf: 'center',
        marginTop: 32
    }
};

export {ResultScreen}