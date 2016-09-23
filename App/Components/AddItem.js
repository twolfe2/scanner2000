import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Styles/AddItemStyle'
import Button from './RoundedButton'

export default class AddItem extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {
      upcCode: '',
      product_name: ''
    };

    this.addCurrentItem = this.addCurrentItem.bind(this)
  }
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: React.PropTypes.object,
  //   someSetting: React.PropTypes.bool.isRequired
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  addCurrentItem() {
    this.props.addItem(this.state.upcCode, this.state.product_name)
    this.setState({upcCode: '', product_name: ''})
  }

  render () {
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>AddItem Component</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white'}}
          placeholder='Enter a UPC Code'
          placeholderTextColor='grey'
          onChangeText={(text) => this.setState({upcCode: text})}
          value={this.state.upcCode}
        />
         <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, color: 'white'}}
          placeholder='Enter a Product Name'
          placeholderTextColor='grey'
          onChangeText={(text) => this.setState({product_name: text})}
          value={this.state.product_name}
        />
          <Button {...{text: 'Add Item', onPress: this.addCurrentItem }}/>
 
      </View>
    )
  }
}
