import { StyleSheet } from "react-native";
import { navigationStyle } from "./navigation";

export const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 24
    },
    ...navigationStyle
})