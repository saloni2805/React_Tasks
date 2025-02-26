import React, { Component } from "react"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      id: 1,
      name: "Saloni",
      email: "salo@gmail.com",
      pass: "1234567",
      count: 0,
      color: "orange",
    }
  }

  // defined function
  Demo1 = () => {
    alert("Hello Event Handler")
  }

  // Defined Demo2
  Demo2 = () => {
    alert("Hello Event Handler with Fat Arrow Function")
  }

  // **********************************************************

  // Update State

  UpdateData = () => {
    // alert(' ')
    this.setState({
      name: "Sayani",
      email: "Sayani@gmail.com",
    })
  }

  UpdateCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // **********************************************************

  render() {
    const Demo3 = () => {
      alert("Hello Normal Function Event Calling")
    }

    console.log(this.state)

    return (
      <>
        {/* <h1>Statefull Class Component - State Object</h1> */}
        <div className="d-flex justify-content-center m-4">
          <h1>
            Your Name is <mark>{this.state.name}</mark>,{" "}
          </h1>
          <h1>
            Your Email is <mark>{this.state.email}</mark>
          </h1>
        </div>
        <div className="d-flex justify-content-center m-4">
          <button onClick={() => this.UpdateData()}>Update Data</button>
        </div>
        <hr />
        <h1 className="d-flex justify-content-center m-4">Counter App</h1>
        <h1
          style={{ color: this.state.color }}
          className="d-flex justify-content-center m-4"
        >
          Initial Count: <mark>{this.state.count}</mark>
        </h1>

        <div className="d-flex justify-content-center m-4">
          <button
            className="mx-3"
            onClick={() => this.setState({ color: "purple" })}
          >
            Update Color
          </button>
          <button className="mx-3" onClick={() => this.UpdateCount()}>
            Update Count{" "}
          </button>
          <button
            className="mx-3"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            Reduce Count
          </button>
        </div>

        <hr />

        {/*********************************************************************/}
        <h1 className="d-flex justify-content-center m-4">Event Handling</h1>

        <div className="d-flex justify-content-center m-4">
          <button className='mx-3' onClick={this.Demo1}>Click Here</button>
          {/* No need to bind this keyword */}
          <button className='mx-3' onClick={() => this.Demo2()}>Click Here 2</button>
          <button className='mx-3' onClick={() => alert("Hello Event Handler")}>
            Click Here 3
          </button>
          {/* Without This */}
          <button className='mx-3' onClick={Demo3}>Click Here 4</button>
        </div>
      </>
    )
  }
}
