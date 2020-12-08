import React from 'react'
import StoreProvider from '../../StoreProvider/index'
import { render, screen } from '@testing-library/react'
import Timer from './index.js'

describe('<Timer />', () => {
  test('Should <Timer /> renders without crashing with all its elements', () => {
    render(
      <StoreProvider>
        <Timer />
      </StoreProvider>
    )
    expect(screen.getAllByRole('button').length).toEqual(6)
    expect(screen.getByTestId('timer')).toBeInTheDocument()
  })

  test('Should timer dafault value be 25:00', () => {
    render(
      <StoreProvider>
        <Timer />
      </StoreProvider>
    )
    expect(screen.getByText('25:00')).toBeInTheDocument()
  })
})
