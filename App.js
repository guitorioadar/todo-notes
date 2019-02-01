import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      data: 0,
    }
  }

  setvalue(data){
    this.setState({
      value: data
    })
  }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={styles.container}>
      <TouchableHighlight
          onPress={()=>{
            this.setState({
              value: this.state.value-1
            })
          }}
      >
          <Text style={{
            fontSize: 24,
            borderRadius: 12,
            margin: 16
          }}>-</Text>
      </TouchableHighlight>
      <Text>{this.state.value}</Text>
      <TouchableHighlight
           onPress={()=>{
            this.setState({
              value: this.state.value+1
            })
          }
      }
      >
          <Text style={{
            fontSize: 24,
            borderRadius: 12,
            margin: 16
          }}>+</Text>
      </TouchableHighlight>
      </View>
      <View style={{
        flexDirection: 'column'
      }}>
          <TextInput 
              placeholder={'Enter Bal'}
              keyboardType={'numeric'}
              onChangeText={(data)=>{
                this.setState({data})
              }}
          />
          <TouchableHighlight
           onPress={()=>{
            this.setvalue(this.state.data);
          }
      }
      >
          <Text style={{
            fontSize: 24,
            borderRadius: 12,
            margin: 16
          }}>Button</Text>
      </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
