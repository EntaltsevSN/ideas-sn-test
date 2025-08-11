import { useState } from "react";
import type { ICardProps, IFormProps } from "../types";

function Form({ cards, setCards }: IFormProps) {
  const [text, setText] = useState('')

  function getRandomCard(text: string) {
    const random = Math.random()
    let newId: number = 0;

    if (cards.length) {
      newId = cards.at(-1)!.id
    }

    const newCard: ICardProps = {
      id: newId + 1, 
      image: random > .5 ? 'https://placehold.jp/200x200.png' : null,
      text,
      ideas: random > .4 ? Math.ceil(random * 100) : null,
      unread: random > .5,
      type: random > .5 ? 'left-right' : 'right-left'
    }

    return newCard;
  }

  function handleAddCard(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const newCards = [...cards, getRandomCard(text)]

    setCards(newCards)
    localStorage.setItem('cards', JSON.stringify(newCards))
    setText('')
  }

  return (
    <form action="" className="form">
      <textarea 
        className="form__textarea" 
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}  
      />
      <button 
        type="submit" 
        className="form__button"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddCard(e)}
        disabled={!text.length}
      >Добавить</button>
    </form>
  )
}

export default Form;