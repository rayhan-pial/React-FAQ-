import React, { useState } from 'react'

import { faqsData } from './datas'

import FAQ from './FAQ/'


export default function FAQS() {
    const [faqs, setFaqs] = useState(faqsData);
  return (
    <main>
        <section>
            <h1>FAQs</h1>
            {faqs.map((faq)=>(
                <FAQ key={faq.id} {...faq} />
            ))}
        </section>
    </main>
  )
}
