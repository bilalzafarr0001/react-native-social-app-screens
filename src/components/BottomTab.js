import React, {useEffect, useState} from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Colors from '../constants/Colors';
import Icons, {icons} from './Icons';
import {Formik} from 'formik';
import {TextInput, Button, Switch, HelperText} from 'react-native-paper';
import {data} from '../constants/raw';

const tabIcons = [
  {
    ico1: 'home',
    ico2: 'home-outline',
    type: icons.Ionicons,
    routeName: 'Feeds',
  },
  {ico1: 'like1', ico2: 'like2', type: icons.AntDesign, routeName: ''},
  {ico1: 'plus', ico2: 'plus', type: icons.Entypo, routeName: ''},
  {
    ico1: 'chatbox-ellipses',
    ico2: 'chatbox-ellipses-outline',
    type: icons.Ionicons,
    routeName: '',
  },
  {ico1: 'user', ico2: 'user-o', type: icons.FontAwesome, routeName: 'Profile'},
];

const BottomTab = ({navigation}) => {
  const [focused, setFocused] = useState('home');
  const [modalVisible, setmodalVisible] = useState(false);

  const [image, setImgUrl] = React.useState('');
  const [avatar, setAvatarUrl] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [caption, setCaption] = React.useState('');

  const toggleModal = () => {
    setmodalVisible(!modalVisible);
  };

  const navigate = routeName =>
    routeName !== '' ? navigation.navigate(routeName) : null;

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setFocused('home');
    });
    return () => unsubscribe;
  }, [navigation]);

  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View style={styles.modal}>
          <View style={styles.rowView}>
            <Text style={styles.text}>Add Feed</Text>

            <TouchableHighlight onPress={toggleModal}>
              <Icons icon={icons.Ionicons} name="close" color="#006400" />
            </TouchableHighlight>
          </View>
          <Formik
            initialValues={{image: '', avatar: '', title: '', caption: ''}}
            onSubmit={values => {
              data.push(values);
              console.log(values);
              setmodalVisible(false);
            }}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <TextInput
                  label="Image Url"
                  onChangeText={handleChange('image')}
                  onBlur={handleBlur('image')}
                  value={values.image}
                  style={{width: 300, height: 60, marginTop: 30}}
                />

                <TextInput
                  label="Avatar Url"
                  onChangeText={handleChange('avatar')}
                  value={values.avatar}
                  style={{width: 300, height: 60, marginTop: 30}}
                />
                <TextInput
                  label="Title"
                  onChangeText={handleChange('title')}
                  value={values.title}
                  style={{width: 300, height: 60, marginTop: 30}}
                />
                <TextInput
                  label="Captin"
                  onChangeText={handleChange('caption')}
                  value={values.caption}
                  style={{width: 300, height: 60, marginTop: 30}}
                />

                <Button
                  onPress={handleSubmit}
                  title="Submit"
                  mode="contained"
                  style={{marginTop: 30}}>
                  Press me
                </Button>
              </View>
            )}
          </Formik>
        </View>
      </Modal>

      {tabIcons.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={
            index == 2
              ? toggleModal
              : () => {
                  setFocused(item.ico1);
                  navigate(item.routeName);
                }
          }
          style={[index === 2 && styles.plusIconStyle]}>
          <Icons
            icon={item.type}
            name={focused === item.ico1 ? item.ico1 : item.ico2}
            color={index === 2 && Colors.white}
            size={index === 2 && 34}
          />
        </TouchableOpacity>
      ))}
    </>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  plusIconStyle: {
    bottom: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    elevation: 8,
    borderWidth: 4,
    borderColor: Colors.white,
  },
  container: {flex: 1, justifyContent: 'center', marginHorizontal: 30},
  input: {marginVertical: 5},
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'silver',
    padding: 100,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#222',
    margin: 10,
    marginLeft: 0,
    fontWeight: 'bold',
  },

  input: {},
  buttonView: {
    marginTop: 20,
  },
});
