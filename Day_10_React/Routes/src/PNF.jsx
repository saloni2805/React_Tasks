import { NavLink } from 'react-router-dom'

const PNF = () => {
    return (
        <div>

            <center>
                <h1 className='text-center p-4 fw-bold'>Page Not Found <span className='text-danger'>404</span></h1>


                <p>Looking for something? <br />
                    <p>We are sorry. The Web address you entered is not a functioning page on our site.</p>

                </p>

                <NavLink to="/"><button className='btn btn-danger btn-sm my-4 fw-bold px-4'>Go To Home Page</button></NavLink>
            </center>


        </div>
    )
}

export default PNF
