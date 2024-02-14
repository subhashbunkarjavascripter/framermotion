 import { motion } from 'framer-motion'
import React, { useState } from 'react'
 
 const App = () => {
  const [a, setA] = useState(false);
 
   return (
     <>
     <div data-bg={a}  onClick={()=>setA(!a)} className=' main bg-zinc-100 w-full h-screen flex items-center justify-center'>
      <h2 data-test={a} onClick={()=>setA(!a)} className='kuchh text-zinc-700 top-[29%] text-5xl absolute'>Light Mode Enable</h2>
      <h3 data-hello={a} onClick={()=>setA(!a)} className='change text-zinc-700 opacity-0 top-[29%] text-5xl absolute'>Dark Mode Enable</h3>
      <div data-onHai={a} onClick={()=>setA(!a)} className='handle w-96 h-32 bg-green-500 p-4 rounded-full flex items-center justify-start'>
        <motion.div layout className='w-24 h-24 bg-green-800 rounded-full'></motion.div>
      </div>

     </div>
     </>
   )
 }
 
 export default App