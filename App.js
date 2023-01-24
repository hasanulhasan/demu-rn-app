import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BannerView from './Components/BannerView';
import UserInfo from './Components/UserInfo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Demu App</Text>
        <Text style={styles.headerText}>icon</Text>
      </View>
      <BannerView></BannerView>
      <View style={styles.bottomBorder} />
      <UserInfo></UserInfo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#b71540",
    padding: 25,
    color: "white"
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
  }
});
