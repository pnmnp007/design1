import React from 'react';
import { StyleSheet, ViewPagerAndroid, View } from 'react-native';
import newsImage1 from '../../../assets/story1_1.jpg';
import newsImage2 from '../../../assets/story1_2.jpg';
import newsImage3 from '../../../assets/story1_3.jpg';
import NewsItemMain from './NewsItemMain';

export default class screen2 extends React.Component {
  render() {
    let newsDesc = "Join us for a screening of The Waiting Game, a student-produced documentary that takes a look at immigration policy in the US through the story of a family...";

    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.container} key={1}>
          <NewsItemMain
            desc = {"America in 1935 was still reeling from the effects of the depression with an unemployment rate of over 20%. While the U.S. was still recovering from the economic downturn, it was also a time of massive creativity and accomplishment. In 1935 Amelia Earhart flew solo across the Pacific, Monopoly was released, Social Security was signed into law, the VW Beetle was launched in Germany, Alcoholics Anonymous was formed, Persia was renamed Iran, the last concrete was poured into Hoover Dam and it was the birth year of nylon and swing dancing. And, in the middle of all this unemployment and accomplishment, was halloween. Here are some of our favorite costumes from the children of 1935. \n"}
            image = {newsImage1}
          />
      </View>
      <View style={styles.container} key={2}>
          <NewsItemMain
            desc = {"Despite the economic situation of the time, these kids still dressed as sheep, clowns, sailors, and pumpkins. What will you be for Halloween? \n"}
            image = {newsImage2}
          />
      </View>
      <View style={styles.container} key={3}>
          <NewsItemMain
            desc = {"Third News \n" + newsDesc}
            image = {newsImage3}
          />
      </View>
      </ViewPagerAndroid>
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
