import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  Image,
  Modal,
  Alert,
} from "react-native";
import { Imageassets } from "../assets/images/image";

interface SecondaryHeaderProps {
  tittle: string;
  fontSize?: any;
  backgroundColour?: any;
  textColour?: any;
  onBackClick?:()=>void;
}

const SecondaryHeader : React.FC<SecondaryHeaderProps> = ({ tittle,fontSize,textColour,backgroundColour,onBackClick }) => {
    const navigator = useNavigation();
    return (
      <View style={{...styles.tabBarContainer,backgroundColor:backgroundColour ?? "#252525B2"}}>
        <View style={styles.leftBar}>
            <TouchableOpacity onPress={()=>{
                if(onBackClick) 
                    onBackClick;
                else
                    navigator.goBack();
            }}>
                
                <Image source={Imageassets.BackArrow} style={{marginRight:10}} width={10}/>
            </TouchableOpacity>
            <Text style={{...styles.tittleText,color:textColour ?? "#fff",fontSize:fontSize ?? 18}}>{tittle}</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    tabBarContainer: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
    },
    leftBar: {
        alignItems:'center',
        display:'flex',
        flexDirection: 'row',
        marginHorizontal:20,
    },
    tittleText: {
        alignItems:'center',
        display:'flex',
        flexDirection: 'row',
    },
  });

export default SecondaryHeader;