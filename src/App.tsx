import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import TestPart1 from './pages/TestPart1'
import TestPart2 from './pages/TestPart2'
import TestPart3 from './pages/TestPart3'
import { useState } from 'react'
import type { ICardProps } from './types'

function App() {
  const initialCards: ICardProps[] = [
    {id: 1, image: null, text: 'Просто с кем-то поговорить', ideas: 1, unread: false, type: 'left-right'},
    {id: 2, image: 'https://placehold.jp/200x200.png', text: '}{очу в это классное место в хорошей компании', ideas: 10, unread: true, type: 'left-right'},
    {id: 3, image: 'https://placehold.jp/200x200.png', text: 'Вот тут я бы хотел погрузиться в энергию мира и насладиться покоем', ideas: 1, unread: false, type: 'right-left'},
    {id: 3, image: 'https://placehold.jp/400x300.png', text: 'Прекрасное место, чтобы погрузиться в творческие мысли, поймать дзен, сказать миру вокруг себя добрые слова', ideas: 1, unread: false, type: 'top-down'},
    {id: 4, image: 'https://placehold.jp/400x300.png', text: 'Прекрасное место, чтобы погрузиться в творческие мысли, поймать дзен, сказать миру вокруг себя добрые слова', ideas: 1, unread: false, type: 'down-top'},
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
