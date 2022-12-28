import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        position:'absolute',
        width:400, 
        height:800, 
        right:0, 
        top:0, 
        left:0, 
        bottom:0
    },
    cityName:{
        fontSize:25,
        marginLeft:25,
        marginTop:20,
        fontFamily:'Lobster-Regular',
        color:'#FFBF00'
    },
    images_container:{
        marginVertical:20,
        marginHorizontal:20
    },
    body_container:{
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:'#FFBF00',
        borderWidth:2,
    },
    name:{
        fontSize:20,
        marginLeft:10,
        fontFamily:'LilitaOne-Regular',
        color:'#FFBF00'
    },
    line:{
        borderBottomColor: '#FFBF00',
        borderColor:'#FFBF00',
        // borderBottomWidth: StyleSheet.hairlineWidth,
        borderWidth:1.3,
        marginLeft:45,
        marginTop:-2.4
    }
});