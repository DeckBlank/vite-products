import { lazy, Suspense } from 'react';
import { Layout } from './ui/components/components';
import { Route, Routes } from 'react-router-dom';

function App() {

  const Home:any = lazy(() => import('./pages/Home/Home'));
  
  return (
    <Layout >
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Home />} path="/"  />
        <Route element={<Home />} path="/lista-libreria"  />
      </Routes>
      </Suspense>
    </Layout>

  )
}

export default App
