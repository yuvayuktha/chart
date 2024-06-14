import React from 'react'
import Barchart from './components/Barchart'
import Piechart from './components/Piechart'

export default function chart() {
  return (
    <div className='App'>
        <Barchart />
        <Piechart/>
    </div>
  )
}
