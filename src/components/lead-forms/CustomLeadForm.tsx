import { useState } from 'react'
import type { FormEvent } from 'react'
import { PrimaryButton } from '../Button'
import {
  choiceGroupCls,
  choiceLabelCls,
  choiceRowCls,
  formRow2Cls,
  formStackCls,
  inputCls,
  labelCls,
  legendCls,
  textareaCls,
} from './fieldStyles'

export function CustomLeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [trackLeads, setTrackLeads] = useState<'yes' | 'no' | ''>('')
  const [biggestChallenge, setBiggestChallenge] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setFormError(null)
    if (!trackLeads) {
      setFormError('Please tell us if you track leads or customers.')
      return
    }
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    onSuccess()
    form.reset()
    setTrackLeads('')
    setBiggestChallenge('')
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]">
        Talk Custom
      </h1>
      <p className="mt-2 font-sans text-sm text-ink-muted md:text-base">
        High-end / fully tailored system — we qualify scope and complexity before we quote.
      </p>

      <form className={`${formStackCls} mt-8`} onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="formType" value="talk-custom" />

        <div className={formRow2Cls}>
          <div>
            <label htmlFor="cu-fullName" className={labelCls}>
              Full name
            </label>
            <input
              id="cu-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="cu-businessName" className={labelCls}>
              Business name
            </label>
            <input
              id="cu-businessName"
              name="businessName"
              type="text"
              autoComplete="organization"
              required
              className={inputCls}
            />
          </div>
        </div>

        <div className={formRow2Cls}>
          <div>
            <label htmlFor="cu-email" className={labelCls}>
              Email address
            </label>
            <input
              id="cu-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label htmlFor="cu-phone" className={labelCls}>
              Phone number <span className="font-normal text-ink-muted">(optional)</span>
            </label>
            <input id="cu-phone" name="phone" type="tel" autoComplete="tel" className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="cu-website" className={labelCls}>
            Website <span className="font-normal text-ink-muted">(if existing)</span>
          </label>
          <input id="cu-website" name="websiteExisting" type="url" className={inputCls} placeholder="https://" />
        </div>

        <div>
          <label htmlFor="cu-businessDo" className={labelCls}>
            What does your business do?
          </label>
          <textarea
            id="cu-businessDo"
            name="businessDo"
            required
            rows={3}
            className={textareaCls}
          />
        </div>

        <div className={formRow2Cls}>
          <div>
            <label htmlFor="cu-services" className={labelCls}>
              Describe your services or products
            </label>
            <textarea
              id="cu-services"
              name="servicesDescribe"
              required
              rows={3}
              className={textareaCls}
            />
          </div>

          <div>
            <label htmlFor="cu-target" className={labelCls}>
              Who is your target customer?
            </label>
            <textarea
              id="cu-target"
              name="targetCustomer"
              required
              rows={3}
              className={textareaCls}
            />
          </div>
        </div>

        <div>
          <label htmlFor="cu-challenge" className={labelCls}>
            What is your biggest challenge right now?
          </label>
          <select
            id="cu-challenge"
            name="biggestChallenge"
            required
            className={inputCls}
            value={biggestChallenge}
            onChange={(ev) => setBiggestChallenge(ev.target.value)}
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="low-leads">Low leads</option>
            <option value="messy-enquiries">Messy enquiries</option>
            <option value="no-system">No system</option>
            <option value="outdated-website">Outdated website</option>
            <option value="other">Other</option>
          </select>
        </div>

        {biggestChallenge === 'other' && (
          <div>
            <label htmlFor="cu-challengeOther" className={labelCls}>
              Describe the challenge
            </label>
            <input
              id="cu-challengeOther"
              name="biggestChallengeOther"
              type="text"
              required
              className={inputCls}
            />
          </div>
        )}

        <div>
          <label htmlFor="cu-notWorking" className={labelCls}>
            What is currently not working for you?
          </label>
          <textarea
            id="cu-notWorking"
            name="notWorking"
            required
            rows={3}
            className={textareaCls}
          />
        </div>

        <fieldset className={choiceGroupCls}>
          <legend className={legendCls}>Do you currently track leads or customers?</legend>
          <div className={`${choiceRowCls} font-sans text-sm text-ink`}>
            <label className={choiceLabelCls}>
              <input
                type="radio"
                name="trackLeads"
                value="yes"
                checked={trackLeads === 'yes'}
                onChange={() => setTrackLeads('yes')}
                className="size-4 accent-tangerine"
              />
              Yes
            </label>
            <label className={choiceLabelCls}>
              <input
                type="radio"
                name="trackLeads"
                value="no"
                checked={trackLeads === 'no'}
                onChange={() => setTrackLeads('no')}
                className="size-4 accent-tangerine"
              />
              No
            </label>
          </div>
        </fieldset>

        {trackLeads === 'yes' && (
          <div>
            <label htmlFor="cu-trackHow" className={labelCls}>
              How do you track them?
            </label>
            <textarea
              id="cu-trackHow"
              name="trackLeadsHow"
              required
              rows={2}
              className={textareaCls}
              placeholder="Spreadsheets, booking app, inbox…"
            />
          </div>
        )}

        <div>
          <label htmlFor="cu-bookings" className={labelCls}>
            Do you take bookings or enquiries online?
          </label>
          <textarea
            id="cu-bookings"
            name="bookingsOnline"
            required
            rows={2}
            className={textareaCls}
            placeholder="Yes / no / which channels"
          />
        </div>

        <div className={formRow2Cls}>
          <div>
            <label htmlFor="cu-monthly" className={labelCls}>
              Approx. monthly enquiries
            </label>
            <input id="cu-monthly" name="monthlyEnquiries" type="text" required className={inputCls} />
          </div>

          <div>
            <label htmlFor="cu-timeline" className={labelCls}>
              Timeline to start
            </label>
            <input id="cu-timeline" name="timeline" type="text" required className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="cu-success" className={labelCls}>
            What would success look like for you?
          </label>
          <textarea id="cu-success" name="successLook" required rows={3} className={textareaCls} />
        </div>

        <div>
          <label htmlFor="cu-budget" className={labelCls}>
            Budget range <span className="font-normal text-ink-muted">(optional but useful)</span>
          </label>
          <select id="cu-budget" name="budget" className={inputCls} defaultValue="">
            <option value="">Prefer not to say</option>
            <option value="500-1000">£500–£1k</option>
            <option value="1000-2000">£1k–£2k</option>
            <option value="2000-plus">£2k+</option>
          </select>
        </div>

        <div>
          <label htmlFor="cu-anythingElse" className={labelCls}>
            Anything else we should know?
          </label>
          <textarea id="cu-anythingElse" name="anythingElse" rows={3} className={textareaCls} />
        </div>

        {formError && (
          <p className="font-sans text-sm text-cherry" role="alert">
            {formError}
          </p>
        )}

        <div className="flex justify-end border-t border-champagne-200/60 pt-5">
          <PrimaryButton type="submit" className="w-full sm:w-auto">
            Send
          </PrimaryButton>
        </div>
      </form>
    </div>
  )
}
