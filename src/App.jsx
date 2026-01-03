import { BrowserRouter, Routes,Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<protectedRoute><AdminDashboard/>
        <Customer/></protectedRoute>}/>
        </Routes></BrowserRouter>
    </div>
  )
}
export default App;