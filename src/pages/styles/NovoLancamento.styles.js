import { StyleSheet } from "react-native";

const NewPostingStyles = {
    style: StyleSheet.create({
        page: {
            flex: 1,
            display: "flex",
            padding:20
        },
    }),
    header: StyleSheet.create({
        container: {
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          height: 60
        },
        headerText: {
          fontSize: 20,
          fontWeight: "bold",
        },
        headerCloseButton: {
          width: 20
        },
    }),
    form: StyleSheet.create({
        container:{
            flex: 1,
            display: "flex",
            margin: 20
        },
        superGroup: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
        },
        subGroup: {
            width:"50%"
        },
        group: {

        },
        buttonGroup: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 20
        },
        buttonEdit: {
            backgroundColor: "#169CE3",
            color: "#fff",
            width: 50,
            height: 30,
            paddingHorizontal: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
        },
        buttonSave: {
            backgroundColor: "#416899",  
            width: 50,
            height: 30,
            paddingHorizontal: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5
        },
        buttonText: {
            color: "#fff",
        },        
        label:{
            fontSize: 15,
            fontWeight: "bold",
            margin: 10,
        },
        picker: {
            width: "90%",
            height: 40,
            padding: 4,
            backgroundColor: "#fff",
            borderColor: "transparent"
        },
        input: {
            width: "90%",
            height: 40,
            padding: 4,
            backgroundColor: "#fff",
            borderColor: "transparent"
        }
        
    })
}


export default NewPostingStyles
  