import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Icons, {icons} from '../components/Icons';
import Colors from '../constants/Colors';

const DetailPage = ({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.content}>
          <SharedElement id={`item.${item.avatar}.avatar`}>
            <Image
              style={styles.avatar}
              source={{uri: item.avatar}}
              resizeMode="cover"
            />
          </SharedElement>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
          </View>
        </View>
        <SharedElement id={`item.${item.image}.image`}>
          <Image
            style={styles.image}
            source={{uri: item.image}}
            resizeMode="cover"
          />
        </SharedElement>
        <View style={styles.bottomView}>
          <View style={styles.icon}>
            <Icons icon={icons.AntDesign} name="heart" color={Colors.primary} />
          </View>
          <View style={styles.icon}>
            <Icons icon={icons.Ionicons} name="chatbubble-outline" />
          </View>
          <View style={styles.icon}>
            <Icons icon={icons.Feather} name="send" />
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </Text>
        </View>
      </View>
    </View>
  );
};

DetailPage.sharedElements = route => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.image}.image`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.avatar}.avatar`,
      animation: 'fade',
    },
  ];
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  caption: {
    color: Colors.darkGray,
  },
  image: {
    height: 300,
    width: 370,
    marginBottom: 1,
    marginHorizontal: 16,
    borderRadius: 16,
  },
  bottomView: {
    flexDirection: 'row',
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 8,
  },
  textContainer: {
    marginHorizontal: 16,
    marginBottom: 40,
  },
  avatar: {
    height: 45,
    width: 40,
    borderRadius: 24,
    backgroundColor: Colors.primary,
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    marginHorizontal: 15,
  },
  text: {
    fontSize: 16,
  },
});
