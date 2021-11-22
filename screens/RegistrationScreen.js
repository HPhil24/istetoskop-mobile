import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../firebase'

const RegistrationScreen = () => {
    const [fname, SetFname] = useState('')
    const [lname, SetLname] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')
    const [cpassword, SetCPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })

        return unsubscribe
      }, [])

    const handleSignUp = () => {
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Image source={{uri: 'https://i.pinimg.com/originals/0d/47/5b/0d475b617d01a1be44b71cb894fdcc47.png'}}
       style={{width: 250, height: 200}} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="First Name"
                    value={fname}
                    onChangeText={text => SetFname(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="LastName"
                    value={lname}
                    onChangeText={text => SetLname(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email Address"
                    value={email}
                    onChangeText={text => SetEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => SetPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChangeText={text => SetCPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View>
                <Text style={styles.textContainer}>By clicking Submit, you agreed to our {"\n"} Terms and Conditions</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                    onPress={handleSignUp}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity> */}

            </View>
            <View>
                <Text style={styles.textContainer}>Already have an account? Sign in.</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegistrationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingBottom: 10

    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    textContainer: {
        padding: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
    },
    button: {
        backgroundColor: '#32E0C4',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#32E0C4',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutlineText: {
        color: '#32E0C4',
        fontWeight: '700',
        fontSize: 16
    },
})
