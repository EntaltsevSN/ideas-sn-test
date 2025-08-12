import Button from "../components/Button";
import Card2 from "../components/Card2";
import Form from "../components/Form";
import Layout from "../components/Layout";
import type { ITestPartProps } from "../types";

function TestPart2({cards, setCards}: ITestPartProps) {
  return (
    <Layout>
      <Button to='/'>{'<'} На главную</Button>
      <h2>Тестовое задание. Часть 2</h2>
      <p>В этом задании надо сделать панель редактирования карточки, в которой можно выбирать тип карточки, менять ее контент и индикатор идей. Внесенные изменения можно сохранить или отменить, вернув первоначальные значения.</p>
      <p>Изменение индикатора идей работает следующим образом: если значение индикатора помечено не прочитанным или имеет символ "+", клик по ней увеличивает состояние на 1, но убирает "+". В ином случае, состояние остается прежним, но к нему добавляется "+"</p>
      <Form {...{cards, setCards}} />
      { cards.map((card) => <Card2 {...card} {...{cards, setCards}} />) }
    </Layout>
  )
}

export default TestPart2;