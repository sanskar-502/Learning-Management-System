import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/student/Home'
import  CoursesList  from './pages/student/CoursesList'
import  CourseDetail  from './pages/student/CourseDetail'
import  MyEnrollments  from './pages/student/MyEnrollments'
import  Player  from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import AddCourse from './pages/educator/AddCouse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentEnrolled'
import Dashboard from './pages/educator/Dashboard'

const App = () => {
  return (
    <div>
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/course-list' element={<CoursesList/>}/>
      <Route path='/course-list/:input' element={<CoursesList/>}/>
      <Route path='/course/:id' element={<CourseDetail/>}/>
      <Route path='/my-enrollments' element={<MyEnrollments/>}/>
      <Route path='/player/:courseId' element={<Player/>}/>
      <Route path='/loading/:path' element={<Loading/>}/>

      <Route path='/educator' element={<Educator/>}>
        <Route path='educator' element={<Dashboard/>}/>
        <Route path='add-course' element={<AddCourse/>}/>
        <Route path='my-courses' element={<MyCourses/>}/>
        <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
      </Route>

      
      
      </Routes>
    </div>
  )
}

export default App
