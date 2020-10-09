import React, { useEffect, useContext } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { MyContextApi } from '../../contextApi/parentContext'

import * as Animatable from 'react-native-animatable';

export default function TextInputFunc({ navigation }) {

    const { data: { value, onChangeText, sendTextData, textDataCheck, textDataCheckFunc, writingValue, writingFunc } } = useContext(MyContextApi)

    useEffect(() => {
        setTimeout(() => {
            textDataCheckFunc()
        }, 5000);
    }, [textDataCheck])

    useEffect(() => {
    }, [writingValue])

    return (
        <View style={{ marginTop: 30, }}>
            {/* // TODO Buttonlari home cek. */}
            <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
                <View style={{ width: '50%', height: 40, alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={function () { navigation.openDrawer() }}
                    >
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={require('../../assets/back.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '50%', height: 40, alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        style={{ marginRight: 30 }}
                        onPress={() => { sendTextData(); writingFunc(false) }}
                    >
                        <Image
                            style={{ width: 40, height: 40 }}
                            source={require('../../assets/save.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View >

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

                {
                    textDataCheck
                        ?
                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 100, marginTop: 100, padding: 10, justifyContent: 'center', alignItems: 'center' }}>

                                <Animatable.Text
                                    animation="pulse"
                                    easing="ease-out"
                                    iterationCount={10}
                                    duration={5000}
                                    style={{ textAlign: 'center' }}
                                >
                                    <Image
                                        style={{ width: 100, height: 100 }}
                                        source={require('../../assets/complete.png')}
                                    />
                                </Animatable.Text>

                                <Animatable.Text
                                    animation="flash"
                                    // zoomIn
                                    duration={5000}
                                    iterationCount={10}
                                    direction="alternate"
                                    style={{ marginTop: 30 }}
                                >
                                    <Text style={{ color: '#444', fontSize: 20, fontWeight: 'bold' }}>Notu'nuz eklendi.</Text>
                                </Animatable.Text>



                            </View>
                        </View>
                        :
                        null
                }
            </View>
        </View>
    )
}
