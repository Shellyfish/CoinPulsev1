import react from "react";
import CoinItem from '../../components/CoinItem';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';
import { FlatList } from "react-native";

const HomeScreen = () => {
    return (
        <FlatList 
        data={cryptocurrencies}
        renderItem={({item}) => <CoinItem marketCoin={item} />}
        />
    );
};

export default HomeScreen;