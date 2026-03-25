import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Prenumerata sėkminga',
  description: 'Ačiū, kad užsiprenumeravote mano naujienlaiškį.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Ačiū, kad užsiprenumeravote."
      intro="Atsiųsiu jums el. laišką kaskart, kai paskelbsiu naują tinklaraščio įrašą, pristatysiu naują projektą ar turėsiu kuo įdomiu pasidalinti, kas, manau, jums patiktų. Prenumeratos galite atsisakyti bet kuriuo metu, jokių nuoskaudų."
    >
      <div className="mt-8">
        <Link 
          href="/about" 
          className="inline-flex items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300 transition-colors"
        >
          Grįžti į pradžią
        </Link>
      </div>
    </SimpleLayout>
  )
}