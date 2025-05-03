import React from "react"
import Sidebar from "../../components/Sidebar"
import MainContent from "../../components/MainContent"
// import "../../css/MainContent.css"

const Dashboard = () => {
  return (
    <>
      <div className="bg-success">
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}

export default Dashboard
