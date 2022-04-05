import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const navigationStyle = StyleSheet.create({
    navMain: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 30,
        marginHorizontal: 24,
        height: 60,
        borderRadius: 10,
        paddingHorizontal: 16
    },
    navButtonCenter :{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
        borderRadius: 32,
        padding: 8,
        position: 'absolute',
        top: -16
    }
})