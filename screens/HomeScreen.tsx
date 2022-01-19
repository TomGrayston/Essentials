import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebaseConfig'
import { globalStyles } from '../styles/globalStyles'

const HomeScreen = () => {

    const navigation = useNavigation<any>();

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

    return (
        <View style={globalStyles.container}>
            <Text>YOU HAVE SIGNED IN!</Text>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>
                    Sign Out 
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen;