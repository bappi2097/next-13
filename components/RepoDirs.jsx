import Link from "next/link"
import React from "react"

const fetchRepoContent = async (name) => {
  const response = await fetch(
    `https://api.github.com/repos/bappi2097/${name}/contents`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  await new Promise((resove) => setTimeout(resove, 1000))
  const contents = await response.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name)
  const dirs = contents.filter((content) => content.type === "dir")
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default RepoDirs
