import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'

export default class App extends React.Component {
  state = {
    'coin_result': 'head'
  }

  flipACoin() {
    const random = Math.floor(Math.random() * 2) + 1

    if (random === 1) {
      this.setState({
        'coin_result': 'head'
      })
    } else {
      this.setState({
        'coin_result': 'tail'
      })
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/background.jpg')} style={styles.container}>
        {
        this.state.coin_result=='head'
        ? <Image
            source={require('./assets/coin_yes.png')} 
            style={{
              width: 150,
              height: 150,
              marginBottom: 10
            }} 
          />
        : <Image 
            source={require('./assets/coin_no.png')} 
            style={{
              width: 150,
              height: 150,
              marginBottom: 10
            }} 
          />   
        }
        <TouchableOpacity
          onPress={() => {
            this.flipACoin()
          }}
          style={styles.btn}
        >
          <Text>Flip a Coin</Text>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E6DDC4',
    padding: 20,
    margin: 10,
    borderRadius: 4
  }
})
