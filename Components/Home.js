import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BannerView from './BannerView';
import UserInfo from './UserInfo';
export default function Home() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Demu App</Text>
        <Text style={styles.headerText}>search</Text>
      </View>
      <BannerView></BannerView>
      <View style={styles.bottomBorder} />
      <UserInfo></UserInfo>
      <View style={styles.infoText}>
        <Text style={{ fontSize: 16 }}>You don't have any Arrears now. To add new Arrears click on Puls icon and fill the necessary information</Text>
      </View>
      <View style={styles.plusIcon}>
        <Text style={styles.plusIconInternal}>+</Text>
      </View>
      <StatusBar style="auto" />
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
    textAlign: 'center',
  },
  plusIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginEnd: 30
  },
  plusIconInternal: {
    backgroundColor: 'red',
    // borderRadius: '50%',
    padding: 10,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 30
  }
});
