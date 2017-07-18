/**
 * Created by Luteh on 10/07/2017.
 */
import React from 'react'
import {View, Text} from 'react-native'

const PerincianText = ({titleText, biayaText}) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={{marginLeft: 5}}>
                {titleText}
            </Text>
            <Text style={{marginRight: 5}}>
                {biayaText}
            </Text>
        </View>
    )
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        marginTop: 2,
        paddingTop: 3,
        paddingBottom: 3
    }
};

export {PerincianText}