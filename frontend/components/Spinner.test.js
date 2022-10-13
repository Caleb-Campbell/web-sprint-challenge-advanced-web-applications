import Spinner from './Spinner' 
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import React from 'react'

test('sanity', () => {
  expect(true).toBe(true)
})

describe('spinner', ()=>{
  test('spinner renders correctly given certain props',()=>{
    const { rerender } = render(<Spinner on={true}/>)
    let text = screen.queryByText('Please wait...')
    expect(text).toBeInTheDocument()
    rerender(<Spinner on={false}/>)
    text = screen.queryByText('Please wait...')
    expect(text).not.toBeInTheDocument()
  })
})



  // Import the Spinner component into this file and test
  // that it renders what it should for the different props it can take.


