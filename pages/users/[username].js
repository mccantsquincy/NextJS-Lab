import React from 'react'
import { useRouter } from "next/router"

const User = () => {

    const router = useRouter()
    const { username } = router.query
  return (
    <h1>This is user: {username}</h1>
  )
}

export default User