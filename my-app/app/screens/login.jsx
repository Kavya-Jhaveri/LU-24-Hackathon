import {View, Text, TextInput, StyleSheet, Button, ActivityIndicator, KeyboardAvoidingView} from 'react-native'
import React, {useState} from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
//import { FIREBASE_AUTH} from '../../FirebaseConfig';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error){
            console.log(error);
            alert ('sign in failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
    const signUp = async () => {
        setLoading(true);
        try{
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert ('Check your emails!');
        } catch (error){
            console.log(error);
            alert ('sign up failed: ' + error.message);
        } finally {
            setLoading(false);
        }
    }
    return(
        <View style={styles.container}>
            <KeyboardAvoidingView behavior = 'padding'>
                <TextInput value = {email} style = {styles.input} placeholder = "Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value = {password} style = {styles.input} placeholder = "password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
                { loading ?(
                    <ActivityIndicator size="large" color = "#0000ff" />
                ) : (
                <>
                    <Button title = "Login" onPress={signIn} />
                    <Button title = "Create account" onPress={signUp} />
                </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height:50,
        borderWidth:1,
        borderRadius: 4,
        padding: 10,
        backgroundColor:'#fff'
    }
});