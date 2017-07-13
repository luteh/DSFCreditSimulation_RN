/**
 * Created by Luteh on 04/07/2017.
 */
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {ComboBox, RadioBtn, Input, ButtonRNE, Footer} from './common'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {Divider} from 'react-native-elements'
import DropDown, {
    Select,
    Option,
    OptionList,
} from 'react-native-selectme';

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
    };

    redirect(route) {
        this.props.navigation.navigate(route);
    }

    jenisSimulasiViewHandler(){
        const radioLabel = this.state.types3[this.state.value3Index].label;
        switch (radioLabel){
            case 'DP':
                return(
                    <Input>
                        DP Rupiah
                    </Input>
                );
            case 'TDP':
                return(
                    <Input>
                        Rupiah
                    </Input>
                );
            case 'Cicilan':
                return(
                    <Input>
                        Rupiah
                    </Input>
                );
        }
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
                                                labelWrapStyle={{marginRight:40}}
                                            />
                                        </RadioButton>
                                    )
                                })}
                            </RadioForm>
                            {/*<Text>selected: {this.state.types3[this.state.value3Index].label}</Text>*/}
                            <Divider style={{backgroundColor: '#EEEEEE', marginTop: 5, marginBottom: 5}}/>
                        </View>
                        {this.jenisSimulasiViewHandler()}
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