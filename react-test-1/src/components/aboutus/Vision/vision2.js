import React from 'react'
import { motion } from 'framer-motion'

function vision2() {
  return (
    <div style={{display:'grid', justifyContent:'center',alignItems:"center",}}>
        <img style={{width:'200px',position:'relative',left:'60px'}} src='https://media.discordapp.net/attachments/1331191768959418478/1335554147105378374/Screenshot_2-2-2025_131442_www.vecteezy.com.jpeg?ex=67a0973a&is=679f45ba&hm=52f79efdbd627a5e4c4c53596d04fcdfc872e393f9d5ed2f2d2d288693dbb7a2&=&format=webp&width=374&height=312'/>

<motion.p
  className="text-vision"
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
  style={{color:'black',textAlign:'center',}}
>
At Orange Coding School, we envision a world<br/> where coding education  is accessible, innovative,<br/> and empowering. Our goal is to equip learners<br/>
 with the skills to create, problem-solve,<br/> and lead in the digital age</motion.p>

<motion.p
  className="text-vision"
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.4 }}
  style={{color:'black',textAlign:'center'}}
>
bridging the gap between education and <br/>industry to shape the future of technology.
</motion.p>
    </div>
  )
}

export default vision2