import React, { useContext, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, Button, StatusBar } from 'react-native'
import { MyContextApi } from '../../contextApi/parentContext'


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

    const Item1 = ({ item, onPress, style }) => (
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

    );

    const Item2 = ({ item, onPress, style }) => (
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
                        source={require('../../assets/delete1.png')}
                    />
                </TouchableOpacity>
            </View>

            :
            null
    )

    const renderItem = ({ item }) => {
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
                </View>


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
