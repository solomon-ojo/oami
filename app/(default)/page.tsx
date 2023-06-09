export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero-home'

import Tabs from '@/components/tabs'
import Creatives from '@/components/creatives'
import Outreaches from '@/components/outreaches'
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
