import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Input } from "./Ref"
import { Timer } from './Timer'
import { RollupState } from './RollupState'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/neet-online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet-online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
// this is layout
function Layout() {
  return (<div style={{height:"100vh"}}>
    <Header />
    <Input />
    <p>Offer ends in : </p>
    <Timer />
    <RollupState />
    <div style={{height:"90vh"}}>
      <Outlet />
    </div>
  </div>)
}

function Header() {
  return (<div>
    <Link to={"/"}>Allen</Link>
    <Link to={"/neet-online-coaching-class-11"}>Class 11</Link>
    <Link to={"/neet-online-coaching-class-12"}>Class 12</Link>
  </div>)
}

function ErrorPage() {
  return <div>
    Sorry page not found
  </div>
}

function Landing() {
  return <div>Landing Page</div>
}

function Class11Program() {
  return <div>Class 11 Program</div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }

  return <div>
    Class 12 Program
    <button onClick={redirectUser}>Go back to landing page</button>
  </div>
}

export default App
