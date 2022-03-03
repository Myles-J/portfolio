import React from 'react'
import {useRouter} from 'next/router'

export default function CaseStudyHeader() {
  const router = useRouter()
  return (
    <header className='caseStudyHeader'>
      <button onClick={() => router.push('/#projects')} className='link-btn'>Main page</button>
      <div className='case-study-links'>
      <a href={`#Overview`} className='m-1 link'>Overview</a>
      <a href={`#Tools/Technologies`} className='m-1 link'>Tools/Technologies</a>
      <a href={`#Structure`} className='m-1 link'>Structure</a>
      <a href={`#Reflection`} className='m-1 link'>Reflection</a>
      </div>
    </header>
  )
}
