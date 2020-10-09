import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { MyContextApi } from '../../../contextApi/parentContext'


function Item1({ item, onPress, style }) {
    const { data: {
        selectedId,
    } } = useContext(MyContextApi)

    return (
        item.display
            ?
            <View>
                <TouchableOpacity activeOpacity onPress={onPress} style={[{ padding: 10, marginVertical: 8, marginHorizontal: 16 }, style]}>

                    <Text style={{ fontSize: 17, letterSpacing: 0.5, color: '#222' }}>{
                        item.id !== selectedId
                            ?
                            item.content.slice(0, 200)
                            :
                            item.content
                    }..</Text>

                </TouchableOpacity>
            </View >
            :
            null

    )
}


export default Item1;