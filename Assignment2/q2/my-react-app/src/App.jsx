
import ErrorBoundary from './components/ErrorBoundary'
import ChildComponent from './components/ChildComponent'

function App() {
  return (
    <div>
      <h1>Error Boundary Demo</h1>
      <ErrorBoundary>
        <ChildComponent />
      </ErrorBoundary>
    </div>
  )
}

export default App
