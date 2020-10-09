import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

export default function BackButton({ navigation }) {
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
        </View>
    )
}
