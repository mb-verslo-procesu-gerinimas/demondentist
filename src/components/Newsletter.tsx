'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      // If successful, redirect to the Thank You page we translated!
      // (Make sure the path matches your routing, e.g., '/thank-you')
      router.push('/thank-you')
      
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        placeholder="Jūsų el. pašto adresas"
        aria-label="El. pašto adresas"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 active:transition-none"
      >
        {status === 'loading' ? 'Siunčiama...' : 'Prenumeruoti naujienlaiškį'}
      </button>

      {status === 'error' && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400 sm:absolute sm:mt-12">
          Įvyko klaida. Bandykite dar kartą.
        </p>
      )}
    </form>
  )
}