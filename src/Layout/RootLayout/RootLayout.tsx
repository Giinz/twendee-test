import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className="App">
      <h1>User List</h1>
      <Outlet  />
      
    </div>
  )
}

export default RootLayout