import React from 'react'
import {useRouter} from 'next/router'

export default function CaseStudyHeader({link1, link2, link3, link4}) {
  const router = useRouter()
  return (
    <header className='caseStudyHeader'>
      <button onClick={() => router.push('/')} className='link-btn'>Main page</button>
      <div className='d-flex align-items-center justify-content-center'>
      <a href={`#${link1}`} className='m-1'>{link1}</a>
      <a href={`#${link2}`} className='m-1'>{link2}</a>
      <a href={`#${link3}`} className='m-1'>{link3}</a>
      <a href={`#${link4}`} className='m-1'>{link4}</a>
      </div>
    </header>
  )
}
