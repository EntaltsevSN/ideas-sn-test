import Layout from "../components/Layout";
import Button from "../components/Button";

function Home() {
  const parts = [
    {id: 1, label: 'Тестовое. Часть 1', isActive: true},
    {id: 2, label: 'Тестовое. Часть 2', isActive: false},
    {id: 3, label: 'Тестовое. Часть 3', isActive: false},
  ]
    
  return (
    <Layout>
      <h2>Выберите часть тестового задания</h2>
      {
        parts.map((part) => 
          <Button 
            to={`test-part-${part.id}`} 
            disabled={part.isActive}
          >
            {part.label} {part.isActive ? '' : '(Скоро)'}
          </Button>
        )
      }
    </Layout>
  )
}

export default Home;