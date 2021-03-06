import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'; 




const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts );

    return(
        <FlatList data={products} keyExtractor={item => item.id}
        renderItem={itemData => 
            <ProductItem image={itemData.item.imageUrl} 
                            title={itemData.item.title} 
                            price={itemData.item.price}
                            onViewDetails={()=> props.navigation.navigate("ProductDetail", 
                                {
                                    productId:itemData.item.id,
                                    productTitle: itemData.item.title
                                })}
                            onAddToCart={()=> console.log("On add to cart")}
                            />
        }
        
        />
    )
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: "All products"
}

export default ProductsOverviewScreen;