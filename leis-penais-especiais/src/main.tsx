import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import { ProtectedRoute } from './components/area/ProtectedRoute.tsx'

// Telas da área carregadas sob demanda — mantêm o bundle da landing enxuto.
const Acesso = lazy(() => import('./pages/area/Acesso.tsx').then((m) => ({ default: m.Acesso })))
const Dashboard = lazy(() =>
  import('./pages/area/Dashboard.tsx').then((m) => ({ default: m.Dashboard })),
)
const Modulo = lazy(() => import('./pages/area/Modulo.tsx').then((m) => ({ default: m.Modulo })))

function Carregando() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-night text-muted">
      Carregando…
    </div>
  )
}

function comSuspense(node: React.ReactNode) {
  return <Suspense fallback={<Carregando />}>{node}</Suspense>
}

const router = createBrowserRouter([
  // Landing (já existente) — não quebrar.
  { path: '/', element: <App /> },

  // Área de membros (produto pago).
  { path: '/area', element: comSuspense(<Acesso />) },
  {
    path: '/area/dashboard',
    element: comSuspense(
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>,
    ),
  },
  {
    path: '/area/lei/:slug',
    element: comSuspense(
      <ProtectedRoute>
        <Modulo />
      </ProtectedRoute>,
    ),
  },

  // Qualquer outra rota cai na landing.
  { path: '*', element: <App /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
