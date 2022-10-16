import React from 'react'
import {useRouter} from 'next/router'
import { caseStudyLinks } from 'helpers/constants'

const CaseStudyHeader = () => {
  const router = useRouter()
  
  return (
    <header className='caseStudyHeader'>
      {caseStudyLinks.map(({ name, href }) => (
         <a href={href} className='m-1 link' key={name}>{name}</a>
      ))}
    </header>
  )
}

export default CaseStudyHeader