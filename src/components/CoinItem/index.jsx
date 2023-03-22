import React from "react";
import {Text, View, Image} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

const CoinItem = ({marketCoin}) => {
    const{
        name, 
        current_price, 
        market_cap_rank, 
        price_change_percentage_24h, 
        symbol, 
        market_cap,
        image,
    } = marketCoin;

    const updownColor = price_change_percentage_24h < 0 ? "#ea3943" : "#16c784"

    const updownArrow = price_change_percentage_24h < 0 ? "arrowdown" : "arrowup"

    const DeciMarketCap = (market_cap) => {
        if (market_cap > 1_000_000_000_000) {
            return `${Math.floor(market_cap / 1_000_000_000_000)} T`
        }if (market_cap > 1_000_000_000) {
            return `${Math.floor(market_cap / 1_000_000_000)} B`
        }if (market_cap > 1_000_000) {
            return `${Math.floor(market_cap / 1_000_000)} M`
        }if (market_cap > 1_000) {
            return `${Math.floor(market_cap / 1_000)} K`
        }
        return market_cap
    };
    return(
<View style={styles.CoinTitle}>
        <Image source={{uri:image}}
        style={{
            height: 30,
            width: 30, 
            marginRight:10, 
            alignSelf:'center'}}/>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>#{market_cap_rank}</Text>
            </View>
           <Text style={styles.text}>{symbol.toUpperCase()}</Text>
           <AntDesign 
            name={updownArrow}
            size={15} color={updownColor} 
            style={{alignSelf: 'center', marginRight: 3}} />
           <Text style={{color:updownColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
       </View>
       <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
        <Text style={styles.title}>{current_price}$</Text>
        <Text style={{color:'white'}}>{DeciMarketCap(market_cap)}$</Text>

       </View> 
      </View>
    )
}

export default CoinItem;