import I18n from "../../assets/localization/I18n"
import { View } from "react-native"
import { colorPalette } from "../styles/colors"
import { MyButton } from "../components/button"
import { InputText } from "../components/InputText"
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import createAccountOwner from "../../networking/createAccount"

export function CreateAccountOwnerScreen({navigation, props}) {

    const [userData, setUserData] = useState({
      email : '',
      password : '',
      repeatPassword : ''
    })

    const onRegisterPress = async (e) => {
      const result = await createAccountOwner(userData);
      console.log("Result Register: ", result);
    }

    useEffect(() => {
        navigation.setOptions({title : I18n.t('createAccount')})
    }, [navigation])

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setUserData({...userData, 'email' : text})
    }

    const onPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'password' : text})
    }

    const onRepeatPassChange = ({nativeEvent : {eventCount, target, text}}) => {
      setUserData({...userData, 'repeatPassword' : text})
    }

    console.log(userData);

    return (
        <View style={{flexDirection : 'column', 
        height : '100%',
        alignItems : 'center', backgroundColor : colorPalette.White}}>
            <View style={{width : '100%', height : '15%', backgroundColor : colorPalette.White}}></View>
            <Icon name='account-circle' size={96} color={colorPalette.Orange} />
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>

            <View style={{ justifyContent : 'space-evenly', height : '35%', width : '80%', backgroundColor : colorPalette.LightOrange, borderRadius : 30}}>
                <InputText placeholder = {I18n.t('emailInput')} color={colorPalette.Orange} name = 'email' onChange = {onEmailChange}></InputText>
                <InputText secureTextEntry = {true} placeholder = {I18n.t('passInput')} color={colorPalette.Orange} name='password' onChange = {onPassChange}></InputText>
                <InputText secureTextEntry = {true} placeholder = {I18n.t('validPassInput')} color={colorPalette.Orange} name='repeatPassword' onChange = {onRepeatPassChange}></InputText>

            </View>
            <View style={{width : '100%', height : '5%', backgroundColor : colorPalette.White}}></View>
            <MyButton title = {I18n.t('createAccount')} onPress = {onRegisterPress}></MyButton>
        </View>
    )

}

export default CreateAccountOwnerScreen;