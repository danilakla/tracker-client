import React from 'react'
import MenuAppBar from '../compontents/header/auth/MenuAppBar'
import { ListSubjectForReview } from '../compontents/ListSubjecetForReview'

export const   StudentForReviewPage= ()=> {
  return (
<>
<MenuAppBar name="Student for Review"></MenuAppBar> 
<ListSubjectForReview></ListSubjectForReview>

</>

  )
}
