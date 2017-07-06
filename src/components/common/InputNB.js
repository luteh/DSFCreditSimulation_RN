/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react'
import {View, Dimensions, Image} from 'react-native'
import {Container, Content, Form, Item, Input, Label} from 'native-base'

const InputNB = ({children, secureTextEntry}) => {

    return (
        <View style={styles.containerStyle}>
            <Item floatingLabel>
                <Label>{children}</Label>
                <Input
                    secureTextEntry={secureTextEntry}
                    onChangeText={(text) => console.log(text)}/>
            </Item>
        </View>
    )
};

const width = Dimensions.get('window').width;
const styles = {
    containerStyle: {
        width: width * 0.9,
        marginBottom: 15
    }
};

export {InputNB}