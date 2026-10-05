import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import ProcessingSteps from '../components/ProcessingSteps.jsx'
import CTASection from '../components/CTASection.jsx'
import { ShieldCheck } from 'lucide-react'

export default function Quality() {
  return (
    <>
      <Seo
        title="Quality & Processing | Konkan Cashew Co., Kankavli"
        description="How our cashew is processed — from raw cashew selection through cleaning, shell removal, grading, quality checking, packaging and dispatch."
      />
      <Breadcrumb items={[{ label: 'Quality & Processing' }]} />

      <section className="section-pad pb-8">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Our Process</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Quality you can trust</h1>
          <p className="mt-4 text-husk-600">
            Every batch of cashew we supply moves through the same set of
            stages — from raw cashew to a graded, quality-checked and
            packed product ready for dispatch.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <ProcessingSteps />
        </div>
      </section>

      <section className="section-pad bg-husk-50">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-husk-100 bg-white p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-xl">Checked at every stage</h2>
            <p className="mt-2 text-husk-600">
              Cashew kernels are checked at multiple points in the process —
              not only at the end — so issues are caught early rather than
              after packaging.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-husk-200 bg-white p-7 text-husk-500">
            <h2 className="text-xl text-husk-900">Certifications</h2>
            <p className="mt-2 text-sm">
              [Add FSSAI number, certifications or lab test details here, if
              available. We do not display certification claims unless they
              can be verified.]
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know more about our products?"
        subtitle="Ask us anything about grading, packaging or a specific order."
        buttonLabel="Talk to Us on WhatsApp"
      />
    </>
  )
}
