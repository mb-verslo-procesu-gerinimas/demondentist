import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramEmbeds, type InstagramEmbedItem } from '@/components/InstagramEmbeds'
import { Newsletter } from '@/components/Newsletter'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/raminta_portrait.jpg'
import { Button } from '@/components/Button'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}


function Reels() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  const instagramItems: InstagramEmbedItem[] = [
    {
      url: 'https://www.instagram.com/reel/DWi6S2wiBjX/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
    {
      url: 'https://www.instagram.com/p/DUxnWL0CHZY/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
    {
      url: 'https://www.instagram.com/p/DQEP4EDjCX0/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
    {
      url: 'https://www.instagram.com/p/DPjxxWXDCiF/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
    {
      url: 'https://www.instagram.com/p/DNWG8Lnom3v/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
    {
      url: 'https://www.instagram.com/p/DNEK1tPokWO/',
      thumbnailAlt: 'Instagram reel thumbnail',
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex flex-nowrap gap-5 overflow-x-auto py-4 sm:gap-8">
        <InstagramEmbeds items={instagramItems} rotations={rotations} />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Apie',
  description:
    'Dantų gydytoja, turinti didžiulį susidomėjimą profilaktika ir visuomeniniu dantų sveikatos švietimu. Mane domina dantų sveikatos statistikos gerinimas Lietuvoje, ypač vaikų odontologijoje.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="flex flex-col h-full lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Demonė Dantistė
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Dantų gydytoja, turinti didžiulį susidomėjimą profilaktika ir visuomeniniu dantų sveikatos švietimu. Mane domina dantų sveikatos statistikos gerinimas Lietuvoje, ypač vaikų odontologijoje.
            </p>
          </div>
          
          {/* The mt-auto class pushes this div to the bottom of the flex container */}
          <div className="mt-10 pt-8">
            <Newsletter />
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
              </SocialLink> */}
            <SocialLink
              href="mailto:r.vaskelaite@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              r.vaskelaite@gmail.com
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/raminta-vaskelait%C4%97-713382b3" icon={LinkedInIcon} className="mt-4">
              Raminta Vaskelaitė
            </SocialLink>
            <SocialLink href="https://www.instagram.com/demone.dantiste" icon={InstagramIcon} className="mt-4">
              demone.dantiste
            </SocialLink>
          </ul>
        </div>
      </div>
      <Reels />
    </Container>
  )
}
