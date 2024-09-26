import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

const router=createBrowserRouter([
  {path:"/",element:<Layout/>,children:[
    {index:true,element:<Home/>}
  ]}
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
