import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { Input } from "./Ref"
import { Timer } from './Timer'
import { RollupState } from './RollupState'
import { Counter } from './CustomHooks'
import { usePost } from './hooks/usePostTitle' 
import { useFetch } from './hooks/useFetch'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/neet-online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet-online-coaching-class-12" element={<Class12Program />} />
          {/* <Route path="/" element={<Landing />} /> */}
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
// this is layout
function Layout() {
  const post = usePost();
  const {finalData} = useFetch("https://jsonplaceholder.typicode.com/users/1")
  return (<div style={{height:"100vh"}}>
    <Header /> <br />
    <Input /> <br />
    <p>Offer ends in : </p> <br />
    <Timer /> <br />
    <RollupState /> <br />
    <Counter /> <br />
    <Counter /> <br />
    <p>Title of Post : {post.title}</p>
    <p>Name: {finalData?.name}</p>
    <p>Username: {finalData?.username}</p>
    <p>Email: {finalData?.email}</p>
    <p>Phone: {finalData?.phone}</p>
    <p>Website: {finalData?.website}</p>
      
    <h3>Address</h3>
    <p>Street: {finalData?.address?.street}</p>
    <p>Suite: {finalData?.address?.suite}</p>
    <p>City: {finalData?.address?.city}</p>
    <p>Zipcode: {finalData?.address?.zipcode}</p>
    <p>Lat: {finalData?.address?.geo?.lat}</p>
    <p>Lng: {finalData?.address?.geo?.lng}</p>
      
    <h3>Company</h3>
    <p>Name: {finalData?.company?.name}</p>
    <p>Catch Phrase: {finalData?.company?.catchPhrase}</p>
    <p>Business: {finalData?.company?.bs}</p>

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
