import { useLayoutEffect, useRef, useState, type ChangeEvent, type JSX } from "react"
import type { ICardProps } from "../types";

function Card1({ image = null, text = '', ideas = '0', type = 'left-right' }: ICardProps): JSX.Element {
  const [cardText, setCardText] = useState<string>(text)
  const [cardIdeas, setCardIdeas] = useState<string>(ideas) 
  const ideasRef = useRef<HTMLDivElement>(null);
  const pushRef = useRef<HTMLDivElement>(null); 
  
  useLayoutEffect(() => {
    if (ideasRef.current && pushRef.current) {
      const width = ideasRef.current.offsetWidth;
      pushRef.current.style.width = `${width}px`;
    }
  }, [cardIdeas]);

  function optionsClick() {
    alert('Скоро у меня появятся функции')
  }

  return (
    <>
      <div className={['card', `card--${type}`].join(' ')}>
        <div className="card__body">
          <div className="card__options" onClick={() => optionsClick()}>•••</div>
          {ideas && <div 
            className={
              [
                'card__ideas',  
                cardIdeas.includes('+') ? 'card__ideas--unread' : ''
              ].join(' ')
            }
            ref={ideasRef}
          >{cardIdeas}</div>}
          {
            image && <figure className="card__image">
              <img src={image} />
            </figure>
          }
          <div className="card__content">
            {cardText}
            {ideas && <i className="card__push" aria-hidden="true" ref={pushRef}></i>}
          </div>
        </div>
      </div>
      <form action="">
        <section>
          <textarea
            value={cardText}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCardText(e.target.value)}
          />
        </section>
        <section>
          <input
            type="number" 
            value={String(cardIdeas)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCardIdeas(e.target.value)}
          />
        </section>
      </form>
    </>
  )
}

export default Card1;