import React from "react";
import { FlatList, Button, View, Text } from "react-native";
import config from "../../../config";
import ProductCard from "../../components/ProductCard";
import useFetch from "../../hooks/useFetch/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { useDispatch, useSelector } from "react-redux";

const Products = ({ navigation }) => {
    const { loading, data, error } = useFetch(config.API_PRODUCT_URL);

    const handleProductSelect = id => {
        navigation.navigate("DetailPage", { id });
    };

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
    );

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View>
            <FlatList data={data} renderItem={renderProduct} />
        </View>
    )
};

export default Products;