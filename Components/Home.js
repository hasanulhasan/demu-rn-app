import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, PermissionsAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BannerView from './BannerView';
import UserInfo from './UserInfo';
import Icon from 'react-native-vector-icons/FontAwesome';
import Contacts from 'react-native-contacts';

export default function Home() {

  // useEffect(() => {
  //   getPermission();
  // }, [])

  const getPermission = () => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept bare mortal'
      }
    )
      .then(res => {
        if (res == 'granted') {
          Contacts.getAll()
            .then((contacts) => {
              // work with contacts
              console.log(contacts)
            })
            .catch((e) => {
              console.log(e)
            })
        }
      })
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Demu App</Text>
        <Text style={styles.headerText}><Icon name="search" size={30} color="#ffffff" /></Text>
      </View>
      <BannerView></BannerView>
      <View style={styles.bottomBorder} />
      <UserInfo></UserInfo>
      <View style={styles.infoText}>
        <Text style={{
          textAlign: 'center', fontSize: 16
        }}>You don't have any Arrears now. To add new Arrears click on Puls icon and fill the necessary information</Text>
      </View>

      <TouchableOpacity style={styles.plusIcon} onPress={() => getPermission()}>
        <Icon style={styles.plusIconInternal} name="plus" size={30} color="#ffffff" />
      </TouchableOpacity>

      {/* <StatusBar style="auto" /> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#B90A0A',
    padding: 25,
    color: 'white'
  },
  bottomBorder: {
    marginBottom: 30,
    borderBottomColor: '#909090',
    borderBottomWidth: 3,
    marginLeft: 22,
    marginRight: 22,
  },
  headerText: {
    fontSize: 20,
    color: 'white'
  },
  infoText: {
    marginVertical: 100,
    marginHorizontal: 60,
  },
  plusIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 30
  },
  plusIconInternal: {
    backgroundColor: '#B90A0A',
    borderRadius: 35,
    padding: 10,
    paddingHorizontal: 15
  }
});
