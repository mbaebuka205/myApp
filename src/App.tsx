import {RouterProvider} from "react-router-dom"
import {MainRouter} from "./Routes/MainRouter"

function App() {
  return (
   <div>
   <RouterProvider router={MainRouter}/>
   </div> 
  )
}

export default App;
