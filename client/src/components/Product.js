import React, {Component} from 'react';
import {Card} from "react-bootstrap";

class Product extends Component {

    render() {
        return (
            <Card className={'my-3 p-3 rounded'}>
                <a href={`/product/${this.props.item._id}`}>
                    <Card.Img variant={"top"} src={this.props.item.image} />
                </a>

                <Card.Body>
                    <a href={`/product/${this.props.item._id}`}>
                        <Card.Title>{this.props.item.name}</Card.Title>
                    </a>

                    <Card.Text as={'div'}>
                        <div className={'my-3'}>
                            {this.props.item.rating} ratings from {this.props.item.numReviews} reviews
                        </div>
                    </Card.Text>

                    <Card.Text as={'h3'}>${this.props.item.price}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Product;
