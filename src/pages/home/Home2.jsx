import React from "react"
import Stories from "../../components/story/Story2"
import Posts from "../../components/post2/Post3"
import Share from "../../components/share/Share2"
import "./homes.scss"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </div>
  )
}

export default Home