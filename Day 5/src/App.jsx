import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import SignUp from "./pages/Signup"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import About from "./pages/About"
import Event from "./pages/event"
import Dashboard from "./pages/dashboard"
import ProfilePage from './components/Profile';
import InquiryForm from './pages/getticket';

function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Suspense fallback={<Spinner/>}><SignUp/></Suspense>
    },
    {
      path:'/Login',
      element:<Suspense fallback={<Spinner/>}><Login/></Suspense>
    },
    {
      path:'/home',
      element:<Suspense fallback={<Spinner/>}><Home/></Suspense>
    },
    {
      path:'/About',
      element:<Suspense fallback={<Spinner/>}><About/></Suspense>
    },
    {
      path:'/Event',
      element:<Suspense fallback={<Spinner/>}><Event></Event></Suspense>
    },
    {
      path:'/Dash',
      element:<Suspense fallback={<Spinner/>}><Dashboard/></Suspense>
    },
    {
      path:'/Profile',
      element:<Suspense fallback={<Spinner/>}><ProfilePage></ProfilePage></Suspense>
    },
    {
      path:'/getticket',
      element:<Suspense fallback={<Spinner/>}><InquiryForm/></Suspense>
    },
   

  
   
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}


export default App;
