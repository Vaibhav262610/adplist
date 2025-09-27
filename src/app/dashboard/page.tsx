'use client'

import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function DashboardPage() {
  const { session, loading } = useAuth()

  if (loading) return <p>Loading...</p>
  if (!session) redirect('/login')

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/login')
  }

  return (
    <div className="pt-40">
      <h1 className="text-2xl">Welcome {session.user.email}</h1>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  )
}
