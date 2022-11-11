import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import I18n from "../../assets/localization/I18n";
import { colorPalette } from '../styles/colors';
import { InputText } from '../components/InputText';
import { Icon } from '@rneui/base'
import { MyButton } from '../components/button';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserData } from '../../networking/updateUserData';
import { updateUserDataAction } from '../../redux/actions';
import { ToastAndroid } from 'react-native';
import { CONSTANTS } from '../../config';

export default function UserProfileScreen({navigation, route, props}) {

  const userName = useSelector(state => state.session.userName);
  const userId = useSelector(state => state.session.userId);

  const dispatch = useDispatch();

  const [name, setName] = useState(userName);

  const onSavePress = async (e) => {

    const result = await updateUserData(userId, {name : name});

    if (result)
    {
      dispatch(updateUserDataAction(result));
      ToastAndroid.show(CONSTANTS.SCREEN_TEXTS.USER_DATA_UPDATED, ToastAndroid.SHORT);
    }
  }

  const onNameChange = ({ nativeEvent: { eventCount, target, text} }) => {
    setName(text);
  }

  return (
    <View style={style.container}>
      <Text style={style.nameLabel}>{CONSTANTS.SCREEN_TEXTS.NAME_LABEL}</Text>

      <InputText
        onChange={onNameChange}
        color={colorPalette.White} 
        defaultValue={userName} 
        textColor={colorPalette.Black}>
      </InputText>

      <View style={{flexDirection:'row' ,marginBottom:40}}>
          <Text style={style.addPictureLabel}>{CONSTANTS.SCREEN_TEXTS.ADD_PICTURE_LABEL} </Text>
          <Icon name='add-photo-alternate' Type='material-community' size={30} color={colorPalette.Orange}></Icon>
      </View>
      <View style={style.btnContainer}>
        <MyButton title='Guardar' width='30%' height='60%' onPress={onSavePress}></MyButton>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container : {
    alignItems : 'flex-start',
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
    marginTop : 10,
  },
  nameLabel : {
    marginBottom : 20,
    marginLeft : 20,
    fontSize : 20,
    color : colorPalette.Black
  },
  addPictureLabel :{
    fontSize : 20,
    color : colorPalette.Black,
    width : Dimensions.get('window').width * 0.45,
    marginLeft : 20
  },
  btnContainer : {
    alignSelf : 'center'
  }
})