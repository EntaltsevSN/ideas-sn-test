import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import TestPart1 from './pages/TestPart1'
import TestPart2 from './pages/TestPart2'
import TestPart3 from './pages/TestPart3'
import { useState } from 'react'
import type { ICardProps } from './types'

function App() {
  const initialCards: ICardProps[] = [
    {id: 1, image: null, text: 'Lorem ipsum dolor sit amet consectetur.', ideas: 1, unread: false, type: 'left-right'},
    {id: 2, image: 'https://placehold.jp/200x200.png', text: 'Lorem ipsum dolor sit amet consectetur.', ideas: 10, unread: true, type: 'left-right'},
    {id: 3, image: 'https://placehold.jp/200x200.png', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', ideas: 1, unread: false, type: 'right-left'},
    {id: 3, image: 'https://placehold.jp/400x300.png', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.', ideas: 1, unread: false, type: 'top-down'},
    {id: 4, image: 'https://placehold.jp/400x300.png', text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.', ideas: 1, unread: false, type: 'down-top'},
  ]

  const [cards, setCards] = useState<ICardProps[]>(
    localStorage.getItem('cards') === null
      ? initialCards
      : JSON.parse(localStorage.getItem('cards') as string)
  )

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='test-part-1' element={<TestPart1 {...{ cards, setCards }} />} />
      <Route path='test-part-2' element={<TestPart2 />} />
      <Route path='test-part-3' element={<TestPart3 />} />
    </Routes>
  )
}

export default App
