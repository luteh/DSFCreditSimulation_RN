/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from "react";
import {Dimensions, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {ButtonRNE, Footer, Input, RadioBtn, CustomModalPicker} from "./common";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import {Divider} from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import Modal from "react-native-modal";
import renderIf from "../renderIf";

const Honda = ['HR-V 1.5E M/T', 'HR-V 1.5E A/T', 'HR-V 1.8L Prestige'];
const Toyota = ['Agya 1.3E M/T', 'Agya 1.3E A/T'];
let radioLabel = '';

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
        value3: -1,
        value3Index: -1,
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
        dpPersen: '',
        errorMessage: false
    };

    redirect(route) {
        const {kendaraan, cabang, region, harga, tenor, tipePembayaran, jenisAsuransi, provisi, typeCostumer, dpPersen, dpRupiah} = this.state;
        this.props.navigation.navigate(route, {
            kendaraan,
            cabang,
            region,
            harga:`Rp. ${harga}`,
            tenor,
            tipePembayaran,
            jenisAsuransi,
            provisi,
            typeCostumer,
            jenisSimulasi: radioLabel,
            dpPersen,
            dpRupiah
        });
    }

    validateForm() {
        const {kendaraan, cabang, region, harga, tenor, tipePembayaran, jenisAsuransi, provisi, typeCostumer} = this.state;
        if (kendaraan === '' || cabang === '' || region === '' || harga === '' || tenor === '' || tipePembayaran === '' || jenisAsuransi === ''
            || provisi === '' || typeCostumer === '') {
            this.setState({errorMessage: true})
        } else {
            this.setState({errorMessage: false});
            this.redirect('resultScreen')
        }
    }

    resetForms() {
        this.setState({errorMessage: false});
        this.setState({kendaraan: ''});
        this.setState({jenisSimulasi: ''});
        this.setState({value3: -1, value3Index: -1});
        this.setState({region: ''});
        this.setState({tenor: ''});
        this.setState({jenisAsuransi: ''});
        this.setState({typeCostumer: ''});
        //reset TextInput
        this.refs['textHarga'].clear(0);
        this.refs['textProvisi'].clear(0);
        this.refs['textPersen'].clear(0);
        this.refs['textRupiah'].clear(0)
    }

    jenisSimulasiViewHandler() {
        if (this.state.value3Index >= 0) {
            radioLabel = this.state.types3[this.state.value3Index].label;
            switch (radioLabel) {
                case 'DP':
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <TextInput
                                ref="textPersen"
                                style={{
                                    height: 40,
                                    width: SCREEN_WIDTH * 0.2,
                                    borderWidth: 1,
                                    borderRadius: 3,
                                    marginRight: 5,
                                    backgroundColor: '#EEEEEE',
                                    borderColor: '#E0E0E0',
                                    paddingLeft: 8,
                                    paddingRight: 8
                                }}
                                underlineColorAndroid='transparent'
                                placeholder='%'
                                keyboardType='numeric'
                                onChangeText={(val) => this.setState({dpPersen: val})}
                            />
                            <TextInput
                                ref="textRupiah"
                                style={{
                                    height: 40,
                                    width: SCREEN_WIDTH * 0.7,
                                    borderWidth: 1,
                                    borderRadius: 3,
                                    backgroundColor: '#EEEEEE',
                                    borderColor: '#E0E0E0',
                                    paddingLeft: 8,
                                    paddingRight: 8
                                }}
                                placeholder='Rupiah'
                                keyboardType='numeric'
                                onChangeText={(val) => this.setState({dpRupiah: val})}
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

    componentWillMount() {
        if (optCabang.length === 1) {
            this.setState({cabang: optCabang[0].label});
        }

        if (optRegion.length === 1) {
            this.setState({region: optRegion[0].label});
        }

        if (optTenor.length === 1) {
            this.setState({tenor: optTenor[0].label});
        }

        if (optTipePembayaran.length === 1) {
            this.setState({tipePembayaran: optTipePembayaran[0].label});
        }

        if (optJenisAsuransi.length === 1) {
            this.setState({jenisAsuransi: optJenisAsuransi[0].label});
        }

        if (optTypeCostumer.length === 1) {
            this.setState({typeCostumer: optTypeCostumer[0].label});
        }
    }

    setStatePicker(type, label) {
        switch (type) {
            case 'cabang':
                this.setState({cabang: label});
                break;
            case 'region':
                this.setState({region: label});
                break;
            case 'tenor':
                this.setState({tenor: label});
                break;
            case 'payment':
                this.setState({tipePembayaran: label});
                break;
            case 'insurance':
                this.setState({jenisAsuransi: label});
                break;
            case 'customer':
                this.setState({typeCostumer: label});
                break;

        }
    }

    renderCustomModalPicker(optData, valueOpt, type) {
        if (optData.length === 1) {
            return (
                <View>
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={textInputStyle}
                        editable={false}
                        value={valueOpt}/>
                </View>
            )
        } else {
            return (
                <View>
                    <CustomModalPicker
                        optData={optData}
                        children={valueOpt}
                        onChangeOption={(option) => {
                            this.setStatePicker(type, option.label)
                        }}/>
                    {this.renderErrorForm(valueOpt, this.state.errorMessage)}
                </View>
            )
        }
    }

    renderErrorForm(state, error) {
        if (state === '' && error) {
            return (
                <Icon
                    name="error-outline"
                    color='red' size={24}
                    style={errorIconStyle}
                />
            )
        }
    }

    render() {
        const {kendaraan, cabang, region, harga, tenor, tipePembayaran, jenisAsuransi, provisi, typeCostumer, errorMessage} = this.state;
        return (
            <View style={containerStyle}>
                <ScrollView>
                    <View style={contentContainerStyle}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Kendaraan</Text>
                                <View>
                                    <TouchableOpacity
                                        style={textInputStyle}
                                        onPress={() => this.setState({comboboxGroup: true})}
                                    >
                                        <Text style={{textAlignVertical: 'center', marginLeft: 5, marginVertical: 5}}>
                                            {kendaraan}
                                        </Text>
                                        {this.renderErrorForm(kendaraan, errorMessage)}
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <Modal
                                isVisible={this.state.comboboxGroup}
                            >
                                {this.renderComboboxGroup()}
                            </Modal>
                            <View style={{marginBottom: 5, flex: 1, justifyContent: 'space-around'}}>
                                <Text style={textTitleStyle}>Cabang DSF</Text>
                                {this.renderCustomModalPicker(optCabang, this.state.cabang, 'cabang')}
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Region</Text>
                                {this.renderCustomModalPicker(optRegion, this.state.region, 'region')}
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Harga</Text>
                                <View>
                                    <TextInput
                                        ref={'textHarga'}
                                        style={textInputStyle}
                                        onChangeText={(val) => this.setState({harga: val})}
                                        keyboardType='numeric'
                                        // value={this.state.harga}
                                    />
                                    {this.renderErrorForm(harga, errorMessage)}
                                </View>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Tenor</Text>
                                {this.renderCustomModalPicker(optTenor, this.state.tenor, 'tenor')}
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Tipe Pembayaran</Text>
                                {this.renderCustomModalPicker(optTipePembayaran, this.state.tipePembayaran, 'payment')}
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Jenis Asuransi</Text>
                                {this.renderCustomModalPicker(optJenisAsuransi, this.state.jenisAsuransi, 'insurance')}
                            </View>
                        </View>
                        <View style={{marginBottom: 5, alignItems: 'flex-start'}}>
                            <RadioBtn text="TJH/TPL"/>
                            <RadioBtn text="Loan Protection"/>
                            <RadioBtn text="Apakah asuransi ingin dimasukkan ke pokok hutan?"/>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Provisi (%)</Text>
                                <View>
                                    <TextInput
                                        ref={'textProvisi'}
                                        style={textInputStyle}
                                        onChangeText={(val) => this.setState({provisi: val})}
                                        keyboardType='numeric'
                                    />
                                    {this.renderErrorForm(provisi, errorMessage)}
                                </View>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textTitleStyle}>Type Costumer</Text>
                                {this.renderCustomModalPicker(optTypeCostumer, this.state.typeCostumer, 'customer')}
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
                                onPress={this.validateForm.bind(this)}
                                // onPress={this.saveFormValue.bind(this)}
                            />
                        </View>
                        <View style={{marginTop: 32, marginBottom: 70}}>
                            <Text
                                style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}
                                onPress={() => this.resetForms()}
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
    contentContainerStyle: {
        padding: 24,
    },
    modalContentStyle: {
        backgroundColor: 'white',
        padding: 24,
        justifyContent: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    textInputStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#EEEEEE',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 3,
        paddingLeft: 8,
        paddingRight: 8
    },
    textTitleStyle: {
        fontSize: 12,
        marginBottom: 3,
        color: '#9E9E9E'
    },
    errorIconStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: 8,
        right: 5
    }
};

const {
    containerStyle,
    contentContainerStyle,
    textInputStyle,
    modalContentStyle,
    textTitleStyle,
    errorIconStyle
} = styles;
const optCabang = [
    {key: 0, label: 'Jakarta'}
];
const optRegion = [
    {key: 0, label: 'Jakarta'},
    {key: 1, label: 'West Java'},
    {key: 2, label: 'East Java'},
    {key: 3, label: 'North Sumatera'},
    {key: 4, label: 'South Sumatera'},
    {key: 5, label: 'Kalimantan-Sulawesi'}
];
const optTenor = [
    {key: 0, label: '1 Tahun'},
    {key: 1, label: '2 Tahun'},
    {key: 2, label: '3 Tahun'},
    {key: 3, label: '4 Tahun'},
    {key: 4, label: '5 Tahun'}
];
const optTipePembayaran = [{key: 0, label: 'ARR'}];
const optJenisAsuransi = [
    {key: 0, label: 'NO'},
    {key: 1, label: 'BJ'},
    {key: 2, label: 'BA'},
    {key: 3, label: 'SRCC'},
    {key: 4, label: 'TS'},
    {key: 5, label: 'BJ+BA'},
    {key: 6, label: 'BJ+SRCC'},
    {key: 7, label: 'BJ+TS'},
    {key: 8, label: 'BA+SRCC'},
    {key: 9, label: 'BA+TS'},
    {key: 10, label: 'SRCC+TS'},
    {key: 11, label: 'BJ+BA+SRCC'},
    {key: 12, label: 'BJ+BA+TS'},
    {key: 13, label: 'BJ+SRCC+TS'},
    {key: 14, label: 'BA+SRCC+TS'},
    {key: 15, label: 'BJ+BA+SRCC+TS'}
];
const optTypeCostumer = [
    {key: 0, label: 'Private'},
    {key: 1, label: 'Costumer'}
];

export {CreditSimulationScreen};