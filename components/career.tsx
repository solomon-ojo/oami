import Image from 'next/image'
import TeamImage01 from '@/public/images/about-02.png'
import TeamImage02 from '@/public/images/about-04.png'
import TeamImage03 from '@/public/images/about-03.png'
import TeamImage04 from '@/public/images/about-05.png'

export default function Career() {  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Are you looking for a place to grow in Christ? Join us.</h2>
            <p className="text-xl text-gray-600">
              Being part of an active team of believers is God's desire for all his children, and a requirement for spiritual growth. If you are looking for an active and vibrant family of believers to grow and fellowship with, do not estitate to reach out to us.
            </p>
          </div>

          {/* Team images */}
          <div className="max-w-3xl mx-auto">
            <div className="pb-12 md:pb-20">
              <div className="relative w-full h-0 pb-3/4">
                <figure className="absolute h-auto" style={{ bottom: '9%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-right">
                  <Image className="shadow-2xl" src={TeamImage03} width={320} height={240} alt="Team mosaic 03" />
                </figure>
                <figure className="absolute" style={{ left: '14.8%', top: '11.8%', width: '70.3%', maxWidth: '540px' }} data-aos="fade-down" data-aos-delay="150">
                  <Image className="shadow-2xl" src={TeamImage01} width={540} height={360} alt="Team mosaic 01" />
                </figure>
                <figure className="absolute h-auto" style={{ bottom: '0', right: '6.2%', width: '41.7%', maxWidth: '320px' }} data-aos="fade-left" data-aos-delay="300">
                  <Image className="shadow-2xl" src={TeamImage02} width={320} height={240} alt="Team mosaic 02" />
                </figure>
                <figure className="absolute h-auto" style={{ top: '5.9%', right: '0', width: '23.4%', maxWidth: '180px' }} data-aos="zoom-y-out" data-aos-delay="450">
                  <Image className="shadow-2xl" src={TeamImage04} width={180} height={180} alt="Team mosaic 04" />
                </figure>
                
              </div>
            </div>
          </div>

          {/* Job list */}
         

        </div>
      </div>
    </section>
  )
}