import React from 'react';
import {Text, Button, StyleSheet, View, Image, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = (props) => {
    const productId = props.navigation.getParam("productId");
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));
    return(
        <ScrollView>
            <Image source={{uri:selectedProduct.imageUrl }} style={styles.image}/>
            <View style={styles.actions}>
                <Button color={Colors.primaryColor} 
                    title="Add to cart" 
                    onPress={()=> {console.log("added to cart")}}/>
            </View>

            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailScreen.navigationOptions = navData => {
    const title = navData.navigation.getParam('productTitle');
    return {
        headerTitle: title
    }
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    actions:{
        marginVertical: 10,
        alignItems: 'center'
    }
});


export default ProductDetailScreen;