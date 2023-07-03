import Image from 'next/image'
import AboutImage from '@/public/images/about-01.png'

export default function AboutIntro() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="md:h1 sm: mb-4">Upholding the purity of the gospel with integrity and power</h1>
            <p className="text-xl text-gray-600">
              We believe that the gospel must be taught in its purity. We believe that people must know that God's righteouness and salvation are eternal gifts paid for by Jesus' blood, and that we only need to receive these gifts by faith independent of our works.
            </p>
          </div>

          <figure className="flex justify-center items-start">
            <Image className="rounded shadow-2xl" src={AboutImage} width={768} height={432} priority alt="About us" />
          </figure>

        </div>
      </div>
    </section>
  )
}