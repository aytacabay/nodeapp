import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import TextInputFunc from './components/TextInput'

const Home = ({ navigation }) => {

    return (
        <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#FBE7C6' }}>
            <TextInputFunc navigation={navigation} />
        </SafeAreaView>
    )

}

export default Home
