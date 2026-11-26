/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { logo, loading } = useSystemConfig()

  return (
    <div className='dark relative isolate grid min-h-svh overflow-hidden bg-[#06111f] text-slate-100'>
      <div className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -top-48 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]' />
        <div className='absolute -bottom-64 -left-48 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[130px]' />
        <div className='absolute -right-48 top-1/3 h-[420px] w-[420px] rounded-full bg-teal-400/10 blur-[120px]' />
        <div className='absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40' />
      </div>

      <header className='absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-5 sm:px-10 sm:py-7'>
        <Link
          to='/'
          className='flex items-center gap-3 transition-opacity hover:opacity-80'
        >
          <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-cyan-300/20 bg-white/5 shadow-[0_0_28px_rgba(34,211,238,0.12)]'>
            {loading ? (
              <Skeleton className='absolute inset-0 rounded-xl' />
            ) : (
              <img
                src={logo}
                alt={t('Logo')}
                className='h-full w-full object-cover'
              />
            )}
          </div>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold tracking-tight text-white'>
              AquaViva <span className='text-cyan-300'>AI</span>
            </span>
            <span className='text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase'>
              Inteligência artificial
            </span>
          </div>
        </Link>

        <div className='hidden items-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-wider text-cyan-100/80 sm:flex'>
          <span className='h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]' />
          AI PLATFORM
        </div>
      </header>

      <main className='relative z-10 container flex items-center justify-center px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32'>
        <div className='mx-auto w-full max-w-[460px]'>
          <div className='relative overflow-hidden rounded-[28px] border border-white/[0.10] bg-[#0b1b2b]/90 p-6 shadow-[0_28px_100px_-35px_rgba(0,0,0,0.9)] backdrop-blur-2xl sm:p-9'>
            <div className='pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent' />
            <div className='pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-cyan-400/[0.07] blur-3xl' />
            <div className='relative'>
              {children}
            </div>
          </div>

          <p className='mt-6 text-center text-xs tracking-wide text-slate-500'>
            Sua inteligência artificial, em um só lugar.
          </p>
        </div>
      </main>
    </div>
  )
}
