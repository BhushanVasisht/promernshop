import {Card} from "react-bootstrap";
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (
        <Card className={'my-3 p-3 rounded'}>
            <Link to={`/product/${item._id}`}>
                <Card.Img variant={"top"} src={item.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${item._id}`}>
                    <Card.Title>{item.name}</Card.Title>
                </Link>

                <Card.Text as={'div'}>
                    <Rating value={item.rating} text={`${item.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as={'h3'}>${item.price}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;
