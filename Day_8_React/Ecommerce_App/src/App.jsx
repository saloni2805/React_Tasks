import './App.css'
import React from 'react';
import Products from './Products'
import img3 from './assets/images/img3.jpeg';
import img4 from './assets/images/img4.jpeg';
import fruitimg1 from './assets/images/fruitimg1.jpeg';
import fruitimg2 from './assets/images/fruitimg2.jpeg';
// import fruitimg3 from './assets/images/fruitimg3.jpeg';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = ({
      all_data: true,
      fruit_data: true,
      other_data: true,
    })
  }

  Fruit_handler = () => {
    // alert();
    this.setState({
      fruit_data: true,
      other_data: false
    })
  }

  Other_Handler = () => {
    this.setState({
      other_data: true,
      fruit_data: false
    })
  }

  All_Handler = () => {
    // alert()
    this.setState({
      fruit_data: true,
      other_data: true
    })
  }

  render() {
    const fruit_data = [{
      id: 3,
      name: "Banana Fruit",
      img: fruitimg1,
      btn1: "Add To Basket",
      btn2: "Buy Now"
    },
    {
      id: 4,
      name: "Papaya Fruit",
      img: fruitimg2,
      btn1: "Add To Basket",
      btn2: "Buy Now"
    }]

    const other_data = [{
      id: 1,
      name: "Vivo Phone",
      img: img3,
      btn1: "Add To Basket",
      btn2: "Buy Now"
    }, {
      id: 2,
      name: "Redmi Phone",
      img: img4,
      btn1: "Add To Basket",
      btn2: "Buy Now"
    }]
    return (<>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center mb-3 p-2 bg-dark">
            <h1 className='text-warning fw-bold'>Ecommerce Produncts</h1>
          </div>
        </div>

        <center>
          <button className='btn btn-danger px-4 fw-bold my-3 btn-sm' onClick={() => this.All_Handler()}>All Products</button>
          <button className='btn btn-primary px-4 fw-bold my-3 btn-sm mx-3' onClick={() => this.Fruit_handler()}>Fruit Products</button>
          <button className='btn btn-dark px-4 fw-bold my-3 btn-sm ' onClick={() => this.Other_Handler()}>Other Products</button>
        </center>
        <div className="col-md-12">
          <div className="row">
            {
              this.state.fruit_data &&
              fruit_data.map((val, index) => {
                console.log(val)
                return (
                  <div key={index} className="col-md-3 my-3">
                    <Products
                      name={val.name}
                      img={val.img}
                      btn1={val.btn1}
                      btn2={val.btn2} />
                  </div>
                )
              })}

            {
              this.state.other_data ?
                other_data.map((val, index) => {
                  console.log(val)
                  return (
                    <div key={index} className="col-md-3 my-3">
                      <Products
                        name={val.name}
                        img={val.img}
                        btn1={val.btn1}
                        btn2={val.btn2} />
                    </div>
                  )
                }) : null}
          </div>
        </div>
      </div>


    </>)
  }


}

// function App() {
//   const ProductsData = [
//     {
//       "id": 1,
//       "name": "Vivo Phone",
//       "img": img3,
//       "btn1": "Add To Basket",
//       "btn2": "Buy Now"

//     },
//     {
//       "id": 2,
//       "name": "Redmi Phone",
//       "img": img4,
//       "btn1": "Add To Basket",
//       "btn2": "Buy Now"
//     },
//     {
//       "id": 3,
//       "name": "Banana Fruit",
//       "img": fruitimg1,
//       "btn1": "Add To Basket",
//       "btn2": "Buy Now"
//     },
//     {
//       "id": 4,
//       "name": "Papaya Fruit",
//       "img": fruitimg2,
//       "btn1": "Add To Basket",
//       "btn2": "Buy Now"
//     },
//     {
//       "id": 5,
//       "name": "Dragon Fruit",
//       "img": fruitimg3,
//       "btn1": "Add To Basket",
//       "btn2": "Buy Now"
//     },

//   ]

//   return (
//     <>

//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12 text-center mb-3 p-2 bg-dark">
//             <h1 className='text-warning fw-bold'>Ecommerce Produncts</h1>
//           </div>
//         </div>
//         <div className="col-md-12">
//           <div className="row">
//             {ProductsData.map((val, index) => {
//               console.log(val)
//               return (
//                 <div key={index} className="col-md-3 my-3">


//                   <Products
//                     name={val.name}
//                     img={val.img}
//                     btn1={val.btn1}
//                     btn2={val.btn2} />

//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>

//       {/* <div className="col-md-12">
//         <div className="row">
//           <div className="col-md-3">
//             <Products
//               name='Samsung S3'
//               img=''
//               btn1='Add To Basket'
//               btn2='Buy Now' />
//           </div>
//         </div>
//       </div> */}



//     </>
//   )
// }

// export default App
