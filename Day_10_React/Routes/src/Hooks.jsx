import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"

const Hooks = () => {

    // must called inside functional component
    const nav = useNavigate();

    const loc = useLocation();
    console.log(loc)
    console.log(loc.pathname)
    console.log(loc.key)

    // eg
    // used to conditionally rendering

    // if(loc.pathname==='/')
    // {
    //     loc.replace.pathname = "/about"
    // }

    // ************************************************

    const GoHome = () => {
        nav('/')
    }

    // ************************************************

    const data = useParams()
    console.log(data)

    // OR
    // Object Destructuring
    const { name, id } = useParams();

    return (
        <div>
            <h1 className="text-center p-4 fw-bold">Contact Us</h1>
            {/* <h1 className="text-center">Your Name: {data.name}</h1>
            <h1 className="text-center">Your Name: {data.id}</h1>
            <hr /> */}
            <h1 className="text-center">Your Name: {name}</h1>
            <h1 className="text-center">Your Name: {id}</h1>

            <center className="mt-5">
                <button onClick={() => GoHome()} className="btn btn-sm btn-primary px-4 fw-bold mx-4" >Go To Home</button>
                <button onClick={() => nav('/services')} className="btn btn-sm btn-outline-dark px-4 fw-bold">Go To Services</button>
            </center>

        </div>
    )
}

export default Hooks