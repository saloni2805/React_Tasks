import React from 'react'

const Students = ({ studentInfo }) => {
    console.log(studentInfo)
    return (
        <>

            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    <h3>{studentInfo.name}</h3>
                </div>
                <img className="card-img-top img-fluid" src={studentInfo.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{studentInfo.about}</h5>
                    <p className="card-text">{studentInfo.email}</p>
                    <a href="#" className="btn btn-primary">Hire me!</a>
                </div>
            </div>



        </>
    )
}

export default Students