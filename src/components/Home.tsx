'use client'

import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function Home() {
  const { session, loading } = useAuth()

  if (loading) return <p>Loading...</p>
  if (!session) redirect('/login')

  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/')
  }
  const profileImage = session.user.user_metadata?.avatar_url || null


  return (
    <div className="flex justify-center items-center h-screen  flex-col  w-full gap-4">
      <h1 className="text-2xl">Welcome {session.user.email}</h1>
      {profileImage && (
        <img
          src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/227490471/original/ef79ce48b4a9f50a350c2b09590b839034ec303f/make-a-minimalistic-style-avatar-pfp.jpg'
          alt="PFP"
          className="w-24 h-24 rounded-full border-2 border-gray-300"
        />
      )}
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
      >
        Logout
      </button>
    </div>
  )
}
