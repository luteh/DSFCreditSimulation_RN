/**
 * Created by Luteh on 10/07/2017.
 */
import React from 'react'
import {View, Text} from 'react-native'
import {ListItem} from 'native-base'
import {Divider} from 'react-native-elements'

const ResultText = ({titleText, detailText}) => {
    return (
        <View style={{marginBottom: 5}}>
            <Text style={{fontSize: 10,}}>{titleText}</Text>
            <Text style={{marginBottom: 5}}>{detailText}</Text>
            <Divider style={{backgroundColor:'#EEEEEE'}}/>
        </View>
    )
};

export {ResultText}