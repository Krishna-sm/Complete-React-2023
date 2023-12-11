import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterProvider } from './context/Counter.jsx'
import { AuthProvider } from './context/Authentication.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <CounterProvider>
    <App />
  </CounterProvider>,
  </AuthProvider>
)
