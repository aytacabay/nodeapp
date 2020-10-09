import React, { useContext, useEffect } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { MyContextApi } from '../../contextApi/parentContext'

import Item1 from './components/item1'
import Item2 from './components/item2'
import BackButton from './components/backButton'


export default function NoteList({ navigation }) {

    const { data: {
        selectedId,
        setSelectedId,
        flatListData,
        selectedIdDelete,
        setSelectedIdDelete
    } } = useContext(MyContextApi)

    useEffect(() => {
        selectedIdDelete
            ?
            console.log(`${selectedIdDelete} Silinmistir.`)
            :
            null
    }, [selectedIdDelete])


    function renderItem({ item }) {
        const backgroundColor = item.id === selectedId ? "#f7e7ce" : "#BFD7ED";

        return (
            <View>
                <Item1
                    item={item}
                    onPress={() => { setSelectedId(item.id) }}
                    style={{ backgroundColor, borderRadius: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.29, shadowRadius: 4.65, elevation: 7 }}
                />

                <Item2
                    item={item}
                    onPress={() => { setSelectedIdDelete(item.id); item.display = false }}
                    style={{ backgroundColor }}
                />
            </View>
        );
    };


    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#0074B7' }}>
            <SafeAreaView>

                <BackButton navigation={navigation} />


                <View style={{ width: '100%', height: '100%', flexDirection: 'row', paddingBottom: 100 }}>
                    <FlatList
                        data={flatListData}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                    />
                </View>


            </SafeAreaView>
        </View>
    )
}
