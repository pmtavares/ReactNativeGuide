import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/FontAwesome'

import Colors from '../constants/Colors'

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton {...props} IconComponent={Icon} iconSize={23} color={Colors.white}/>
    )
};

export default CustomHeaderButton