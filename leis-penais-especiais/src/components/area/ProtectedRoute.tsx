import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { isAutenticado } from '../../lib/auth'

/** Redireciona para /area se não houver acesso válido salvo. */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  if (!isAutenticado()) {
    return <Navigate to="/area" replace />
  }
  return <>{children}</>
}
