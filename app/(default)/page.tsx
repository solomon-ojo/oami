export const metadata = {
  title: 'OAMI - The just by faith shall live',
  description: 'Olayinka Ademiluka Ministries International',
}

import Hero from '@/components/hero-home'

import Tabs from '@/components/tabs'
import Creatives from '@/components/creatives'

import Target from '@/components/targets'
import Outreach from '@/components/outreach'
import Cta from '@/components/cta'


export default function Home() {
  return (
    <>
      <Hero />
      <Target/>
      <Tabs/>
      <Creatives/>
      <Outreach/>
      <Cta />
    </>
  )
}
