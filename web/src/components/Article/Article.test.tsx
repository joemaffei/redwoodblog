import { Post } from 'types/graphql'

import { render } from '@redwoodjs/testing/web'

import Article from './Article'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Article', () => {
  it('renders successfully', () => {
    const article: Post = {
      id: 0,
      body: '',
      title: '',
      createdAt: '',
    }

    expect(() => {
      render(<Article article={article} />)
    }).not.toThrow()
  })
})
