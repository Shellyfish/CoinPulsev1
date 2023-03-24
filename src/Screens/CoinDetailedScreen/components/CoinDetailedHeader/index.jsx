import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import styles from './styles';
import { useNavigation } from "@react-navigation/native";

const CoinDetailedHeader = (props) => {
    const {image, symbol, marketCapRank} = props;
    const navigation = useNavigation();
    return(
        <View style={styles.headContainer}>
        <AntDesign name="leftcircle" size={24} color="white" onPress={() => navigation.goBack} />
        <View style={styles.tickerContainer}>
            <Image source={{uri: image}} style={{width:24, height:24}}/>
            <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
            <View style={styles.rankContainer}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize:15}}>#{marketCapRank}</Text>
            </View>
        </View>
        <Feather name="user" size={24} color="white" />
    </View>
    )
};

export default CoinDetailedHeader;