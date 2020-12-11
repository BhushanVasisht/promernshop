import React, {Component} from 'react';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';
import axios from 'axios';

class HomeScreen extends Component {

    state = {
        products: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/products')
            .then(r => this.setState({products : r.data.data}))
    }

    render() {
        return (
            <div>
                <h1>Latest Products</h1>
                <Row>
                    {this.state.products.map(item => (
                        <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                            <Product item={item}/>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    }
}

export default HomeScreen;
