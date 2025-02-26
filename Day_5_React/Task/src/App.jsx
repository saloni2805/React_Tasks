import './App.css'

function App() {

  const today = new Date();
  const day = today.getDate().toString();
  const month = (today.getMonth() + 1).toString(); // Months are 0-based
  const year = today.getFullYear();

  function updateTime() {
    document.getElementById("current-time").innerText = new Date().toLocaleTimeString();
  }

  // Run updateTime every second
  setInterval(updateTime, 1000);

  return (
    <>
      <h1>React Workshop</h1>
      <div className='img'>
        <img src="images/React_logo_wordmark.png" alt="" height='150px' width='300px' />
      </div>

      <h2>Learn React JSX, CSS, and JS in this workshop! </h2>
      <p><mark>Time :</mark> 10:00 AM - 12:00 AM</p>
      <p><mark>Date: </mark> {`${day}-${month}-${year}`} </p>
      <p><mark>Current Time: </mark> <span id="current-time"></span></p>

    </>
  )
}

export default App
