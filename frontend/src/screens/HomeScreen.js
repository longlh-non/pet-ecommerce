import React, { useEffect } from 'react';
import { listProduct } from '../action/productActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import Product from '../component/Product';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { loading, error, products} = productList;
    useEffect(() => {
        dispatch(listProduct());
    }, []);
    return (
        <div>
            {loading ? <LoadingBox></LoadingBox> :
                error ? <MessageBox variant="danger">{error}</MessageBox> :
                    <div className="row center">
                        {
                            products.map(product => (
                                <Product key={product._id} product={product}></Product>
                            ))
                        }

                    </div>
            }
        </div>
    );
}
