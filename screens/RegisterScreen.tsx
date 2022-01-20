import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

import { globalStyles } from "../styles/globalStyles";
import { stringify } from '@firebase/util';

const Status = {
    notSet: 0, 
    invalid: 1, 
    valid: 2
}

interface PayloadProps {
    email: string | null,
    uname: string
}

const RegisterUserPage = () => {

    const [username, setUsername] = useState('');


    // EMAIL STUFF ___________________________________________________
    const [email, setEmail] = useState('');
    const [confirmEmail, setConEmail] = useState('');
    const [emailMatched, setEmailsMatched] = useState(Status.notSet);

    const handleEmailStatus = (text) => {
        setConEmail(text);
    }

    useEffect(() => {
        //if email does not match confirm email then set the status code to invalid else set it to valid
        (email != confirmEmail) ? setEmailsMatched(Status.invalid) : setEmailsMatched(Status.valid);
    }, [confirmEmail])
    
    // PWD STUFF ______________________________________________________
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConPwd] = useState('');
    const [pwdMatched, setPwdMatched] = useState(Status.notSet);

    const handlePwdStatus = (text) => {
        setConPwd(text);
    }

    useEffect(() => {
        //if pwd does not match confirm pwd then set the status code to invalid else set it to valid
        (pwd != confirmPwd) ? setPwdMatched(Status.invalid) : setPwdMatched(Status.valid);
    }, [confirmPwd])

    // THE ACTUAL SIGNUP ________________________________________________
    const navigation = useNavigation<any>();

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, pwd)
            .then(async (userCredential) => {
                const user = userCredential.user;

                const payload: PayloadProps = {
                    email: user.email,
                    uname: username
                }

                await setDoc(doc(getFirestore(), "users", user.uid), payload);

                navigation.navigate("Login");
            })
            .catch(error => alert(error.message));
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Create an Account!</Text>
            <View style={globalStyles.inputContainer}>
            <TextInput 
                placeholder="Username" 
                value={username} 
                onChangeText={text => setUsername(text)} 
                style={globalStyles.input}
                />
            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={text => setEmail(text)} 
                style={globalStyles.input}
                />
            <TextInput 
                placeholder="Confirm Email" 
                value={confirmEmail} 
                onChangeText={text => handleEmailStatus(text)} 
                style={[globalStyles.input, (emailMatched === Status.invalid) ? globalStyles.invalid : null ]}
                />
            <TextInput 
                placeholder="Password" 
                value={pwd} 
                onChangeText={text => setPwd(text)} 
                style={globalStyles.input}
                secureTextEntry
                />
            <TextInput 
                placeholder="Confirm Password" 
                value={confirmPwd} 
                onChangeText={text => handlePwdStatus(text)} 
                style={[globalStyles.input, (pwdMatched === Status.invalid) ? globalStyles.invalid : null ]}
                secureTextEntry
                />
                </View>
                <View style={globalStyles.buttonContainer}>
                    <TouchableOpacity onPress={handleSignUp} style={globalStyles.button} >
                        <Text style={globalStyles.buttonText}>
                            Create Account
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default RegisterUserPage
