import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constants/Colors'

const ProductNavigator = createStackNavigator({
    ProductsOverview: {screen: ProductsOverviewScreen},
    ProductDetail: {screen: ProductDetailScreen}
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : "white",                
        },
        headerTitleStyle:{

        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(ProductNavigator)