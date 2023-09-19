import react from "react"
import Dashboard from "../Static/Dashboard"
import Sidebar from "../Static/Sidebar"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Layout = () =>{
  return (
    <div>
      {/* <Dash> */}
        <Dashboard/>
      {/* </Dash>  */}
      <Holder>
        <Sidebar/>
        <Outlet/>
      </Holder>
    </div>
  )
}

export default Layout;
// const Dash = styled.div`
// position:fixed;
// `
const Holder = styled.div`
display:flex;
height:calc(100vh - 70px);
position:fixed;
overflow:clip;
`