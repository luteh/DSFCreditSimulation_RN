/**
 * Created by Luteh on 22/06/2017.
 */
import React from 'react'
import {View, Dimensions} from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

const ButtonRNE = ({title, onPress}) => {
    return (
        <View style={styles.containerStyle}>
            <Button
                buttonStyle={styles.buttonStyle}
                title={title}
                onPress={onPress}
            />
        </View>
    )
};

const styles = {
    containerStyle: {
        marginTop: 8
    },
    buttonStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: '#B71C1C',
        borderRadius:50
    }
};

export {ButtonRNE}