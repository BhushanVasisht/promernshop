import React, {Component} from 'react';
import products from '../products';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1>Latest Products</h1>
                <Row>
                    {products.map(item => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Product item={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default HomeScreen;
