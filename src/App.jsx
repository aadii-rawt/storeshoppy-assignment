import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Contact from "./Pages/Contact"


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Contact />
      }

    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
