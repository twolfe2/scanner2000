import React from 'react'
import { View, Text, Platform } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import ScanneriOS from './ScanneriOS'
import ScannerAndroid from './ScannerAndroid'


// Styles
import styles from './Styles/ScannerStyle'

class Scanner extends React.Component {

  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }

  render () {
    return (
      <View style={styles.container}>
        <Text>Scanner Container</Text>
        {Platform.OS === 'ios' ? <ScanneriOS /> : <ScannerAndroid />}
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
