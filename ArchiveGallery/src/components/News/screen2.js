/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import ImageSlider from 'react-native-image-slider';

class screen2 extends Component<{}> {

  render() {
    const images = [
    require('../../../assets/story1_1.jpg'),
    require('../../../assets/story1_2.jpg'),
    require('../../../assets/story1_3.jpg')
    ];

    const imageDesc = [
      'Children at a Halloween party playing with puppets Los Angeles, 1935',
      'Children at a Halloween Party Los Angeles, 1935',
      'Mary Jane Clary, Bobbie Harrell, Guy De Wolf, and Crete De Wolf in their Halloween costumes Los Angeles, 1935'
    ];

    let title = 'What were kids wearing for Halloween in 1935?';

    let desc1 = "Despite the economic situation of the time, these kids still dressed as sheep, clowns, sailors, and pumpkins. What will you be for Halloween? \n";

    let desc2 = "Join us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...\nAmerica in 1935 was still reeling from the effects of the depression with an unemployment rate of over 20%. While the U.S. was still recovering from the economic downturn, it was also a time of massive creativity and accomplishment. In 1935 Amelia Earhart flew solo across the Pacific, Monopoly was released, Social Security was signed into law, the VW Beetle was launched in Germany, Alcoholics Anonymous was formed, Persia was renamed Iran, the last concrete was poured into Hoover Dam and it was the birth year of nylon and swing dancing. And, in the middle of all this unemployment and accomplishment, was halloween. Here are some of our favorite costumes from the children of 1935. \nDespite the economic situation of the time, these kids still dressed as sheep, clowns, sailors, and pumpkins. What will you be for Halloween? \n";

    return (
      <View style={styles.container}>
      <ScrollView>
        <Image source = {images[0]} style={{width: '100%', height: 300}}/>
      <View style={styles.content1}>
          <Text style={{fontWeight: "bold", fontSize: 20, marginTop: 10, marginBottom: 10}}>{title}</Text>
          <Text>{desc1}</Text>
        </View>
        <ImageSlider
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View
              key={index}
              style={[
                style,
                styles.customSlide
              ]}
            >
              <Image source={item} style={styles.customImage} />
              <Text>{imageDesc[index]}</Text>
            </View>
          )}
        />
        <View style={styles.content2}>
          <Text>{desc2}</Text>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  slider: { backgroundColor: '#000'},
  content1: {
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    marginLeft: 10,
    marginRight: 10
  },
  content2: {
    width: '100%',
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  contentText: { color: '#000' },

  customSlide: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  customImage: {
    width: "100%",
     height: 400,
  },
});

export default screen2;