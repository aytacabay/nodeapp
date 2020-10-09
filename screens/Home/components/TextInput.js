import React, { useEffect, useContext } from 'react'
import { View, TextInput } from 'react-native'

import { MyContextApi } from '../../../contextApi/parentContext'

import HeaderButtons from './headerButtons'
import TextDataCheck from './TextDataCheck'

export default function TextInputFunc({ navigation }) {

    const { data: { value, onChangeText, writingValue, writingFunc } } = useContext(MyContextApi)

    useEffect(() => {
    }, [writingValue])

    return (
        <View style={{ marginTop: 30 }}>

            <HeaderButtons navigation={navigation} />

            <View style={{ marginTop: 50 }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TextInput
                        style={
                            writingValue
                                ?
                                ({ width: '90%', minHeight: 40, maxHeight: 350, borderBottomColor: 'green', borderBottomWidth: 2, color: '#444', fontWeight: 'bold', letterSpacing: 0.8 })
                                :
                                { width: '90%', minHeight: 40, maxHeight: 350, borderBottomColor: '#444', borderBottomWidth: 2, paddingBottom: 10, color: '#444', fontWeight: 'bold', letterSpacing: 0.8 }
                        }
                        onChangeText={text => { onChangeText(text); writingFunc(true); }}
                        value={value}
                        placeholder='Notunuz nedir ?'
                        multiline={true}
                    />
                </View>
            </View>

            <TextDataCheck />

        </View>
    )
}
