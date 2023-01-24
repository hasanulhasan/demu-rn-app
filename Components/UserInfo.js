import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: '#d3d3d3', padding: 10, width: '50%', borderBottomLeftRadius: 5, borderTopLeftRadius: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Borrower</Text>
      </View>
      <View style={{ backgroundColor: '#f4f4f4', padding: 10, width: '50%', borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>Payer</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    marginHorizontal: 22,
    textAlign: 'center'
  }
})