import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import newsImage from './assets/usc_asc.jpg';
import NewsItemMain from './src/components/News/NewsItemMain';
import screen2 from './src/components/News/screen2';
import {Card} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
export default class Home extends React.Component {
  render() {
    let newsDesc = "Join us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nJoin us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nJoin us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nJoin us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nJoin us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nJoin us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\n ";
    newsDesc=newsDesc+newsDesc;
    return (
      <ScrollView>
      <View>
      <TouchableOpacity onPress={() => this.props.navigate('screen2')}>
      <Card
        title='HELLO WORLD'
        image={newsImage}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
      </TouchableOpacity>
      <Card
        title='HELLO WORLD 1'
        image={newsImage}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
      </Card>
      <Card
        title='HELLO WORLD 2'
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
