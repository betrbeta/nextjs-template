"use client"
import Form from './compenents/form'
import React from 'react'

function Home() {
  const setSize = {
    width: "100vw",
    height: "100vh"
  }
  return (
    <main style={setSize} className='flex justify-center items-center'>
    <Form />
    </main>
  )
}

export default Home