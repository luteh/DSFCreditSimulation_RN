/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from "react";
import {AsyncStorage, Dimensions, ScrollView, Text, TextInput, View, TouchableOpacity} from "react-native";
import {ButtonRNE, Footer, Input, RadioBtn} from "./common";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import {Divider} from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";
import Modal from 'react-native-modal'
import renderIf from '../renderIf'

const Honda = ['HR-V 1.5E M/T', 'HR-V 1.5E A/T', 'HR-V 1.8L Prestige'];
const Toyota = ['Agya 1.3E M/T', 'Agya 1.3E A/T'];

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

    state = {
        types3: [
            {label: 'DP', value: 0},
            {label: 'TDP', value: 1},
            {label: 'Cicilan', value: 2},
        ],
        comboboxGroup: false,
        visibleSubKendaraan: '',
        value3: 0,
        value3Index: 0,
        canada: '',
        kendaraan: '',
        cabang: '',
        region: '',
        harga: '',
        tenor: '',
        tipePembayaran: '',
        jenisAsuransi: '',
        tjhtpl: '',
        loanProtection: '',
        asuransi: '',
        provisi: '',
        typeCostumer: '',
        jenisSimulasi: '',
        dpRupiah: '',
    };

    componentDidUpdate() {
        console.log('Dropdown cabang : ' + this.state.cabang)
    }

    async saveFormValue() {
        try {
            const {cabang, region} = this.state;
            let temporaryData = {cabang, region};
            await AsyncStorage.setItem('form', JSON.stringify(temporaryData));
            this.redirect('resultScreen')
        } catch (err) {
            console.log(err)
        }
    }

    redirect(route) {
        this.props.navigation.navigate(route);
    }

    async clearText() {
        try {
            await AsyncStorage.clear();
            //reset TextInput
            this.refs['textHarga'].clear(0);
            this.refs['textProvisi'].clear(0);

            //reset Dropdown Menu
            this.refs['ddCabang'].select(-1);
            this.refs['ddKendaraan'].select(-1);
            this.refs['ddRegion'].select(-1);
            this.refs['ddTenor'].select(-1);
            this.refs['ddTipePembayaran'].select(-1);
            this.refs['ddJenisAsuransi'].select(-1);
            this.refs['ddTypeCostumer'].select(-1);
        } catch (err) {
            console.log(err)
        }
    }

    jenisSimulasiViewHandler() {
        const radioLabel = this.state.types3[this.state.value3Index].label;
        switch (radioLabel) {
            case 'DP':
                return (
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TextInput
                            style={{height: 40, width: 100, borderWidth: 1, borderRadius: 3, marginRight: 5}}
                            placeholder='%'
                        />
                        <TextInput
                            style={{height: 40, width: 225, borderWidth: 1, borderRadius: 3}}
                            placeholder='Rupiah'
                        />
                    </View>
                );
            case 'TDP':
                return (
                    <Input>
                        Rupiah
                    </Input>
                );
            case 'Cicilan':
                return (
                    <Input>
                        Rupiah
                    </Input>
                );
        }
    }

    setKendaraan(data) {
        this.setState({kendaraan: data, comboboxGroup: false})
    }

    renderSubKendaraan(subKendaraan) {
        switch (subKendaraan) {
            case 'Honda':
                return Honda.map((data, i) => {
                    return (
                        <Text
                            key={i}
                            onPress={() => this.setKendaraan(data)}
                        >
                            {data}
                        </Text>
                    )
                });
            case 'Toyota':
                return Toyota.map((data, i) => {
                    return (
                        <Text
                            key={i}
                            onPress={() => this.setKendaraan(data)}
                        >
                            {data}
                        </Text>
                    )
                })
        }

    }

    renderComboboxGroup() {
        return (
            <View style={modalContentStyle}>
                <View style={{marginBottom: 5}}>
                    <TouchableOpacity
                        onPress={() => this.setState({visibleSubKendaraan: 'Honda'})}
                    >
                        <Text>Honda</Text>
                    </TouchableOpacity>
                </View>
                {renderIf(this.state.visibleSubKendaraan === 'Honda')(
                    <View>
                        {this.renderSubKendaraan('Honda')}
                    </View>
                )}
                <View>
                    <TouchableOpacity
                        onPress={() => this.setState({visibleSubKendaraan: 'Toyota'})}
                    >
                        <Text>Toyota</Text>
                    </TouchableOpacity>
                </View>
                {renderIf(this.state.visibleSubKendaraan === 'Toyota')(
                    <View>
                        {this.renderSubKendaraan('Toyota')}
                    </View>
                )}
            </View>
        )
    }

    render() {
        return (
            <View style={containerStyle}>
                <ScrollView>
                    <View style={contentContainerStlye}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Kendaraan</Text>
                                <TouchableOpacity
                                    style={styles.dropdownStyle}
                                    onPress={() => this.setState({comboboxGroup: true})}
                                >
                                    <Text style={{textAlignVertical: 'center', marginLeft: 5, marginVertical: 5}}>
                                        {this.state.kendaraan}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <Modal
                                isVisible={this.state.comboboxGroup}
                                // onModalHide={() => this.setState({comboboxGroup: false})}
                            >
                                {this.renderComboboxGroup()}
                            </Modal>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Cabang DSF</Text>
                                <ModalDropdown
                                    ref={'ddCabang'}
                                    options={optCabang}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                    onSelect={(idx, value) => this.setState({cabang: value})}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Region</Text>
                                <ModalDropdown
                                    ref={'ddRegion'}
                                    options={optRegion}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                    onSelect={(idx, value) => this.setState({region: value})}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Harga</Text>
                                <TextInput
                                    ref={'textHarga'}
                                    style={textInputStyle}
                                    // value={this.state.harga}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Tenor</Text>
                                <ModalDropdown
                                    ref={'ddTenor'}
                                    options={optTenor}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Tipe Pembayaran</Text>
                                <ModalDropdown
                                    ref={'ddTipePembayaran'}
                                    options={optTipePembayaran}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Jenis Asuransi</Text>
                                <ModalDropdown
                                    ref={'ddJenisAsuransi'}
                                    options={optJenisAsuransi}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom: 5, alignItems: 'flex-start'}}>
                            <RadioBtn text="TJH/TPL"/>
                            <RadioBtn text="Loan Protection"/>
                            <RadioBtn text="Apakah asuransi ingin dimasukkan ke pokok hutan?"/>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Provisi (%)</Text>
                                <TextInput
                                    ref={'textProvisi'}
                                    style={textInputStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Type Costumer</Text>
                                <ModalDropdown
                                    ref={'ddTypeCostumer'}
                                    options={optTypeCostumer}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    dropdownStyle={dropdownMenuStyle}
                                />
                            </View>
                        </View>
                        <View>
                            <Text style={{fontSize: 10, marginBottom: 5}}>
                                {this.props.text}
                            </Text>
                            <RadioForm
                                formHorizontal={true}
                                animation={true}
                            >
                                {this.state.types3.map((obj, i) => {
                                    let onPress = (value, index) => {
                                        this.setState({
                                            value3: value,
                                            value3Index: index
                                        })
                                    };
                                    return (
                                        <RadioButton
                                            labelHorizontal={true}
                                            key={i}
                                        >
                                            {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                            <RadioButtonInput
                                                ref={'rbDP'}
                                                obj={obj}
                                                index={i}
                                                isSelected={this.state.value3Index === i}
                                                onPress={onPress}
                                                buttonInnerColor={'black'}
                                                buttonOuterColor={'black'}
                                                buttonSize={10}
                                                buttonStyle={{}}
                                                buttonWrapStyle={{}}
                                            />
                                            <RadioButtonLabel
                                                obj={obj}
                                                index={i}
                                                labelHorizontal={true}
                                                onPress={onPress}
                                                labelStyle={{color: 'black'}}
                                                labelWrapStyle={{marginRight: 40}}
                                            />
                                        </RadioButton>
                                    )
                                })}
                            </RadioForm>
                            {/*<Text>selected: {this.state.types3[this.state.value3Index].label}</Text>*/}
                            <Divider style={{backgroundColor: '#EEEEEE', marginTop: 5, marginBottom: 5}}/>
                        </View>
                        {this.jenisSimulasiViewHandler()}
                        <View style={{marginTop: 32}}>
                            <ButtonRNE
                                title="HITUNG"
                                // onPress={this.redirect.bind(this, 'resultScreen')}
                                onPress={this.saveFormValue.bind(this)}
                            />
                        </View>
                        <View style={{marginTop: 32, marginBottom: 70}}>
                            <Text
                                style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}
                                onPress={() => this.clearText()}
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

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainerStlye: {
        padding: 24,
    },
    dropdownStyle: {
        width: SCREEN_WIDTH * 0.9,
        height: 40,
        borderWidth: 1,
        borderRadius: 3
    },
    modalContentStyle: {
        backgroundColor: 'white',
        padding: 24,
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    dropdownTextStyle: {
        width: SCREEN_WIDTH * 0.9,
        marginHorizontal: 6,
        marginVertical: 10,
        fontSize: 18,
        color: 'black',
        textAlignVertical: 'center',
    },
    dropdownMenuStyle: {
        width: SCREEN_WIDTH * 0.9,
        height: 200,
        borderWidth: 1,
        borderRadius: 3,
    },
    textInputStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9,
        borderWidth: 1,
        borderRadius: 3
    }
};

const {
    containerStyle,
    contentContainerStlye,
    dropdownStyle,
    dropdownTextStyle,
    textInputStyle,
    dropdownMenuStyle,
    modalContentStyle
} = styles;
const optCabang = ['Jakarta', 'Bandung'];
const optRegion = ['Jakarta', 'West Java', 'East Java', 'North Sumatera', 'South Sumatera', 'Kalimantan-Sulawesi'];
const optTenor = ['1 Tahun', '2 Tahun', '3 Tahun', '4 Tahun', '5 Tahun'];
const optTipePembayaran = ['ARR'];
const optJenisAsuransi = [
    'NO',
    'BJ',
    'BA',
    'SRCC',
    'TS',
    'BJ+BA',
    'BJ+SRCC',
    'BJ+TS',
    'BA+SRCC',
    'BA+TS',
    'SRCC+TS',
    'BJ+BA+SRCC',
    'BJ+BA+TS',
    'BJ+SRCC+TS',
    'BA+SRCC+TS',
    'BJ+BA+SRCC+TS'
];
const optTypeCostumer = ['Private', 'Costumer'];

export {CreditSimulationScreen};