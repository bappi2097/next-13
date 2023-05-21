import React from "react"

const getRepos = async () => {
  const response = await fetch("https://api.github.com/users/bappi2097/repos")
  const repos = await response.json()
  return repos
}

const ReposPage = async () => {
  const repos = await getRepos()
  return (
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ReposPage
