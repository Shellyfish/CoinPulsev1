import React, {useState} from "react";
import { View, Text, Dimensions, TextInput} from "react-native";
import Coin from '../../../assets/data/crypto.json';
import CoinDetailedHeader from "./components/CoinDetailedHeader";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from '@rainbow-me/animated-charts';
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";


const CoinDetailedScreen = () => {
const { 
    image:{ small }, 
    name,
    symbol,
    prices, 
    market_data: {
        market_cap_rank, 
        current_price, 
        price_change_percentage_24h,
    },  
} = Coin;


const [coinValue, setCoinValue] = useState("1");
const [usdValue, setusdValue] = useState(current_price.usd.toString());

const route = useRoute();
const {params: {coinId}} = route;

const navigation = useNavigation();

const changeCoinValue = (value) => {
    setCoinValue(parseFloat(value));
    const floatValue = parseFloat(value.replace(',','.')) || 0  
    setusdValue((floatValue * current_price.usd).toString())
};

const changeUsdValue = (value) => {
    setusdValue(parseFloat(value));
    const floatValue = parseFloat(value.replace(',','.')) || 0
    setCoinValue((floatValue / current_price.usd).toString())
    setusdValue(value / current_price.usd)
};


const priceChangeColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784";

const updownArrow = price_change_percentage_24h < 0 ? "arrowdown" : "arrowup";

const screenWidth = Dimensions.get('window').width;

const chartColor = current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";



const formatCurrency = (value) => {
    "worklet";
    if (value ==="") {
        return `$${current_price.usd.toFixed(2)}`
    }
    return `$${parseFloat(value.toFixed(2))}`
};

return(
    <View style={{paddingHorizontal:10}}>
        <ChartPathProvider data={{
            points: prices.map(([x, y]) => ({x , y})),
            smoothingStrategy:'bezier',}}>
        <CoinDetailedHeader 
        image = {small} 
        name= {name} 
        symbol={symbol} 
        marketCapRank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
            <View>
                <Text style={styles.name}>{name}</Text>
                <ChartYLabel
                 format={formatCurrency}
                 style={styles.currentPrice}
                />
            </View>
            <View style={{backgroundColor:priceChangeColor, paddingHorizontal:5, borderRadius:10, flexDirection:'row', paddingVertical:10}}>
            <AntDesign
            name={updownArrow}
            size={15} color={'white'} 
            style={{alignSelf: 'center', 
            marginRight: 3}}
            />

                <Text style={styles.priceChange}>
                {price_change_percentage_24h.toFixed(2)}%</Text>
            </View>
        </View>
         <View>
            <ChartPath
                strokeWidth={3} 
                height={screenWidth / 2} 
                stroke={chartColor}
                width={screenWidth} 
                gestureEnabled='true'/>
            <ChartDot style={{ backgroundColor: chartColor}} />
         </View>
         <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection:'row', flex:1}}>
                <Text style={{color:'white', alignSelf:'center'}}>{symbol.toUpperCase()}</Text>
                    <TextInput style={styles.input} value={coinValue} keyboardType='numeric' onChangeText={changeCoinValue}/>
                        <View>

                        </View>
                        <Text style={{color:'white', alignSelf:'center'}}>USD</Text>
                    <TextInput style={styles.input} value={usdValue} keyboardType='numeric' onChangeText={changeUsdValue} />
            </View>

         </View>
         </ChartPathProvider>    
    </View>
    );
};

export default CoinDetailedScreen; 