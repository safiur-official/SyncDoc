import { Routes, Route, Navigate } from 'react-router-dom'
import DocumentsPage from './pages/DocumentsPage'
import DocumentView from './pages/DocumentView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/documents" replace />} />
      <Route path="/documents" element={<DocumentsPage />} />
      <Route path="/documents/:id" element={<DocumentView />} />
    </Routes>
  )
}

export default App