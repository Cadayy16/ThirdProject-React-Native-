import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#64b5f6",
    },
    logo_container: {
        flex: 1,
        justifyContent:"center",
    },
    logo: {
        height: Dimensions.get("window").height / 3,
        width: Dimensions.get("window").width * 0.9,
        resizeMode: "contain",
        tintColor: "white",
    },
    body_container: {
        flex: 1
    }
})