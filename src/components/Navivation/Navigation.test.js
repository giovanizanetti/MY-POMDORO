import React from 'react'
import StoreProvider from '../../StoreProvider/index'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navigation from './index.js'

describe('<Navigation />', () => {
  test('Should <Navigation /> render without crashing with its navigation buttons', () => {
    render(
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    )
    expect(screen.getAllByRole('button').length).toEqual(3)
    // screen.getByRole('')
  })

  test('Should Navigation display brand name', () => {
    render(
      <StoreProvider>
        <Navigation />
      </StoreProvider>
    )
    expect(screen.getByTestId('navigation')).toBeInTheDocument()
    expect(screen.getByText('My Pomodoro')).toBeInTheDocument()

    // screen.getByRole('')
    // screen.debug()

  })

  test('Should clicking on settings button icon open the settings modal', () => ) 
  test('Should click on log button open the log modal', () => )
  test('Should buttons hide and menu icon shows on small screens', () =>)

})
