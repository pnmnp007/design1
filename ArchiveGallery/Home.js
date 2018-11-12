import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import newsImage from './assets/story1_1.jpg';
import NewsItemMain from './src/components/News/NewsItemMain';
import screen2 from './src/components/News/screen2';
import {Card, Icon} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
export default class Home extends React.Component {

  // static navigationOptions = {
  //   header: { visible:false },
  //   };

  render() {
    let newsDesc = "";
    newsDesc=newsDesc+newsDesc;
    return (
      <ScrollView>
      <View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2')}>
      <Card
        title={null}
        image={newsImage}
        imageStyle={{width: '100%', height: 300}}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>What were kids wearing for Halloween in 1935?</Text>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1
          }}
        />
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="location-on" size={20} color="#000"/>
          <Text style = {styles.input}>5 miles away</Text>
      </View>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2')}>
      <Card
        title={null}
        image={newsImage}
        imageStyle={{width: '100%', height: 300}}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>What were kids wearing for Halloween in 1935?</Text>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1
          }}
        />
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="location-on" size={20} color="#000"/>
          <Text style = {styles.input}>5 miles away</Text>
      </View>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2')}>
      <Card
        title={null}
        image={newsImage}
        imageStyle={{width: '100%', height: 300}}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>What were kids wearing for Halloween in 1935?</Text>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1
          }}
        />
        <View style={styles.searchSection}>
          <Icon style={styles.searchIcon} name="location-on" size={20} color="#000"/>
          <Text style = {styles.input}>5 miles away</Text>
      </View>
      </Card>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
}
});
