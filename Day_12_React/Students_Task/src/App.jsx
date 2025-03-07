import { useRef, useState } from 'react'
import './App.css'
import Students from './Students'

const App = () => {

  const students = [
    {
      id: 1,
      name: "Sachin Tendulkar",
      img: "https://www.jagranimages.com/images/newimg/23042023/23_04_2023-sachin_world_cup_trophy_23393532.jpg",
      email: "sachin@gmail.com",
      about: "God of cricket",

    }

    ,
    {
      id: 2,
      name: "Virat Kohli",
      img: "https://www.aljazeera.com/wp-content/uploads/2023/03/33B24KW-highres.jpg?resize=1800%2C1800",
      email: "virat@gmail.com",
      about: "King...! Goat of Current cricket era.",

    },

    {
      id: 3,
      name: "Rohit Sharma",
      img: "https://www.greaterkashmir.com/wp-content/uploads/2024/06/Rohit-Sharma.jpg",
      email: "rohit@gmail.com",
      about: "Hitman...! captain of current indian cricket team.",
    },

    {
      id: 4,
      name: "Hardik Pandya",
      img: "https://static.cricbuzz.com/a/img/v1/i1/c592193/hardik-pandya-to-play-in-vijay-hazare-trophy-from-saturday.jpg?d=low&p=det",
      email: "hardik@gmail.com",
      about: "Clutch God..! Hated by everyone, Defeated by none.",
    },
  ]

  const [student, setStudent] = useState(students[0])
  const result = useRef(null);


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center py-2 bg-danger-subtle'>Student Information</h1>
          </div>
          <div className="d-flex justify-content-evenly mt-5">
            {/* <button className='btn btn-info' ref={result} onClick={() => setStudent(students[0])}>Student 1</button>
            <button className='btn btn-info' ref={result} onClick={() => setStudent(students[1])}>Student 2</button>
            <button className='btn btn-info' ref={result} onClick={() => setStudent(students[2])}  >Student 3</button>
            <button className='btn btn-info' ref={result} onClick={() => setStudent(students[3])} >Student 4</button> */}
            {students.map((stu) => (
              <button
                key={stu.id}
                ref={result}
                className="btn btn-info"
                onClick={() => setStudent(stu)}
              >
                {stu.name}
              </button>
            ))}

          </div>
        </div>

      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <Students studentInfo={student} />
          </div>
        </div>
      </div>
    </>
  )



}
export default App
