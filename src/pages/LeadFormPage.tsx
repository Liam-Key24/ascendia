import { motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { GhostButton } from '../components/Button'
import { CustomLeadForm } from '../components/lead-forms/CustomLeadForm'
import { formAccentBarCls, formAccentBleedLeadCls } from '../components/lead-forms/fieldStyles'
import { LaunchSuiteForm } from '../components/lead-forms/LaunchSuiteForm'
import { PageBackLink } from '../components/PageBackLink'
import { springSoft } from '../motion'

const kinds = ['launch', 'suite', 'custom'] as const
type Kind = (typeof kinds)[number]

function isKind(s: string | undefined): s is Kind {
  return s !== undefined && (kinds as readonly string[]).includes(s)
}

export function LeadFormPage() {
  const { kind } = useParams<{ kind: string }>()
  const reduceMotion = useReducedMotion()
  const [sent, setSent] = useState(false)

  if (!isKind(kind)) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-[60vh] border-t border-champagne-200/70 bg-gradient-to-b from-white to-champagne-50/60 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <PageBackLink variant="light" />
        <motion.div
          className="relative mt-8 overflow-hidden rounded-3xl border border-champagne-200/90 bg-white/95 p-6 shadow-card ring-1 ring-champagne-100/70 md:p-10"
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springSoft}
        >
          {!sent ? (
            <div className={`${formAccentBleedLeadCls} overflow-hidden rounded-t-3xl`} aria-hidden>
              <div className={formAccentBarCls} />
            </div>
          ) : null}
          {sent ? (
            <motion.div
              className="py-4 text-center md:py-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springSoft}
            >
              <p className="font-sans text-sm text-ink-muted md:text-base">
                Thanks — we&apos;ve got your details. We&apos;ll be in touch shortly to book a call or next steps.
              </p>
              <GhostButton type="button" className="mt-6" onClick={() => setSent(false)}>
                Edit or send another
              </GhostButton>
            </motion.div>
          ) : kind === 'custom' ? (
            <CustomLeadForm onSuccess={() => setSent(true)} />
          ) : (
            <LaunchSuiteForm tier={kind} onSuccess={() => setSent(true)} />
          )}
        </motion.div>
      </div>
    </div>
  )
}
