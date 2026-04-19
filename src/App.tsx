import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { ComparePage } from './pages/ComparePage'
import { HomePage } from './pages/HomePage'
import { LeadFormPage } from './pages/LeadFormPage'
import { PackagesPage } from './pages/PackagesPage'
import { WorkPage } from './pages/WorkPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/contact/:kind" element={<LeadFormPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
