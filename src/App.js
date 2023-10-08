import React, {Suspense, lazy } from "react";
import { BrowserRouter as Router,  Routes,  Route } from "react-router-dom";

const HomePage = lazy(()=>import('./components/HomePage/HomePage'))
const Profile = lazy(()=>import('./components/Profile/Profile'))
const Skills = lazy(()=>import('./components/Skills/Skills'))
const Projects = lazy(()=>import('./components/Projects/Projects'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element = {<HomePage/>}></Route>
          <Route exact path="profile" element={<Profile/>}></Route>
          <Route exact path ='skills' element={<Skills/>}></Route>
          <Route exact path ='projects' element={<Projects/>}></Route>
        </Routes>
      </Suspense>
    </Router>

);
}

export default App;
