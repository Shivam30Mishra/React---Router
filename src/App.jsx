import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div>

    <BrowserRouter>
      <Link to="/">Landing</Link>
      <Link to="/neet-online-coaching-class-11">Class11</Link>
      <Link to="/neet-online-coaching-class-12">Class 12</Link>
      <br />
      <Routes>
        <Route path="/neet-online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet-online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
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
