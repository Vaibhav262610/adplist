'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) setError(error.message)
  }

  const handleLinkedInLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin',
    })
    if (error) setError(error.message)
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const { error } = await supabase.auth.signInWithOtp({ email }) // magic link login
    setLoading(false)

    if (error) setError(error.message)
    else alert('Check your email for the login link! 📩')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-12 space-y-6">
        <h2 className="text-4xl font-bold text-center">Welcome to Connex</h2>
        <p className="text-gray-500 text-center text-sm">
          Get access to our expert community of mentors in Design, Product, AI, Tech, and more worldwide.
        </p>

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center cursor-pointer justify-center gap-2 bg-white border border-gray-300 rounded-sm py-4 font-semibold hover:bg-gray-50"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

       <button
  onClick={async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    if (error) alert(error.message)
  }}
  className="w-full flex items-center justify-center gap-2 bg-black/40 transition-all cursor-pointer text-white rounded-sm py-4 font-semibold hover:bg-gray-800"
>
  <img
    src="https://www.svgrepo.com/show/475654/github-color.svg"
    alt="GitHub"
    className="w-5 h-5"
  />
  Continue with GitHub
</button>


        {/* Divider */}
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-xs">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Email Login */}
        <form onSubmit={handleEmailLogin} className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Email address</label>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 rounded-sm font-semibold hover:bg-gray-900 transition"
          >
            {loading ? 'Sending link...' : 'Continue with email'}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to the{' '}
          <a href="/terms" className="underline">Terms of Use</a>,{' '}
          <a href="/privacy" className="underline">Privacy Policy</a>, and{' '}
          <a href="/community" className="underline">Community Standards</a>.
        </p>
      </div>
    </div>
  )
}
