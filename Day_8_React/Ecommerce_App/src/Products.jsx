/* eslint-disable react/prop-types */
const Products = (props) => {
    console.log(props)

    // Object Destructuring
    const { name, img } = props;


    return (
        <>
            <div className="card" style={{ width: '300px' }}>
                <div className="card-header text-center">
                    <h3>{name}</h3>
                </div>
                <div className="card-body text-center">
                    <img src={img} alt="" className='img-fluid' style={{ height: '200px' }} />
                </div>
                <div className="card-footer text-center">
                    <button className='btn btn-sm btn-danger  px-3 mx-2 fw-bold'>{props.btn1}</button>
                    <button className='btn btn-sm btn-outline-dark px-3 fw-bold'>{props.btn2}</button>
                </div>
            </div>
        </>
    )
}

export default Products