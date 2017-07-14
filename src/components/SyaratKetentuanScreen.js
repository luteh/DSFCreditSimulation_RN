/**
 * Created by Luteh on 13/07/2017.
 */
import React, {Component} from "react";
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import {ButtonRNE, Footer} from "./common";

class SyaratKetentuanScreen extends Component {
    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#C62828',
        },
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: null
    };

    render() {
        const {imageStyle, contentContainerStlye, textKembaliStyle, textContentStyle} = styles;
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <Image
                        style={imageStyle}
                        source={require('../../imgs/result_img.png')}
                    />
                    <View style={contentContainerStlye}>
                        <View style={{alignItems: 'center'}}>
                            <View style={{marginBottom: 5}}>
                                <Text style={textContentStyle}>
                                    MOHON AGAR SYARAT-SYARAT DAN KETENTUAN-KETENTUAN PENGGUNAAN APLIKASI INI DIBACA
                                    DENGAN
                                    SEKSAMA SEBELUM LEBIH LANJUT MENGAKSES, MEMBACA ISI DAN MENGGUNAKAN FITUR-FITUR YANG
                                    ADA
                                    PADA APLIKASI MILIK KAMI, PT. DIPO STAR FINANCE (“DSF”).
                                </Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textContentStyle}>
                                    Dengan mengakses Aplikasi ini Pengguna dari Dealer maupun Pengguna dari DSF (secara
                                    bersama-sama untuk selanjutnya disebut “USER”) telah dianggap setuju untuk
                                    mengikatkan
                                    diri dengan syarat-syarat dan ketentuan-ketentuan berikut ini:
                                </Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textContentStyle}>
                                    Aplikasi ini dibuat untuk memudahkan USER memantau proses pelaksanaan kegiatan usaha
                                    DSF, khususnya terkait dengan pemberiaan pembiayaan dari DSF kepada NASABAH-nya,
                                    karenanya USER dengan ini setuju untuk memberikan data, informasi dan dokumen yang
                                    diperlukan agar tujuan tersebut dapat tercapai.
                                </Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textContentStyle}>
                                    DSF telah melakukan segala upaya yang diperlukan untuk menjaga kerahasiaan dari
                                    data,
                                    informasi dan dokumen yang diberikan oleh USER hanya untuk tujuan sebagaimana
                                    disebutkan
                                    pada halaman disclaimer ini. Data, informasi dan dokumen tersebut akan tersimpan di
                                    server database DSF dengan aman, dan DSF membatasi akses informasi tersebut kepada
                                    karyawan DSF atau pihak lain yang terlibat dalam proses layanan DSF dengan tunduk
                                    pada
                                    perjanjian kerahasiaan yang ketat. DSF tidak akan bertanggung jawab atas kebocoran
                                    data,
                                    informasi dan dokumen yang disebabkan oleh kelalaian USER dalam penggunaan aplikasi,
                                    termasuk namun tidak terbatas akibat akses yang tidak sah.
                                </Text>
                            </View>
                            <View style={{marginBottom: 5}}>
                                <Text style={textContentStyle}>
                                    DSF akan membuka data, informasi, dokumen yang diterima dari USER apabila
                                    dipersyaratkan
                                    untuk diungkapkan oleh perintah pengadilan, lembaga yang memiliki otoritas hukum
                                    atau
                                    peraturan perundang-undangan yang berlaku.
                                </Text>
                            </View>
                        </View>
                        <View style={{marginTop: 32}}>
                            <ButtonRNE
                                title="SETUJU"
                                onPress={() => this.props.navigation.navigate('creditSimulationScreen')}
                            />
                        </View>

                        <View style={{marginTop: 32, marginBottom: 70}}>
                            <Text style={textKembaliStyle}>
                                KEMBALI
                            </Text>
                        </View>
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
    contentContainerStlye: {
        padding: 24
    },
    imageStyle: {
        width: width,
        height: width * 0.6,
        resizeMode: 'stretch',
    },
    textKembaliStyle: {
        color: 'red',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    textContentStyle: {
        textAlign: 'justify'
    }
};

export {SyaratKetentuanScreen}