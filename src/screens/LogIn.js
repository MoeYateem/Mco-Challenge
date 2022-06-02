
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Logo from '../../assets/mcologo.png';
import React, {useState} from 'react';
import CustomInput from '../components/CustomInput';
import ButtonDesign from '../components/ButtonDesign';
import { useNavigation } from '@react-navigation/native';

const LogIn =() => {
    const {height} = useWindowDimensions();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function loginUser(credentials){
      try {
          return fetch('http://34.245.213.76:3000/auth/signin', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(credentials)
          })

              .then(data => data.json())
              .then ((res) => {
                  if(res.accessToken !=null){
                      console.log("akal");
                      setUsername('');
                      setPassword('');
                      //navigation.navigate('Home');
                  }else{
                      alert("Invalid Credentials");

                  }
              })
      }catch (e){
          console.log(e);
      }
  }



  
  const Click = () => {
    //console.log("handle error");
    const token =  loginUser({
        username,
        password
    });
    };
    
    //navigation.navigate('home');
       // console.log("Success");
    //};
    
    
  return (
    <View style={styles.base}>
      <Image source={Logo} 
      style={[{height: height * 0.2}]}
      resizeMode="contain" />
      <CustomInput
          placeholder="Please enter your username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Please enter your password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <ButtonDesign
        onPress={Click}
        text="Log In"
        />
        
      
    </View>
  );
};
const styles =StyleSheet.create({
    base:{
        padding:50 ,
        alignItems: 'center',
    },
    mlogo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
      },
  });
export default LogIn 