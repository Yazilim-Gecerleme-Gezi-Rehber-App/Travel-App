import { StyleSheet } from "react-native";

export default StyleSheet.create({
  dropdown: {
    margin: 18,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  placeholderStyle: {//placeholder
    fontSize: 16,
    fontWeight:'bold'
  },
  selectedTextStyle: {//listeden seçilen özellik
    fontSize: 16,
    color:'#ffd017'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {//arama çubuğu
    height: 40,
    fontSize: 16,
    borderColor:'gray',
    borderRadius:5
  },
});