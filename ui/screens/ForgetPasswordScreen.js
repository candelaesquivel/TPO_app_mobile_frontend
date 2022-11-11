import { color, Icon } from "@rneui/base"
import { useEffect } from "react"
import I18n from "../../assets/localization/I18n"
import { View , StyleSheet , KeyboardAvoidingView } from "react-native"
import { colorPalette } from "../styles/colors"
import { MyButton } from "../components/button"
import { TextInput , Dimensions} from "react-native"
import { Input } from "@rneui/themed"
import { InputText } from "../components/InputText"
import recoverPass from "../../networking/recoverPass"
import { useState } from "react"
import { Theme } from "../styles/Theme"
import { CONSTANTS } from "../../config"

function ForgetPasswordScreen({navigation, props}) {

  const [email, setEmail] = useState('');

    const onEmailChange = ({ nativeEvent: { eventCount, target, text} }) => {
      setEmail(text);
    }

    const onRecoveryTouch = (event) => {

    }

    return (
      <KeyboardAvoidingView>
        <View style={styles.global}>
          
          <View style={styles.containerWhite}>
            <Icon name='lock' size={96} color={colorPalette.Orange}></Icon>
          </View>
         
            <View style={styles.containerEmail}>
            <View style={styles.containerEmailTwo}>
            <InputText 
              color = {colorPalette.Orange} 
              placeholder = {CONSTANTS.SCREEN_TEXTS.EMAIL_INPUT_LABEL}
              placeholderTextColor ={colorPalette.White}
              height = '50%' 
              onChange={onEmailChange}
              ></InputText>
            </View> 
            </View>
            <View style={styles.button}>
              <MyButton 
              title = {CONSTANTS.SCREEN_TEXTS.RECOVER_PASS_LABEL} 
              onPress = {onRecoveryTouch}
              width={ Dimensions.get("window").width*0.6}
              height={Dimensions.get("window").height*0.07}
              ></MyButton>
            </View>
        
       
         </View>
         </KeyboardAvoidingView>
    )

}

export default ForgetPasswordScreen;

const styles = StyleSheet.create({
 global :{
  flexDirection : 'column', 
  alignItems : 'center', 
  backgroundColor : colorPalette.White,
  width : Dimensions.get("window").width,
    height:Dimensions.get("window").height,
 },
 containerWhite : {
    width : '100%',
   height : '15%',
   backgroundColor : colorPalette.White,
   marginTop : "35%",
   marginBottom : "5%"
  },
  containerEmail : { 
    justifyContent : 'space-evenly',
    width : Dimensions.get("window").width*0.9,
    height:Dimensions.get("window").height*0.1,
     backgroundColor : colorPalette.LightOrange, 
     borderRadius : Theme.sizes.ROUNDED
    },
  containerEmailTwo : { 
    flexDirection : "column",
      marginTop : "7%"
    },
  button : {
    flexDirection :"column",
    justifyContent : "center",
    marginTop : "5%"
  },
});
