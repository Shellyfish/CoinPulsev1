import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    currentPrice: {
        color:'white',
        fontSize:30, 
        fontWeight:'bold', 
        letterSpacing:1, 
        paddingHorizontal:22,
    },
    name: {
        color:'white',
         fontSize:15,
          paddingHorizontal:22,
    },
    priceContainer: {
        padding:5, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center'},
    priceChange: {
        color:'white', 
        fontSize:18, 
        fontWeight:'700'},
    input: {
        flex: 1,
        color:'white',
        width:130,
        height: 50,
        margin:12,
        borderBottomWidth:1,
        borderBottomColor: 'white',
        padding:10,
        fontSize:16
    }
});
export default styles;