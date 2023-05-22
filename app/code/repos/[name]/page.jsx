import Repo from "@/components/Repo"
import RepoDirs from "@/components/RepoDirs"
import Link from "next/link"
import React, { Suspense } from "react"

const RepoPage = ({ params }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading Dirs...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  )
}

export default RepoPage
