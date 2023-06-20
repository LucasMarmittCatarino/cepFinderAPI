import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container:{
        alignItems: "center",
        paddingTop: 25,
    },
    tittle:{
        color: '#4a474e',
        fontWeight: 'bold',
        fontSize: 24,
    },
    textoInput:{
        fontSize: 20,
        width: 340,
        marginVertical: 14,
        paddingBottom: 0,
        borderBottomColor: '#635c6e',
        borderBottomWidth: 2,
    },
    button:{
        backgroundColor: '#664ea3',
        width: 340,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 16,
    },
    returnContainer:{
        flexWrap: "wrap",
        marginTop: -6,
        width: 340,
        flexDirection: "row",
        alignItems: "center"
    },
    returnText:{
        fontSize: 16,
        color: 'black',
    }
})

export default style;