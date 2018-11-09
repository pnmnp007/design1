import React from 'react';
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native';
import {ImageSlider} from 'react-native-image-slider';


const newsItemMain = props => {
    return(
      <ScrollView>
        <View style = {styles.modalContainer}>
        <ImageSlider
          loopBothSides
          images={props.image}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{uri: item}} style={styles.customImage} />
            </View>
          )}
        />


            {/* <Image resizeMode="center" source = {props.image} style = {styles.newsImage}/> */}
            <Text style = {styles.newsDesc}> {props.desc} </Text>
        </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    newsImage: {
        width: "100%",
        height: 200
    },
    newsDesc:{
        fontSize: 16
    }
});

export default newsItemMain;
