
import { useState } from 'react'

function ChildComponent() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    throw new Error('Error triggered by button click!')
  }

  return (
    <div>
      <h2>Child Component</h2>
      <p>Click the button below to simulate an error.</p>
      <button onClick={() => setHasError(true)}>
        Throw Error
      </button>
    </div>
  )
}

export default ChildComponent
