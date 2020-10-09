import React, { useEffect, useContext } from 'react'
import { View, Text, Image } from 'react-native'

import { MyContextApi } from '../../../contextApi/parentContext'

import * as Animatable from 'react-native-animatable';


export default function TextDataCheck() {

    const { data: { textDataCheck, textDataCheckFunc, } } = useContext(MyContextApi)

    useEffect(() => {
        setTimeout(() => {
            textDataCheckFunc()
        }, 5000);
    }, [textDataCheck])

    return (
        <View>
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
                                    source={require('../../../assets/complete.png')}
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
    )
}
