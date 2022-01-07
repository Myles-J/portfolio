import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function CaseStudyHeader({title}) {
  const router = useRouter()
  return (
    <header style={{backgroundColor: 'lightgray', padding: '15px', textAlign: 'center'}}>
      <h1>{title} - Case Study</h1>
      <button onClick={() => router.back()} class='link-btn'>Back to main page</button>
    </header>
  )
}
