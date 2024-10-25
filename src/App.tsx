import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from "react"
import "./styles/App.css"
import Main from "./pages/main"
import AgeVerification from "./components/legal/ageVerification"
import ErrorPage from "./components/nav/error"
import Header from "./components/nav/header"
import Footer from "./components/nav/footer"
import Poker from "./pages/poker"
import PlayPoker from "./pages/playPoker"

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
  },
  {
    path: "/poker",
    element:
      <div>
        <Header />
        <Poker />
        <Footer />
      </div>,
  },
  {
    path: "/play-poker",
    element: <PlayPoker />,
  },
  {
    path: "*",
    element:
      <div>
        <Header />
        <ErrorPage />
        <Footer />
      </div>,
  }
])

function App() {

  return (
    <div>
      <AgeVerification />
      <RouterProvider router={router} />
    </div>
  )
}

export default App