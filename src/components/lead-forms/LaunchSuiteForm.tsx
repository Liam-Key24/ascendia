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

export type LaunchSuiteTier = 'launch' | 'suite'

const tierCopy: Record<
  LaunchSuiteTier,
  { title: string; subtitle: string; goalLine: string }
> = {
  launch: {
    title: 'Talk Launch',
    subtitle: 'Standard / Done-for-you website + booking management setup',
    goalLine: 'Fast, low friction — we’ll get you booked.',
  },
  suite: {
    title: 'Talk Suite',
    subtitle: 'Full stack site + booking hub — priority care',
    goalLine: 'Fast, low friction — we’ll get you booked.',
  },
}

export function LaunchSuiteForm({
  tier,
  onSuccess,
}: {
  tier: LaunchSuiteTier
  onSuccess: () => void
}) {
  const copy = tierCopy[tier]
  const [hasWebsite, setHasWebsite] = useState<'yes' | 'no' | ''>('')
  const [mainGoal, setMainGoal] = useState('')
  const [formError, setFormError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setFormError(null)
    if (!hasWebsite) {
      setFormError('Please tell us if you currently have a website.')
      return
    }
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    onSuccess()
    form.reset()
    setHasWebsite('')
    setMainGoal('')
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2.25rem]">
        {copy.title}
      </h1>
      <p className="mt-2 font-sans text-sm text-ink-muted md:text-base">{copy.subtitle}</p>
      <p className="mt-1 font-sans text-sm text-tangerine">{copy.goalLine}</p>

      <form className={`${formStackCls} mt-8`} onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="formType" value={`talk-${tier}`} />

        <div className={formRow2Cls}>
          <div>
            <label htmlFor={`ls-fullName-${tier}`} className={labelCls}>
              Full name
            </label>
            <input
              id={`ls-fullName-${tier}`}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputCls}
              placeholder="Jane Smith"
            />
          </div>

          <div>
            <label htmlFor={`ls-businessName-${tier}`} className={labelCls}>
              Business name
            </label>
            <input
              id={`ls-businessName-${tier}`}
              name="businessName"
              type="text"
              autoComplete="organization"
              required
              className={inputCls}
              placeholder="Your trading name"
            />
          </div>
        </div>

        <div className={formRow2Cls}>
          <div>
            <label htmlFor={`ls-email-${tier}`} className={labelCls}>
              Email address
            </label>
            <input
              id={`ls-email-${tier}`}
              name="email"
              type="email"
              autoComplete="email"
              required
              className={inputCls}
              placeholder="you@business.com"
            />
          </div>

          <div>
            <label htmlFor={`ls-phone-${tier}`} className={labelCls}>
              Phone number <span className="font-normal text-ink-muted">(optional)</span>
            </label>
            <input
              id={`ls-phone-${tier}`}
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputCls}
              placeholder="If you prefer a quick call back"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`ls-businessDo-${tier}`} className={labelCls}>
            What does your business do?
          </label>
          <textarea
            id={`ls-businessDo-${tier}`}
            name="businessDo"
            required
            rows={3}
            className={textareaCls}
            placeholder="One or two sentences is enough"
          />
        </div>

        <fieldset className={choiceGroupCls}>
          <legend className={legendCls}>Do you currently have a website?</legend>
          <div className={`${choiceRowCls} font-sans text-sm text-ink`}>
            <label className={choiceLabelCls}>
              <input
                type="radio"
                name="hasWebsite"
                value="yes"
                checked={hasWebsite === 'yes'}
                onChange={() => setHasWebsite('yes')}
                className="size-4 accent-tangerine"
              />
              Yes
            </label>
            <label className={choiceLabelCls}>
              <input
                type="radio"
                name="hasWebsite"
                value="no"
                checked={hasWebsite === 'no'}
                onChange={() => setHasWebsite('no')}
                className="size-4 accent-tangerine"
              />
              No
            </label>
          </div>
        </fieldset>

        {hasWebsite === 'yes' && (
          <div>
            <label htmlFor={`ls-websiteUrl-${tier}`} className={labelCls}>
              Website link
            </label>
            <input
              id={`ls-websiteUrl-${tier}`}
              name="websiteUrl"
              type="url"
              required
              className={inputCls}
              placeholder="https://"
            />
          </div>
        )}

        <div className={formRow2Cls}>
          <div>
            <label htmlFor={`ls-helpWith-${tier}`} className={labelCls}>
              What do you need help with?
            </label>
            <select
              id={`ls-helpWith-${tier}`}
              name="helpWith"
              required
              className={inputCls}
              defaultValue=""
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="new">New website</option>
              <option value="improve">Improve existing</option>
              <option value="not-sure">Not sure</option>
            </select>
          </div>

          <div>
            <label htmlFor={`ls-mainGoal-${tier}`} className={labelCls}>
              Main goal
            </label>
            <select
              id={`ls-mainGoal-${tier}`}
              name="mainGoal"
              required
              className={inputCls}
              value={mainGoal}
              onChange={(ev) => setMainGoal(ev.target.value)}
            >
              <option value="" disabled>
                Choose one
              </option>
              <option value="enquiries">Get more enquiries</option>
              <option value="bookings">Bookings</option>
              <option value="online-presence">Online presence</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {mainGoal === 'other' && (
          <div>
            <label htmlFor={`ls-mainGoalOther-${tier}`} className={labelCls}>
              Describe your goal
            </label>
            <input
              id={`ls-mainGoalOther-${tier}`}
              name="mainGoalOther"
              type="text"
              required
              className={inputCls}
              placeholder="A few words"
            />
          </div>
        )}

        <fieldset className={choiceGroupCls}>
          <legend className={legendCls}>Do you currently get online leads?</legend>
          <div className={`${choiceRowCls} font-sans text-sm text-ink`}>
            <label className={choiceLabelCls}>
              <input type="radio" name="onlineLeads" value="yes" required className="size-4 accent-tangerine" />
              Yes
            </label>
            <label className={choiceLabelCls}>
              <input type="radio" name="onlineLeads" value="no" className="size-4 accent-tangerine" />
              No
            </label>
          </div>
        </fieldset>

        <div>
          <label htmlFor={`ls-startWhen-${tier}`} className={labelCls}>
            When would you like to start?
          </label>
          <input
            id={`ls-startWhen-${tier}`}
            name="startWhen"
            type="text"
            required
            className={inputCls}
            placeholder="e.g. ASAP, next month…"
          />
        </div>

        <div>
          <label htmlFor={`ls-anythingElse-${tier}`} className={labelCls}>
            Anything else we should know?
          </label>
          <textarea
            id={`ls-anythingElse-${tier}`}
            name="anythingElse"
            rows={3}
            className={textareaCls}
            placeholder="Optional"
          />
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
