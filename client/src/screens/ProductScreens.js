import { Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from "../components/Rating";
import axios from 'axios';
import {Component} from "react";

class ProductScreens extends Component{
    state = {
        item: {}
    }

    componentDidMount() {
        axios.get(`http://localhost:3000/api/products/${this.props.match.params.id}`)
            .then(r => {
                this.setState({'item' : r.data.data})
            })
    }

    render(){
        return (
            <div>
                <Link className={'btn btn-light my-3'} to={'/'}>Go Back</Link>
                <Row>
                    <Col md={6}>
                        <Image src={this.state.item.image} rounded alt={this.state.item.name} fluid/>
                    </Col>

                    <Col md={3}>
                        <ListGroup variant={'flush'}>
                            <ListGroup.Item>
                                <h3>{this.state.item.name}</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Rating value={this.state.item.rating} text={`${this.state.item.numReviews} reviews`}/>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                Price: ${this.state.item.price}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                {this.state.item.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant={'flush'}>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                            <strong>${this.state.item.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            {this.state.item.countInStock > 0 ? `${this.state.item.countInStock} In Stock` : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <Row>
                                        <Button className={'btn-block'} type={'button'} disabled={this.state.item.countInStock === 0}>
                                            {this.state.item.countInStock === 0 ? 'Currently Unavailable' : 'Add To Cart'}
                                        </Button>
                                    </Row>
                                </ListGroup.Item>

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductScreens;
