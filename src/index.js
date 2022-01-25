import React from 'react'
import ReactDom from 'react-dom'

// CSS
import './index.css'

import { data } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <section className='bookList'>
      {data.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
