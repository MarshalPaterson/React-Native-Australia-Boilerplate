import React from 'react'
// import { View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import UserContext from '../../contexts/UserContext'

function Home(): React.ReactElement {
    const user = UserContext.Consumer
    return (<SafeAreaView>{user.name}</SafeAreaView>);
}

export default Home;