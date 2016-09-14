import React from 'react'
import { View, Text, Alert, StatusBar, Vibration } from 'react-native'
import Dimensions from 'Dimensions'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import BarcodeScanner from 'react-native-barcodescanner'


// Styles
import styles from './Styles/ScannerAndroidStyle'

const previewStyle = {
   preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
}
class ScannerAndroid extends React.Component {

  constructor (props) {
    super(props)
    this.state = { currBarcode: '' }
  }
  componentWillMount () {
  StatusBar.setHidden(true);
  }

  onBarCodeRead (e) {
    // Check to see if we already scanned the product
    if(e.data !== this.state.currBarcode) {
      Vibration.vibrate()
      let alertMessage = 'Product Not Found'
      let currProduct = null;
      // check to see if the product is in our store
      this.props.upcs.forEach(product => {
        if(e.data === product.upc) {
          currProduct = product.product_name
          alertMessage = `You have scanned ${currProduct}`
        }
      })
      Alert.alert(
            'Barcode Detected',
            alertMessage,
            [
              {text: 'OK', onPress: () => this.setState({ currBarcode: '' })},
            ]
          )
      this.setState({ currBarcode: e.data })
      
      // clear the current barcode after 2 seconds so they can rescan
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <BarcodeScanner
          style={previewStyle.preview}
          onBarCodeRead={this.onBarCodeRead}
          />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    upcs: state.upc.upcs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScannerAndroid)
