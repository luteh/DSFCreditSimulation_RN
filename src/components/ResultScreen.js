/**
 * Created by Luteh on 10/07/2017.
 */
import React, {Component} from "react";
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import {ListItem} from "native-base";
import {ButtonRNE, Footer, PerincianText, ResultText} from "./common";
import {Button} from "react-native-elements";

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

    render() {
        const {kendaraan, cabang, region, harga, tenor, tipePembayaran, jenisAsuransi, provisi, typeCostumer} = this.props.navigation.state.params;
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../imgs/result_img.png')}
                    />
                    <View style={{padding: 24}}>
                        <View>
                            <View>
                                <ResultText
                                    titleText="Kendaraan"
                                    detailText={kendaraan}
                                />
                                <ResultText
                                    titleText="Cabang DSF"
                                    detailText={cabang}
                                />
                                <ResultText
                                    titleText="Region"
                                    detailText={region}
                                />
                                <ResultText
                                    titleText="Cabang DSF"
                                    detailText={cabang}
                                />
                                <ResultText
                                    titleText="Harga"
                                    detailText={harga}
                                />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View style={{flex: 1}}>
                                    <ResultText
                                        titleText="Tenor"
                                        detailText={tenor}
                                    />
                                    <ResultText
                                        titleText="TJH / TPL"
                                        detailText={this.state.tjhtpl}
                                    />
                                    <ResultText
                                        titleText="Jenis Asuransi"
                                        detailText={jenisAsuransi}
                                    />
                                    <ResultText
                                        titleText="Type Costumer"
                                        detailText={typeCostumer}
                                    />
                                </View>
                                <View style={{flex: 1}}>
                                    <ResultText
                                        titleText="Tipe Pembayaran"
                                        detailText={tipePembayaran}
                                    />
                                    <ResultText
                                        titleText="Loan Protection"
                                        detailText={this.state.loanProtection}
                                    />
                                    <ResultText
                                        titleText="Provisi"
                                        detailText={provisi}
                                    />
                                    <ResultText
                                        titleText="Jenis Simulasi"
                                        detailText="Mitsubishi"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 32}}>
                            <View style={{
                                alignSelf: 'stretch',
                                backgroundColor: '#BDBDBD',
                                paddingTop: 3,
                                paddingBottom: 3
                            }}>
                                <Text style={{fontWeight: 'bold', alignSelf: 'center'}}>
                                    Perincian Kredit (Rp)
                                </Text>
                            </View>
                            <View style={{marginBottom: 2}}>
                                <PerincianText
                                    titleList="Uang Muka"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Angsuran Pertama"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Asuransi"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Provisi"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Admin Fee"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Total DP"
                                    biayaList="50.000.000"
                                />
                                <PerincianText
                                    titleList="Sisa Angsuran (x11)"
                                    biayaList="50.000.000"
                                />
                            </View>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Button
                                buttonStyle={styles.disclaimerBtnStyle}
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
                        <Text style={{color: 'red', alignSelf: 'center', marginTop: 32}}>
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
    imageStyle: {
        width: width,
        height: width * 0.6,
        resizeMode: 'stretch'
    },
    disclaimerBtnStyle: {
        width: width * 0.85,
        backgroundColor: '#B71C1C'
    }
};

export {ResultScreen}