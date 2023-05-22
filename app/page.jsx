"use client"
import Courses from "@/components/Courses"
import React, { useState, useEffect } from "react"
import Loading from "./loading"
import CourseSearch from "@/components/CourseSearch"

const HomePage = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const res = await fetch("/api/courses")
      const data = await res.json()
      setCourses(data)
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Welcome to my page</h1>
      <CourseSearch
        getSearchResults={(results) => {
          setCourses(results)
        }}
      />
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage
