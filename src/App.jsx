import { useEffect } from 'react'
import { useState } from 'react'
import Window from './components/Window'

function App() {
  const rates = {
    "RUB": 62.50,
    "USD": 1,
    "EUR": 0.95,
    "BTC": 0.000060
  }

  const [fromCurType, setFromCurType] = useState('RUB')
  const [fromCurValue, setFromCurValue] = useState(0)

  const [toCurType, setToCurType] = useState('USD')
  const [toCurValue, setToCurValue] = useState(0)

  const onChangeFromValue = (value) => {
    setFromCurValue(value)
    const price = value / rates[fromCurType]
    const end = price * rates[toCurType]
    setToCurValue((end).toFixed(2))
  }

  const onChangeToValue = (value) => {
    setToCurValue(value)

    const result = (rates[fromCurType] / rates[toCurType]) * value
    setFromCurValue(result.toFixed(2))
  }

  useEffect(() => {
    onChangeFromValue(fromCurValue)
  }, [fromCurType, fromCurValue])

  useEffect(() => {
    onChangeFromValue(fromCurValue)
  }, [toCurType, toCurValue])

  return (
    <div className='bg-zinc-900 h-screen flex items-center justify-center box-border'>
      <div className='bg-white flex justify-between items-center rounded-lg p-3 w-[650px] h-[150px]'>
        <Window CurType={fromCurType} CurValue={fromCurValue} setCurType={setFromCurType} onChangeValue={onChangeFromValue} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <Window CurType={toCurType} CurValue={toCurValue} setCurType={setToCurType} onChangeValue={onChangeToValue} statusDisabled={true} />
      </div>
    </div>
  )
}

export default App
