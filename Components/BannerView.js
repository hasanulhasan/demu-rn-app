import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BannerView() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Total Payable:</Text>
        <Text style={{ color: 'red', letterSpacing: 3, fontSize: 30, fontWeight: "600" }}>0.00</Text>
        <Text style={styles.titleText}>Total Paid:</Text>
        <Text style={{ color: 'green', letterSpacing: 3, fontSize: 30, fontWeight: "600" }}>0.00</Text>
      </View>
      <View style={{ borderWidth: 2, height: '60%', borderColor: '#909090' }} />
      <View style={{ paddingRight: 25 }}>
        <Text style={styles.titleText}>Total Borrower:</Text>
        <Text style={styles.amount}>0</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 22,
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20
  },
  amount: {
    fontSize: 30,
    fontWeight: '600'
  }

});