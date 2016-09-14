import React, {PropTypes} from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'
import { connect } from 'react-redux'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'


// Styles
import styles from './Styles/PresentationScreenStyle'

class PresentationScreen extends React.Component {



  render () {
    return (
      <View style={styles.mainContainer}>

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
    componentExamples: NavigationActions.componentExamples,
    usageExamples: NavigationActions.usageExamples,
    apiTesting: NavigationActions.apiTesting,
    theme: NavigationActions.theme,
    deviceInfo: NavigationActions.deviceInfo,
    scanner: NavigationActions.scanner
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationScreen)
