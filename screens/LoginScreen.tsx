import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { globalStyles } from "../styles/globalStyles";

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const navigation = useNavigation<any>();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigation.replace("Home");
            })
            .catch(error => alert("Incorrect Email & Password " + error.message));
    }

    const handleRegistration = () => {
        navigation.navigate("Sign Up");
    }

    return(
        <View style={globalStyles.container} >
            <Text style={globalStyles.title}>Essentials</Text>
            <View style={globalStyles.inputContainer}>
                <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={text => setEmail(text)} 
                style={globalStyles.input}
                />
                <TextInput 
                placeholder="Password" 
                value={pwd} 
                onChangeText={text => setPwd(text)} 
                style={globalStyles.input}
                secureTextEntry
                />
            </View>
            <View style={globalStyles.buttonContainer}>
                <TouchableOpacity onPress={handleLogin} style={globalStyles.button} >
                    <Text style={globalStyles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleRegistration} style={globalStyles.signup} >
                    <Text style={globalStyles.signupText}>
                        Don't have an Account? Sign up!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default LoginScreen