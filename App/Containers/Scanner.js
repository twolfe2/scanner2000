import React from 'react'
import { View, Text, Platform, Alert } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScanneriOS from './ScanneriOS'
import ScannerAndroid from './ScannerAndroid'
import AddUpc from './AddUpc'


// Styles
import styles from './Styles/ScannerStyle'

class Scanner extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  componentDidMount () {
    Alert.alert('Welcome to BarcodeScanner 2000!', 'Scan your products barcodes to get information about them.')
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Scanner Container</Text>
        <AddUpc />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)
