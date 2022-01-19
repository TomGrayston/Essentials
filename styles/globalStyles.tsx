import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        paddingBottom: 25

    },
    inputContainer: {
        width: '80%',

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0568C8',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    signupText: {
        color: '#0568C8',
        fontWeight: '700',
        fontSize: 16
    },
    signup: {
        paddingTop: 35
    },
    invalid: {
        backgroundColor: '#edbcb9',
    },
    valid: {
        backgroundColor: '#aeebac'
    },
    divider: {
        justifyContent: 'center',
    },
    googleButton: {
        backgroundColor: '#e48d8b',
        width: '100%',
        padding: 15,
        borderRadius: 10,
    },
    googleText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    gLogo: {
        
    }
})