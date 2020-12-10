import { Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap';
import Rating from "../components/Rating";
import products from '../products';

const ProductScreens = ({ match }) => {

    const item = products.find(p => p._id === match.params.id)

    return (
        <div>
            <Link className={'btn btn-light my-3'} to={'/'}>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={item.image} rounded alt={item.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant={'flush'}>
                        <ListGroup.Item>
                            <h3>{item.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={item.rating} text={`${item.numReviews} reviews`}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${item.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {item.description}
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
                                        <strong>${item.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {item.countInStock > 0 ? `${item.countInStock} In Stock` : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Button className={'btn-block'} type={'button'} disabled={item.countInStock === 0}>
                                        {item.countInStock === 0 ? 'Currently Unavailable' : 'Add To Cart'}
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

export default ProductScreens;
