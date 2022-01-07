import React from 'react'
import {useRouter} from 'next/router'

export default function CaseStudyHeader({title}) {
  const router = useRouter()
  return (
    <header className='caseStudyHeader'>
      <h1>{title} - Case Study</h1>
      <button onClick={() => router.back()} class='link-btn'>Back to main page</button>
    </header>
  )
}
