import './App.css'
import Card from './components/Card'

function App() {

  const obj = {
    name: 'sawan',
    age: 22
  }

  let newArr = [1,2,3,4]

  return (
    <>
    <h1 className='bg-green-500 text-black p-4 rounded-3xl mb-4'>Tailwind Component!</h1>

    <Card username='sawan' age={21} position='software developer'/>
    <Card username='rdxcode' age={22} position='AI Developer'/>
    </>
  )
}

export default App
