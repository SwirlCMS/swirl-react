import { ChakraProvider } from '@chakra-ui/react'
import { SwirlCMS } from './lib'
import * as components from './swirlCMS'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <SwirlCMS components={components} slug="page1" />
      </div>
    </ChakraProvider>
  )
}

export default App
