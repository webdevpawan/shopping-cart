import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
function Rating({rating, onClick, Style}) {
  return (
    <>
     {
        [...Array(5)].map((_, i) => {
           return <span key={i} onClick={() => onClick(i)} style={Style}>
                {
                    rating > i ? (<AiFillStar />) : (<AiOutlineStar/>)
                }
            </span>
        })
     }
    </>
  )
}

export default Rating