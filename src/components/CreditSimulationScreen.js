/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from "react";
import {AsyncStorage, ScrollView, Text, TextInput, View} from "react-native";
import {ButtonRNE, Footer, Input, RadioBtn} from "./common";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button";
import {Divider} from "react-native-elements";
import ModalDropdown from "react-native-modal-dropdown";

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

    jenisSimulasiViewHandler() {
        const radioLabel = this.state.types3[this.state.value3Index].label;
        switch (radioLabel) {
            case 'DP':
                return (
                    <View style={{flexDirection: 'row'}}>
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

    render() {
        const {containerStyle, contentContainerStlye, dropdownStyle, dropdownTextStyle} = styles;
        return (
            <View style={containerStyle}>
                <ScrollView>
                    <View style={contentContainerStlye}>
                        <View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Kendaraan</Text>
                                <ModalDropdown options={['option 1', 'option 2']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Cabang DSF</Text>
                                <ModalDropdown options={['Jakarta', 'Bandung']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
                                               onSelect={(idx, value) => this.setState({cabang: value})}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Region</Text>
                                <ModalDropdown
                                    options={['Jakarta', 'West Java', 'East Java', 'North Sumatera', 'South Sumatera', 'Kalimantan-Sulawesi']}
                                    style={dropdownStyle}
                                    textStyle={dropdownTextStyle}
                                    onSelect={(idx, value) => this.setState({region: value})}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Harga</Text>
                                <TextInput
                                    style={{height: 40, width: 330, borderWidth: 1, borderRadius: 3}}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Tenor</Text>
                                <ModalDropdown options={['option 1', 'option 2']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Tipe Pembayaran</Text>
                                <ModalDropdown options={['option 1', 'option 2']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Jenis Asuransi</Text>
                                <ModalDropdown options={['option 1', 'option 2']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
                                />
                            </View>
                        </View>
                        <View style={{marginBottom: 5}}>
                            <RadioBtn text="TJH/TPL"/>
                            <RadioBtn text="Loan Protection"/>
                            <RadioBtn text="Apakah asuransi ingin dimasukkan ke pokok hutan?"/>
                        </View>
                        <View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Provisi (%)</Text>
                                <TextInput
                                    style={{height: 40, width: 330, borderWidth: 1, borderRadius: 3}}
                                />
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={{fontSize: 10, marginBottom: 3}}>Type Costumer</Text>
                                <ModalDropdown options={['option 1', 'option 2']}
                                               style={dropdownStyle}
                                               textStyle={dropdownTextStyle}
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
    },
    dropdownStyle: {
        width: 330,
        height: 40,
        borderWidth: 1,
        borderRadius: 3
    },
    dropdownTextStyle: {
        width: 320,
        marginHorizontal: 6,
        marginVertical: 10,
        fontSize: 18,
        color: 'black',
        textAlignVertical: 'center',
    }
};

export {CreditSimulationScreen};