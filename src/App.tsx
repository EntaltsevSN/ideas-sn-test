import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import TestPart1 from './pages/TestPart1'
import TestPart2 from './pages/TestPart2'
import TestPart3 from './pages/TestPart3'
import { useState } from 'react'
import type { ICardProps } from './types'

function App() {
  const initialCards: ICardProps[] = [
    {id: 1, image: null, text: 'Drinking water isn\'t just about quenching.', ideas: '1', type: 'static'},
    {id: 2, image: null, text: 'Drinking water isn\'t just about quenching your thirst. It plays a crucial role in about quenching bbbbbbbb', ideas: '100', type: 'static'},
    {id: 3, image: null, text: 'Drinking water isn\'t just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your', ideas: '+10', type: 'static'},
    {id: 4, image: null, text: 'Drinking water isn\'t just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body, and staying properly hydrated is vital ', ideas: '0', type: 'static'},
    {id: 5, image: 'https://i.ibb.co/tyVtMpH/a4989700c519ce886523f0185b0c77105648b279-1.jpg', text: 'quenching your thirst. It plays a cru', ideas: '10', type: 'left-right'},
    {id: 6, image: 'https://i.ibb.co/tyVtMpH/a4989700c519ce886523f0185b0c77105648b279-1.jpg', text: 'Drinking water isn\'t just about quenching your thirst. It plays a cru bbb', ideas: '10', type: 'left-right'},
    {id: 7, image: 'https://i.ibb.co/tyVtMpH/a4989700c519ce886523f0185b0c77105648b279-1.jpg', text: 'Drinking water isn\'t just about quenching your thirst. It plays a crucial role in  in maintaining the a bbbbbbbbb', ideas: '10', type: 'left-right'},
    {id: 8, image: 'https://i.ibb.co/tyVtMpH/a4989700c519ce886523f0185b0c77105648b279-1.jpg', text: 'Drinking water isn\'t just about quenching your thirst. It plays a crucial role in maintaining the proper functioning of your body a bbbbbbbbb', ideas: '10', type: 'left-right'},

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
      <Route path='test-part-2' element={<TestPart2 {...{ cards, setCards }} />} />
      <Route path='test-part-3' element={<TestPart3 />} />
    </Routes>
  )
}

export default App
