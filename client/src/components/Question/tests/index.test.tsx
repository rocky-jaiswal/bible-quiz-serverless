import { render } from '@testing-library/react'

import Question from '..'

describe('<Question />', () => {
  test('displays without errors', () => {
    const { getByText } = render(<Question />)
    expect(getByText('dummy component')).toBeInTheDocument()
  })
})
