import PRODUCTS from '../../data/data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts:PRODUCTS.filter(product => product.ownweId === 'u1')
};


const productReducer = (state=initialState, action) => {
    return state;
}

export default productReducer;
