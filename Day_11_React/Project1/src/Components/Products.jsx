
import Card from 'react-bootstrap/Card';
import Button from './Button';

function Products({ products }) {
    // console.log(products)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{ height: '18rem' }} variant="top" src={products.image} />
            <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <Card.Text>
                    RS. {products.price}
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center '>
                    <Button type='button' name='Buy Now' style={{ backgroundColor: 'red', color: 'white' }} />
                    <Button type='button' name='View Details' style={{ backgroundColor: 'white', border: '1px solid black', color: 'black' }} />
                </div>

            </Card.Body>
        </Card>
    );
}

export default Products;