/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import ImageView from 'react-native-image-view';


import ImageSlider from 'react-native-image-slider';
class screen2 extends Component<{}> {
  static navigationOptions = 
    ({navigation}) => 
      { return { headerTitle:null, headerTransparent: true, headerStyle: { borderBottomWidth: 0, marginRight: 20, shadowRadius: 5},
       headerRight: (
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Image
            style={{width: 24, height: 24, marginTop: 10}}
            source={require('../../../assets/close.png')}
          />
        </TouchableOpacity>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Image
            style={{width: 24, height: 24, marginLeft: 20, marginTop: 10}}
            source={require('../../../assets/back.png')}
          />
        </TouchableOpacity>
      )
    } }
    constructor(props) {
      super(props);

      this.state = {
          imageIndex: 0,
          isImageViewVisible: false,
      };
  }
  render() {
    const stories = [
      {
        "id": 1,
        "title": "What were kids wearing for Halloween in 1935?",
        "title-image":require('../../../assets/1/title.jpg'),
        "desc1": "Despite the economic situation of the time, these kids still dressed as sheep, clowns, sailors, and pumpkins. What will you be for Halloween? \n",
        "desc2": "Join us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nAmerica in 1935 was still reeling from the effects of the depression with an unemployment rate of over 20%. While the U.S. was still recovering from the economic downturn, it was also a time of massive creativity and accomplishment. In 1935 Amelia Earhart flew solo across the Pacific, Monopoly was released, Social Security was signed into law, the VW Beetle was launched in Germany, Alcoholics Anonymous was formed, Persia was renamed Iran, the last concrete was poured into Hoover Dam and it was the birth year of nylon and swing dancing. And, in the middle of all this unemployment and accomplishment, was halloween. Here are some of our favorite costumes from the children of 1935. \nDespite the economic situation of the time, these kids still dressed as sheep, clowns, sailors, and pumpkins. What will you be for Halloween? \n",
        "images": [
          require('../../../assets/1/1_1.jpg'),
          require('../../../assets/1/1_2.jpg'),
          require('../../../assets/1/1_3.jpg')
          ],
          "image-desc":  [
            'Children at a Halloween party playing with puppets Los Angeles, 1935',
            'Children at a Halloween Party Los Angeles, 1935',
            'Mary Jane Clary, Bobbie Harrell, Guy De Wolf, and Crete De Wolf in their Halloween costumes Los Angeles, 1935'
          ]
      },
      {
        "id": 2,
        "title": "The Case of the Rosemead Marijuana Patch",
        "title-image":require('../../../assets/2/title.jpg'),
        "desc1": "Marijuana goes up in smoke, but not \"puff by puff\". Weed, Mary Jane, pot, grass, herb, ganga, mota. Whatever you choose to call it, marijuana has held a place in Los Angeles forever. And, in September of 1948, marijuana held a place beside the fence of a slaughterhouse at Rush St. and Loma Ave., Rosemead, and in an alley behind 6800 Alameda St. \nAuthorities supposedly found over a dozen trees of \"narcotic weed,\" some of which were growing over 10 feet high. The headline from September 8th was \"Marijuana valued at $20,000 went up in smoke yesterday, but not puff by puff\". \n",
        "desc2": "Supposedly, the police valued the “wild” crop at over $20,000. Now, I don’t know who LAPD’s weed dealer is, but that seems expensive. Anyway, the point is, they burned it in compliance with federal regulation. \nCalifornia has traveled a long way since 1948. November 2016’s Proposition 64 saw the legalization of recreational cannabis for adults. One would be hard pressed to walk in Hollywood without passing a dispensary. The evolution of “weed culture” in LA has transformed since the mid-20th century. In fact, California was seen as a forerunner in the legalization of weed with the passing of the Compassionate Use Act in 1996.  \nSo I wanted to see how far LA had come since 1948 in regards to “weed culture.” I wanted a number, to quantify the progress of this issue.  So, I began, as any great journey does, in Google Maps, and I found the place where the police burned the weed in 1948. Then, I looked up the nearest dispensary.\nThe results of my research were as follows. There are approximately 4 dispensaries within a mile of 6800 S. Alameda. The operating hours range from 10am to midnight, and the closest dispensary, affectionately named The Green Library,  is .9 miles away. One reviewer writes, “Bomb buds and great price.” So this is how far we have come. 0.9 miles is how far LA has come on the issue of weed. And for those of you who want to check out this groundbreaking scholarship for yourselves, there’s a Chipotle right around there for when the munchies set in. So this is where we are at, Los Angeles. But I want to call your attention to the 1948 LAPD burning once again, for there is an interesting detail. See if you can find it.",
        "images": [
          require('../../../assets/2/2_1.png'),
          require('../../../assets/2/2_2.png'),
          require('../../../assets/2/2_3.jpg')
          ],
          "image-desc":  [
            'LA Times article from September of 1948',
            '4 dispensaries within a mile of 6800 S. Alameda',
            'Did you catch the man smoking?'
          ]
      },
      {
        "id": 3,
        "title": "Dia de Los Muertos: A Los Ángeles Tradition",
        "title-image":require('../../../assets/3/title.jpg'),
        "desc1": "Dia de Los Muertos, or, Day of the Dead, in English, is a Mexican holiday celebrating deceased ancestors. Prior to Spanish Colonization of Mexico, the holiday was celebrated during the end of the summer. The date was moved to coincide with the 31st of October, and 1st and 2nd of November to sync with Western Christianity's “Allhallowtide” which includes the celebrations of All Saints Eve (Oct. 31), All Saints Day (Nov. 1) and All Souls Day (Nov. 2).\n",
        "desc2": "Day of the Dead dates back to an Aztec festival dedicated to the goddess Mictecacihuatl. Modern celebrants create altars (ofrendas), cook the favorite meal of their ancestors, and paint sugar skulls (calaveras). Here are some pictures of what Dia de los Muertos looked like in 1979.\nIf you are looking for a historic place to head this Dia de Los Muertos, try Olvera Street. The blend of markets, food and history will provide you with a little taste of Mexico.\n",
        "images": [
          require('../../../assets/3/3_1.jpg'),
          require('../../../assets/3/3_2.jpg'),
          require('../../../assets/3/3_3.jpg')
          ],
          "image-desc":  [
            'Norma Pedregon dancing in Day of the Dead celebration in Los Angeles, Calif., 1979',
            'Puppeteer Paula Goldstein at Day of the Dead celebration in Los Angeles, Calif., 1979',
            'Dancers on Olvera Street in Los Angeles, Calif., 1972'
          ]
      }
      
    ];

    const id = this.props.navigation.getParam('id')-1;

    var moreStories = [];
    var count = 0;
    for(let i=0; i<stories.length; i++){
      if(i !== id){
        count++;
        moreStories.push(
          <TouchableOpacity onPress = {() => this.props.navigation.push('screen2', {id: i+1})}>
            <View key = {i}>
                <Text style={{fontSize: 20, color: "#0B0B0B", marginTop: 8}}>{stories[i]['title']}</Text>
            </View>
          </TouchableOpacity>
        )

        if(count < stories.length-1){
          moreStories.push(
            <View key = {i} style={{borderBottomColor: 'red', borderBottomWidth: 1, marginTop: 8}}></View>
          )
        }
      }
    }
    const {isImageViewVisible, imageIndex} = this.state;
    const images=[{source:stories[id]['images'][1]}];
  //   const nature = [
  //     {
  //         source: require('../../../assets/3/3_1.jpg'),
  //            // uri: 'https://s4.insidehook.com/Switzerland_Hea_1493053457.jpg',
  //            //uri:'assets:/3/3_1.jpg',
  //         //title: 'St-Petersburg',
  //         width: 800,
  //         height: 400,
             
  //     },
  //   ];
  //   const cities = [
  //     {
  //         source: {
  //             uri:
  //                 'https://avatars.mds.yandex.net/get-pdb/49816/d9152cc6-bf48-4e44-b2d5-de73b2e94454/s800',
  //         },
  //         title: 'London',
  //     },
  //     {
  //         source: {
  //             uri:
  //                 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
  //         },
  //         title: 'Paris',
  //         width: 806,
  //         height: 720,
  //     },
  //     {
  //       source: {
  //           uri:
  //               'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
  //       },
  //       title: 'Paris',
  //       width: 806,
  //       height: 720,
  //   },
  // ];
  var images2=[];
    for (var i=0; i<=2;i++)
    {
        var x={source:stories[id]['images'][i],height:400, width:400};
        images2.push(x);
    }
    return (
      
      <View style={styles.container}>
      <ScrollView>
        <Image source = {stories[id]['title-image']} style={{width: '100%', height: 300}}/>
      <View style={styles.content1}>
          <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 10}}>{stories[id]['title']}</Text>
          <Text>{stories[id]['desc1']}</Text>
        </View>
        <ImageSlider
          images={stories[id]['images']}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <TouchableHighlight  onPress={() => {
              this.setState({
                  imageIndex: {index},
                  isImageViewVisible: true,
              });
          }}>
            <View
              key={index}
              style={[
                style,
                styles.customSlide
              ]}
            >
             
