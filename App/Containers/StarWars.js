import React from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Actions from '../Actions/Creators'
import { Metrics } from '../Themes'
// external libs
import Icon from 'react-native-vector-icons/FontAwesome'
import Animatable from 'react-native-animatable'
import { Actions as NavigationActions } from 'react-native-router-flux'

// Styles
import styles from './Styles/StarWarsStyle'

// I18n
import I18n from '../I18n/I18n.js'

class StarWars extends React.Component {

  render () {
    return (
      <ScrollView style={styles.mainContainer}>
        <KeyboardAvoidingView behavior='position'>
          <Text>StarWars Container</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

export default StarWars
