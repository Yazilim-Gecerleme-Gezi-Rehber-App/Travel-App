import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5fbaa'//foto da ekleyebiliriz arka fona
    },
    image:{
        position:'absolute',
        width:400, 
        height:800, 
        right:0, 
        top:0, 
        left:0, 
        bottom:0
    },
    header:{
        fontFamily:'Lobster-Regular',
        alignSelf:'center',
        marginVertical:35,
        fontSize:40,
        color:'#ffd633',
    },
    body_container:{
        marginVertical:60
    },
    footer_container:{
        marginVertical:70
    },
    item: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontWeight:'bold',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        fontWeight:'bold',
    },
});