import Link from "next/link"
import React from "react"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

const fetchRepo = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/bappi2097/${name}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <>
      <h2>{name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          {repo.stargazers_count}
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          {repo.forks_count}
        </div>
        <div className='card-stat'>
          <FaEye />
          {repo.watchers_count}
        </div>
      </div>
    </>
  )
}

export default Repo
