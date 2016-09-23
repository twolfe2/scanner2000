import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Actions as NavigationActions } from 'react-native-router-flux'
import uuid from 'uuid'

// Styles
import styles from './Styles/AddUpcStyle'

class AddUpc extends React.Component {

  constructor (props) {
    super(props)
    
  }

  render () {
    console.log('upcs', this.props.upcs)
    const { upcs } = this.props

    let UpcComponents = upcs.map(curr => <Text id={uuid.v4()} style={styles.text}>{`${curr.upc}: ${curr.product_name}`}</Text>)

    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddUpc Container</Text>
        {UpcComponents}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddUpc)
