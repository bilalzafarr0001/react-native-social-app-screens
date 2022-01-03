import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icons, {icons} from '../components/Icons';
import Colors from '../constants/Colors';

import MyHeader from '../components/MyHeader';

export default function Profile({route, navigation}) {
  return (
    <View style={{flex: 1}}>
      <MyHeader menu title={route.name} right="logout" style={styles.header} />

      <View style={styles.container}>
        <Image
          source={{
            uri: 'http://sumcreativity.com/images/site/profile-2.png',
          }}
          style={styles.avatar}
        />
        <Text style={styles.caption}>Bilal Zafar</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Icons icon={icons.Ionicons} name="location" color={Colors.primary} />
          <Text>Lahore,Pakistan</Text>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.rowContent}>
            <TouchableOpacity style={styles.icon}>
              <Icons
                icon={icons.Ionicons}
                name="call-outline"
                color={Colors.black}
              />
            </TouchableOpacity>
            <Text style={styles.title}>+92301-6159646</Text>
          </View>
          <View style={styles.rowContent}>
            <TouchableOpacity style={styles.icon}>
              <Icons
                icon={icons.Ionicons}
                name="logo-instagram"
                color={Colors.black}
              />
            </TouchableOpacity>
            <Text style={styles.title}>kh.bilalzafarr</Text>
          </View>
          <View style={styles.rowContent}>
            <TouchableOpacity style={styles.icon}>
              <Icons
                icon={icons.Ionicons}
                name="logo-twitter"
                color={Colors.black}
              />
            </TouchableOpacity>
            <Text style={styles.title}>@beelal.zafarrr</Text>
          </View>
        </View>

        <View style={styles.rowView}>
          <View style={styles.rowContentsecond}>
            <Text style={styles.amount}>5</Text>
            <Text style={styles.title}>Posts</Text>
          </View>
          <View style={styles.rowContentsecond}>
            <Text style={styles.amount}>12K</Text>
            <Text style={styles.title}>Followers</Text>
          </View>
          <View style={styles.rowContentsecond}>
            <Text style={styles.amount}>125</Text>
            <Text style={styles.title}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.intro}>Description</Text>
      <Text style={styles.description}>
        A very passonate guy who always ready to learn new things. Having
        Experince in MERN, REACT, REACT NATIVE.Working in Nextbridge as an
        Associate Software Engineer.Got did my bachlor from Fast NU.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 19,
  },
  header: {
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    marginHorizontal: 4,
  },
  avatar: {
    height: 110,
    width: 110,
    borderRadius: 24,
  },
  caption: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  bottomView: {
    flexDirection: 'row',
    padding: 16,
  },
  icon: {marginHorizontal: 30, marginVertical: 10},
  rowView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rowContent: {
    marginHorizontal: 15,
    padding: 10,
    backgroundColor: 'mintcream',
    borderRadius: 10,
  },
  rowContentsecond: {
    marginHorizontal: 15,
    padding: 20,
    backgroundColor: 'silver',
    borderRadius: 10,
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  intro: {
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    padding: 15,
    textAlign: 'center',
  },
});
