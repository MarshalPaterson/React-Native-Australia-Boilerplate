import React from 'react'
// import { View, SafeAreaView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import UserContext from '../../contexts/UserContext'

function About(): React.ReactElement {
    const user = UserContext.Consumer
    return (<SafeAreaView>{user.name}</SafeAreaView>);
}

export default About;