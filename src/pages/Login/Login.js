import { View, Text, SafeAreaView, Image, Alert } from 'react-native'
import React from 'react'
import styles from "./Login.style";

import { Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"

import config from "../../../config";
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import usePost from '../../hooks/usePost/usePost';



const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();

    function handleLogin(values) {
        post(config.API_AUTH_URL + "/login", values);
    }

    if (data) {
        if (data.status === "Error") {
            Alert.alert("Dükkan", "Kullanıcı bulunamadı!");
        }
        else {
            dispatch({ type: "SET_USER", payload: { user } });
        }
    }
    if (error) {
        Alert.alert("Dükkan", "Bir hata oluştu");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/login-logo.png")} />
            </View>
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı Adını Giriniz..."
                            value={values.username}
                            onType={handleChange("username")}
                            iconName="account"
                        />

                        <Input
                            placeholder="Şifrenizi Giriniz..."
                            value={values.password}
                            onType={handleChange("password")}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                        
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )
}

export default Login;

const user = {
    address: {
        geolocation: {
            lat: "-37.3159"
        },
        city: "kilcoole",
        street: "new road",
    },
    username: "johnd",
    password: "m38rmF$"
}