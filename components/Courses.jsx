import Link from "next/link"
import React from "react"

const Courses = ({ courses }) => {
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div className='card' key={course.id}>
          <h3>{course.title}</h3>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target={course.id} className='btn'>
            Go to course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
