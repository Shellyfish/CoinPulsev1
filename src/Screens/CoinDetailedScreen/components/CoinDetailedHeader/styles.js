import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row', 
        paddingHorizontal:30,
        paddingVertical:15, 
        alignItems:'center',
        justifyContent: 'space-between',
    },
    tickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tickerTitle: {
        color: 'white', 
        fontWeight: 'bold', 
        marginHorizontal:5, 
        fontSize:19,
    },
    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 8,
    }
});
export default styles;