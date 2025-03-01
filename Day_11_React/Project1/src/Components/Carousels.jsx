import Carousel from 'react-bootstrap/Carousel';

function Carousels() {
    return (
        <Carousel className='mt-2'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/20337842/pexels-photo-20337842/free-photo-of-a-soft-light-colored-sofa-and-a-wooden-chair-in-a-modern-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="First slide"
                    style={{ width: "600px", height: "400px", objectFit: "cover" }}

                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/11295731/pexels-photo-11295731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Second slide"
                    style={{ width: "600px", height: "400px", objectFit: "cover" }}

                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/20653873/pexels-photo-20653873/free-photo-of-sofas-in-large-living-room.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Third slide"
                    style={{ width: "600px", height: "400px", objectFit: "cover" }}

                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousels;
