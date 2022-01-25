import React from 'react'

const Book = ({ book }) => {
  const { img, title, author } = book

  const clickHandle = () => {
    alert('button clicked')
  }
  return (
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
