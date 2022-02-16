import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice"
import { useState } from "react"

export default function Counter() {
  const countValue = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button onClick={()=>dispatch(incrementByAmount(amount))}>Increment by Amount</button>
      </div>
    </div>
  )
}
