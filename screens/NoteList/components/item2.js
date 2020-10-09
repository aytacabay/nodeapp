import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'



function Item2({ item, onPress }) {
    return (
        item.display
            ?
            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 25, marginTop: 8, color: '#333', fontSize: 14 }}>{item.date}</Text>
                <TouchableOpacity
                    style={{ marginRight: 20, marginBottom: 20 }}
                    onPress={onPress}
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../../../assets/delete1.png')}
                    />
                </TouchableOpacity>
            </View>

            :
            null
    )
}



export default Item2;