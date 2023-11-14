import { StyleSheet } from "react-native";

const ExtractStyles = {
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
    filter: StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#0B0870",
            height: 60,
            paddingHorizontal: 20
        },
        picker: {
            width: "30%",
            height: 40,
            padding: 4,
            backgroundColor: "#fff",
            borderColor: "transparent"
        },
    }),
    data: StyleSheet.create({
        container: {
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap:10,
            backgroundColor: "#fff",
            padding: 20
        },
        group: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        text: {
            fontSize: 16,
        },
        red: {
            color: "red"
        },
        green: {
            color: "green"
        },
        separator: {
            height: 1,
            backgroundColor: "#ccc",
            width: "100%",
        }
    }),
}


export default ExtractStyles
  