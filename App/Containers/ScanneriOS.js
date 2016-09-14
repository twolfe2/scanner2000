import React from 'react'
import { View, Text, Alert } from 'react-native'
import Dimensions from 'Dimensions';
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Camera from 'react-native-camera'

// Styles
import styles from './Styles/ScanneriOSStyle'

const previewStyle = {
   preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
}
class ScanneriOS extends React.Component {

  constructor (props) {
    super(props)
    this.state = { currBarcode: '' }

    this.onBarCodeRead = this.onBarCodeRead.bind(this)
  }
  onBarCodeRead (data) {
    if(data.data !== this.state.currBarcode) {
      let alertMessage = 'Product Not Found'
      let currProduct = null;
      this.props.upcs.forEach(product => {
        if(data.data === product.upc) {
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
      this.setState({ currBarcode: data.data })
      
      // clear the current barcode after 2 seconds so they can rescan
    }
  }
  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }


  render () {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={previewStyle.preview}
          aspect={Camera.constants.Aspect.fill} 
          onBarCodeRead={this.onBarCodeRead}
          keepAwake
          captureAudio={false}
          >
          </Camera>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScanneriOS)
