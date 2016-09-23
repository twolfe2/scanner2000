import { StyleSheet } from 'react-native'
import { Colors, Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 2,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.background
  },
  text: {
    color: 'white'
  }
})
