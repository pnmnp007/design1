import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text, View } from 'react-native';
//import newsImage from './assets/story1_1.jpg';
import NewsItemMain from '../News/NewsItemMain';
import screen2 from '../News/screen2';
import {Card, Icon} from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import { AppLoading, Font } from 'expo';
export default class Home extends React.Component {

  static navigationOptions = ({navigation}) => { return { headerTitle:null, headerTransparent: true, headerStyle: { borderBottomWidth: 0, } } ;}
  state = {
    fontLoaded: false,
  };

  render() {    
    let newsDesc = "";
    const title_images =[
      require('../../../assets/1/title.jpg'),
      require('../../../assets/2/title.jpg'),
      require('../../../assets/3/title.jpg')
    ];
    newsDesc=newsDesc+newsDesc;

   /* if(!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    else{*/
    return (
      <ScrollView>
      <View >
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2', {id:1})}>
      <Card wrapperStyle={styles.category1} containerStyle = {styles.cardContainer}
        title={null}
        image={title_images[0]}
        imageStyle={styles.cardImage}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>What were kids wearing for Halloween in 1935?</Text>
          <Text style={styles.cardSubTitle}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1
            }}
          />
          <View style={styles.cardLocation}>
            <Icon style={styles.searchIcon} name="location-on" size={20} color='#FFFFFF'/>
            <Text style ={styles.cardLocationText}>5 miles away</Text>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2', {id:2})}>
      <Card wrapperStyle={styles.category2} containerStyle = {styles.cardContainer}
        title={null}
        image={title_images[1]}
        imageStyle={styles.cardImage}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>The Case of the Rosemead Marijuana Patch</Text>
          <Text style={styles.cardSubTitle}>
            Marijuana goes up in smoke, but not “puff by puff”
          </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.cardLocation}>
            <Icon name="location-on" size={20} color='#FFFFFF'/>
            <Text style ={styles.cardLocationText}>15 miles away</Text>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('screen2', {id:3})}>
      <Card wrapperStyle={styles.category3} containerStyle = {styles.cardContainer}
        title={null}
        image={title_images[2]}
        imageStyle={styles.cardImage}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Dia de Los Muertos: A Los Ángeles Tradition</Text>
          <Text style={styles.cardSubTitle}>
            The idea with React Native Elements is more about component structure than actual design.
          </Text>
        
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1
            }}
          />
          <View style={styles.cardLocation}>
            <Icon style={styles.searchIcon} name="location-on" size={20} color='#FFFFFF'/>
            <Text style = {styles.cardLocationText}>5 miles away</Text>
          </View>
        </View>
      </Card>
      </TouchableOpacity>
      </View>
      </ScrollView>
    );
  } 
  //}
}
_loadResourcesAsync = async () => {
  return Promise.all([
      Font.loadAsync({
        'helvetica-bold': require('../../../assets/fonts/helvetica/HELR65W.ttf'),
        'helvetica-light':  require('../../../assets/fonts/helvetica-light/HelveticaLt.ttf')
    }),
  ]);
};

_handleLoadingError = error => {
  // In this case, you might want to report the error to your error
  // reporting service, for example Sentry
  console.warn(error);
};

_handleFinishLoading = () => {
  this.setState({ fontLoaded: true });
};

/**
 * Functions Start
 */

/**
 * STYLES START
 */


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
    alignItems: 'center'
},
searchIcon: {
    padding: 10,
    color:'#FFFFFF',
},
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
   // color: '#424242',
},
category1: {
  flex:1,
  backgroundColor: '#D3BEE8',
  borderRadius: 9,
},
category2: {
  flex:1,
  backgroundColor: '#FC5858',
  borderRadius: 9,
},
category3: {
  flex:1,
  backgroundColor: '#FFAA31',
  borderRadius: 9,
},
cardContainer: {
  flex: 1,
  flexDirection: 'row',
  borderRadius: 9,
  //maxHeight: '68%',
  //width: '86%',
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 1.0,
  shadowOffset: {
    width:2,
    height:0
  },
  shadowRadius: 4,
  shadowOpacity: 1.0,
  //shadowColor: '#0B0B0B'
},
cardImage: {
  //flex: 1,
  //flexDirection: 'row',
  maxHeight: '68%',
  //height: '68%',
  width: '100%',
  borderRadius: 9,
  overflow: 'hidden'
},
cardText: {
  //flex: 1,
  //flexDirection: 'row',
  maxHeight: '32%',
  //height: '32%',
  width: '100%',
  borderRadius: 9,
},
cardTitle :{
  textAlign : 'left',
  fontSize: 20,
  //fontFamily: 'helvetica-bold',
  color:'#FFFFFF',
  fontWeight: 'bold'
},
cardSubTitle :{
  textAlign : 'left',
  fontSize: 15,
  //fontFamily: 'helvetica-light',
  color:'#0B0B0B',
  paddingBottom: 5
},
cardLocation :{
    //justifyContent: 'center',
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: 10,
  paddingRight: 10,
  paddingBottom: 10,
  paddingLeft: 0,
},
cardLocationText: {
  flex: 1,
  flexDirection: 'row',
  textAlign : 'left',
  fontSize: 15,
  //fontFamily: 'helvetica-bold',
  color:'#FFFFFF',
  fontWeight: 'bold',
}
});
