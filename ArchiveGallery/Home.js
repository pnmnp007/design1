import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import newsImage from './assets/story1_1.jpg';
import NewsItemMain from './src/components/News/NewsItemMain';
import screen2 from './src/components/News/screen2';
import {Card} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
export default class Home extends React.Component {
  static navigationOptions =  {
       //set title on phonescreen on the top view.
           title: 'Home',
       };
  render() {
    let newsDesc = "";
    newsDesc=newsDesc+newsDesc;
    return (
      <ScrollView>
      <View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2')}>
      <Card
        title='What were kids wearing for Halloween in 1935?'
        image={newsImage}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
      </TouchableOpacity>
      <Card
        title='HELLO WORLD'
        image={newsImage}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
      <Card
        title='HELLO WORLD'
        image={newsImage}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
      </View>
      </ScrollView>
      // <View
      //   style={styles.viewPager}
      //   >
      //   <View style={styles.container}>
      //     <NewsItemMain
      //       desc = {"First News \n"}
      //       image = {newsImage}
      //     />
      // </View>
      // <View style={styles.container}>
      //     <NewsItemMain
      //       desc = {"Second News \n"}
      //       image = {newsImage}
      //     />
      // </View>
      // <View style={styles.container}>
      //     <NewsItemMain
      //       desc = {"Third News \n"}
      //       image = {newsImage}
      //     />
      // </View>
      // </View>
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
  }
});
