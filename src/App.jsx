import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./RootLayout"
import HomePage from "./pages/HomePage"


function App() {
  const mainRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index:true , element: <HomePage /> },
        ],
      },
    ]
  )
  

  return (
    <>
      <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
