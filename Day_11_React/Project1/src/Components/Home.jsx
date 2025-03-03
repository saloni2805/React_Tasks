import React, { useState } from 'react';
import Carousels from './Carousels'
import Parition from './Parition'
import Products from './Products'
import Button from './Button'
import images2 from '../assets/images/Chairs/images2.jpeg'
import imge3 from '../assets/images/Chairs/imge3.jpg'
import img4 from '../assets/images/Chairs/img4.jpg'
import img5 from '../assets/images/Chairs/img5.jpg'
// import img1 from '../assets/images/Chairs/img1.jpg'
import imge1 from '../assets/images/Sofa/imge1.jpg'
import img2 from '../assets/images/Sofa/img2.jpg'
import img3 from '../assets/images/Sofa/img3.jpg'
import image3 from '../assets/images/Sofa_Sets/image3.jpg'
import image2 from '../assets/images/Sofa_Sets/image2.jpg'
import images from '../assets/images/Sofa_Sets/images.jpeg'



const Home = () => {

    // const [AllProducts, setAllProducts] = useState(true)
    const [Sofa_Sets, setSofa_Sets] = useState(true)
    const [Sofa, setSofa] = useState(true)
    const [Chairs, setChairs] = useState(true)

    const SofaSetList = [
        {
            id: '1',
            name: "Product 1",
            category: "SofaSet", price: 100,
            image: images
        },
        {
            id: '2',
            name: "Product 1",
            category: "SofaSet",
            price: 100,
            image: image2
        },
        {
            id: '3',
            name: "Product 1",
            category: "SofaSet",
            price: 100,
            image: image3
        }]

    const SofaList = [{
        id: '4',
        name: "Product 1",
        category: "Sofa",
        price: 100,
        image: img3
    },
    {
        id: '5',
        name: "Product 1",
        category: "Sofa",
        price: 100,
        image: img2
    },
    {
        id: '6',
        name: "Product 1",
        category: "Sofa",
        price: 100,
        image: imge1
    }
    ]

    const ChairsList = [{
        id: '7',
        name: "Product 1",
        category: "Chair",
        price: 100,
        image: images2
    },
    {
        id: '8',
        name: "Product 1",
        category: "Chair",
        price: 100,
        image: imge3
    },
    {
        id: '9',
        name: "Product 1",
        category: "Chair",
        price: 100,
        image: img4
    },
    {
        id: '10',
        name: "Product 1",
        category: "Chair",
        price: 100,
        image: img5
    }]


    const ViewAllProducts = () => {
        // setAllProducts(true)
        setChairs(true)
        setSofa(true)
        setSofa_Sets(true)
    }

    const ViewSofa = () => {
        // setAllProducts(true)
        setChairs(false)
        setSofa(true)
        setSofa_Sets(false)
    }

    const ViewChairs = () => {
        // setAllProducts(true)
        console.log('chairs shoeing')
        setChairs(true)
        setSofa(false)
        setSofa_Sets(false)
    }

    const ViewSofaSets = () => {
        // console.log('sofasets shoeing')
        // setAllProducts(true)
        setChairs(false)
        setSofa(false)
        setSofa_Sets(true)
    }


    return (
        <>
            <Carousels />
            <Parition name='Our Products' />
            <div className='w-50 m-auto d-flex justify-content-evenly mt-4'>
                <Button type='button' className={"btn"} name='View All' onClick={ViewAllProducts} style={{ backgroundColor: 'brown', color: 'white' }} />
                <Button type='button' className={"btn"} name='Sofa' onClick={ViewSofa} style={{ backgroundColor: 'brown', color: 'white' }} />
                <Button type='button' className={"btn"} name='Chairs' onClick={ViewChairs} style={{ backgroundColor: 'brown', color: 'white' }} />
                <Button type='button' className={"btn"} name='Sofa Sets' onClick={ViewSofaSets} s style={{ backgroundColor: 'brown', color: 'white' }} />
            </div>
            <div className='container mt-4  '>
                <div className='col-md-12 '>
                    <div className='row '>
                        {
                            Chairs && ChairsList.map((product) => {
                                return (
                                    <div key={product.id} className="col-md-3 my-3 d-flex justify-content-center">
                                        < Products products={product} category={product.category} />
                                    </div>

                                )

                            })
                        }
                        {
                            Sofa_Sets && SofaSetList.map((product) => {
                                return (
                                    <div key={product.id} className="col-md-3 my-3 d-flex justify-content-center">
                                        < Products products={product} category={product.category} />
                                    </div>

                                )

                            })
                        }
                        {
                            Sofa && SofaList.map((product) => {
                                return (
                                    <div key={product.id} className="col-md-3 my-3 d-flex justify-content-center">
                                        < Products products={product} category={product.category} />
                                    </div>

                                )

                            })
                        }


                    </div></div>


            </div>
        </>
    )
}

export default Home