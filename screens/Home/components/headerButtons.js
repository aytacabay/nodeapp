import React, { useContext } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { MyContextApi } from '../../../contextApi/parentContext'


export default function HeaderButtons({ navigation }) {
    const { data: { sendTextData, writingFunc } } = useContext(MyContextApi)

    return (
        <View style={{ width: '100%', height: 50, flexDirection: 'row' }}>
            <View style={{ width: '50%', height: 40, alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={function () { navigation.openDrawer() }}
                >
                    <Image
                        style={{ width: 40, height: 40 }}
                        source={require('../../../assets/back.png')}
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
                        source={require('../../../assets/save.png')}
                    />
                </TouchableOpacity>
            </View>
        </View >
    )
}
