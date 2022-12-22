import React, {useState} from "react";
import {View ,Text} from 'react-native';
import styles from './Dropdowns.styles';
import {Dropdown}  from 'react-native-element-dropdown';

const cityData = [
  {key:'1', value:'Adana'},{key:'2', value:'Adıyaman'},{key:'3', value:'Afyonkarahisar'},{key:'4', value:'Ağrı'},{key:'5', value:'Amasya'},{key:'6', value:'Ankara'},{key:'7', value:'Antalya'},{key:'8', value:'Artvin'},{key:'9', value:'Aydın'},{key:'10', value:'Balıkesir'},
  {key:'11', value:'Bilecik'},{key:'12', value:'Bingöl'},{key:'13', value:'Bitlis'},{key:'14', value:'Bolu'},{key:'15', value:'Burdur'},{key:'16', value:'Bursa'},{key:'17', value:'Çanakkale'},{key:'18', value:'Çankırı'},{key:'19', value:'Çorum'},{key:'20', value:'Denizli'},
  {key:'21', value:'Diyarbakır'},{key:'22', value:'Edirne'},{key:'23', value:'Elazığ'},{key:'24', value:'Erzincan'},{key:'25', value:'Erzurum'},{key:'26', value:'Eskişehir'},{key:'27', value:'Gaziantep'},{key:'28', value:'Giresun'},{key:'29', value:'Gümüşhane'},{key:'30', value:'Hakkari'},
  {key:'31', value:'Hatay'},{key:'32', value:'Isparta'},{key:'33', value:'Mersin'},{key:'34', value:'İstanbul'},{key:'35', value:'İzmir'},{key:'36', value:'Kars'},{key:'37', value:'Kastamonu'},{key:'38', value:'Kayseri'},{key:'39', value:'Kırklareli'},{key:'40', value:'Kırşehir'},
  {key:'41', value:'Kocaeli'},{key:'42', value:'Konya'},{key:'43', value:'Kütahya'},{key:'44', value:'Malatya'},{key:'45', value:'Manisa'},{key:'46', value:'Kahramanmaraş'},{key:'47', value:'Mardin'},{key:'48', value:'Muğla'},{key:'49', value:'Muş'},{key:'50', value:'Nevşehir'},
  {key:'51', value:'Niğde'},{key:'52', value:'Ordu'},{key:'53', value:'Rize'},{key:'54', value:'Sakarya'},{key:'55', value:'Samsun'},{key:'56', value:'Siirt'},{key:'57', value:'Sinop'},{key:'58', value:'Sivas'},{key:'59', value:'Tekirdağ'},{key:'60', value:'Tokat'},
  {key:'61', value:'Trabzon'},{key:'62', value:'Tunceli'},{key:'63', value:'Şanlıurfa'},{key:'64', value:'Uşak'},{key:'65', value:'Van'},{key:'66', value:'Yozgat'},{key:'67', value:'Zonguldak'},{key:'68', value:'Aksaray'},{key:'69', value:'Bayburt'},{key:'70', value:'Karaman'},
  {key:'71', value:'Kırıkkale'},{key:'72', value:'Batman'},{key:'73', value:'Şırnak'},{key:'74', value:'Bartın'},{key:'75', value:'Ardahan'},{key:'76', value:'Iğdır'},{key:'77', value:'Yalova'},{key:'78', value:'Karabük'},{key:'79', value:'Kilis'},{key:'80', value:'Osmaniye'},
  {key:'81', value:'Düzce'}
];

const countDay = [
  {key:'1', value:'1'},
  {key:'1', value:'2'},
  {key:'1', value:'3'},
  {key:'1', value:'4'},
  {key:'1', value:'5'},
  {key:'1', value:'6'},
  {key:'1', value:'7'}
];

const activities = [
  {key: '1', value: 'Spor Aktiviteleri'},
  {key: '2', value: 'Tarihi Yerler'},
  {key: '3', value: 'Müzeler'},
  {key: '4', value: 'Yeme-İçme'},
  {key: '5', value: 'Deniz Kum Güneş'},
  {key: '6', value: 'Meşhur Yerler'}
];

const Dropdowns = () => {
    const [selected, setSelected] = useState("");
    const [keyCity, setKeyCity] = useState(null);
    const [keyDay, setKeyDay] = useState(null);
    const [keyActivities, setKeyActivities] = useState(null);

    const renderItem = (item) => {
        return (
          <View style={styles.item}>
            <Text style={styles.textItem}>{item.value}</Text>
          </View>
        );
    };
    

    return (
      <View>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityData}
          search
          maxHeight={300}
          labelField="value"
          valueField="key"
          placeholder="Şehir Seçiniz"
          searchPlaceholder="Ara..."
          value={keyCity}
          onChange={item => {
            setKeyCity(item.keyCity);
          }}
          renderItem={renderItem}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countDay}
          search
          maxHeight={300}
          labelField="value"
          valueField="key"
          placeholder="Kaç Gün Gezeceksiniz?"
          searchPlaceholder="Ara..."
          value={keyDay}
          onChange={item => {
            setKeyDay(item.keyDay);
          }}
          renderItem={renderItem}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={activities}
          search
          maxHeight={300}
          labelField="value"
          valueField="key"
          placeholder="Ne Yapmak İstersiniz?"
          searchPlaceholder="Ara..."
          value={keyActivities}
          onChange={item => {
            setKeyActivities(item.keyActivities);
          }}
          renderItem={renderItem}
        />
      </View>
    );
};

export default Dropdowns;