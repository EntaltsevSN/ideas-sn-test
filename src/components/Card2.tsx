import { useLayoutEffect, useRef, useState,  type JSX } from "react"
import type { ICardProps, ICardType, ITestPartProps } from "../types";
import CrossIcon from '../assets/cross.svg?react'
import StaticIcon from '../assets/static.svg?react'
import LeftRightIcon from '../assets/left-right.svg?react'
import TopDownIcon from '../assets/top-down.svg?react'
import DownTopIcon from '../assets/down-top.svg?react'
import SaveIcon from '../assets/save.svg?react'
import ResizableTextarea from "./ResizableTextarea";
import smallImageDefault from '../assets/small-image-default.png'
import bigImageDefault from '../assets/big-image-default.png'


const cardTypes: ICardType[] = [
  {id: 'static', icon: <StaticIcon />},
  {id: 'left-right', icon: <LeftRightIcon />},
  {id: 'top-down', icon: <TopDownIcon />},
  {id: 'down-top', icon: <DownTopIcon />}
]

function getCartTypeIcon(type: string) {
  return cardTypes.find((card) => card.id === type)!.icon
}

function Card2({ id = 0, image = null, text = '', ideas = '0', type = 'left-right', cards, setCards }: ICardProps & ITestPartProps): JSX.Element {
  const [isTyping, setIsTyping] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [cardText, setCardText] = useState<string>(text)
  const [cardIdeas, setCardIdeas] = useState<string>(ideas) 
  const [cardType, setCardType] = useState<string>(type)
  const ideasRef = useRef<HTMLDivElement>(null);
  const pushRef = useRef<HTMLDivElement>(null); 
  
  useLayoutEffect(() => {
    if (ideasRef.current && pushRef.current) {
      const width = ideasRef.current.offsetWidth;
      pushRef.current.style.width = `${width}px`;
    }
  }, [cardIdeas]);

  function handleChangeType(value: string) {
    setCardType(value)
    setIsTyping(false)
  }

  function getDefaultImage(type: string) {
    return type && type.includes('top')
      ? bigImageDefault
      : smallImageDefault
  }

  function denyChanges() {
    setCardType(type)
    setCardIdeas(ideas)
    setCardText(text)
    setIsEditing(false)
    setIsTyping(false)
  }

  function saveChanges() {
    const newCards: ICardProps[] = cards.map((card) => card.id === id
      ? {...card, type: cardType, text: cardText, ideas: cardIdeas}
      : card
    )

    setCards(newCards)
    localStorage.setItem('cards', JSON.stringify(newCards))
    setIsEditing(false)
    setIsTyping(false)
  }

  return (
    <div className={['card', `card--${cardType}`].join(' ')}>
      {isEditing && <div className="card__editor">
        <div 
          className="card__deny"
          onClick={() => denyChanges()}  
        >
          <CrossIcon />
        </div>
        <div className="card__settings">
          <div className="card__typing">
            <div 
              className="card__type"
              onClick={() => setIsTyping(prev => !prev)}  
            >{getCartTypeIcon(cardType)}</div>
            {isTyping && <div className="card__types">
              {cardTypes.map((cardType) => 
                <div 
                  className="card__types-element"
                  onClick={() => handleChangeType(cardType.id)}
                >
                  {cardType.icon}
                </div>
              )}
            </div>}
          </div>
          <div 
            className="card__save"
            onClick={() => saveChanges()}
          ><SaveIcon /></div>
        </div>
      </div>}
      <div className="card__body">
        <div className="card__options" onClick={() => setIsEditing(true)}>•••</div>
        {ideas && <div 
          className={[
            'card__ideas',
            cardIdeas.includes('+') ? 'card__ideas--unread' : ''
          ].join(' ')}
          {...isEditing ? {
            onClick: () => setCardIdeas((prev) => {
              console.log('click')
              return prev.includes('+') ? `${(+prev + 1)}` : `+${prev}`
            })
          } : {}}
          ref={ideasRef}
        >{cardIdeas}</div>}
        {cardType !== 'static' && <figure className="card__image">
          <img src={image ?? getDefaultImage(cardType)} />
        </figure>}
        <div className="card__content">
          {
            isEditing
              ? <ResizableTextarea 
                className='card__input'
                value={cardText}
                onChange={e => setCardText(e)}
              />
              : cardText
          }
          {Number(ideas) && <i className="card__push" aria-hidden="true" ref={pushRef}></i>}
        </div>
      </div>
    </div>
  )
}

export default Card2;