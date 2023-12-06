
import React, { useEffect, useState } from 'react'

function Github() {
    const [Data, setData] = useState("")
    useEffect(() => { 
        fetch('https://api.github.com/users/itishapaul2323')
        .then((res) => res.json())
        .then((res) => {
            setData(res)
        })
    }, [])
    return (
        <div>GitHub Followers : {Data.followers}
        <img src = {Data.avatar_url} alt ="Git Image" width ={200} className = "flex object-center" />
        </div>
    )
}

export default Github
