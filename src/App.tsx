import React, { useEffect } from 'react'
import { Table } from './components/table'
import { getData } from 'src/store/reducer'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  return (
    <div className="App">
      <Table />
    </div>
  )
}

export default App
