import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/Signup"
import { Suspense } from "react"
import Spinner from "./components/Spinner"
import About from "./pages/About"
import Event from "./pages/event"
import Dashboard from "./pages/dashboard"
import ProfilePage from './components/Profile';
import InquiryForm from './pages/getticket';
 import CheckoutPage from './pages/paymentinfo';
import UserManagement from './components/user';
import LatestNews from './pages/news';

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
    {
      path:'/ContactUs',
      element:<Suspense fallback={<Spinner/>}><contact/></Suspense>
    },
    {
      path:'/Payment',
      element:<Suspense fallback={<Spinner/>}><CheckoutPage/></Suspense>
    },
    {
      path:'/user',
      element:<Suspense fallback={<Spinner/>}><UserManagement/></Suspense>
    },
    {
      path:'/News',
      element:<Suspense fallback={<Spinner/>}><LatestNews/></Suspense>
    },
   

  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
  
    </>
  )
}

export default App;