              <Image source={item} style={styles.customImage} />
              <Text style={{padding:20, marginBottom:10}}>{stories[id]['image-desc'][index]}</Text>
            </View>
            </TouchableHighlight>
          )}
        />
        <View style={styles.content2}>
          <Text>{stories[id]['desc2']}</Text>
        </View>

        
      <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20}}></View>
      <View style = {styles.moreStoryContainer}>        
        <Text style={{ fontStyle: "italic", fontWeight: "bold", fontSize: 15, color: "#0B0B0B" }}> More Stories</Text>
        {moreStories}
      </View>

      </ScrollView>
      <ImageView
          glideAlways width={400} height ={400}
          images={images2}
          imageIndex={imageIndex}
          animationType="fade"
          isVisible={isImageViewVisible}
          onClose={() => this.setState({isImageViewVisible: false})}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start'
  },
  slider: { 
    padding: 20, backgroundColor: '#000'},
  content1: {
    
    padding: 20,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    color: '#000',
    textAlign: 'justify'
  },
  content2: {
    
    padding: 20,
    marginTop: 10,
    flex:1,
    backgroundColor: '#fff',
    textAlign: 'justify'
  },

  contentText: {
    padding: 20, color: '#000' },

  customSlide: {

    backgroundColor: 'grey',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  customImage: {
    backgroundColor:'black',
    width: "100%",
     height: 400,
  },
  moreStoryContainer:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  }
});

export default screen2;