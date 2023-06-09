import Link from 'next/link'
import Image from 'next/image'
import CreativesImage from '@/public/images/creatives.png'
import Creative01 from '@/public/images/creative-01.png'
import Creative02 from '@/public/images/creative-02.png'
import Creative03 from '@/public/images/creative-03.png'
import Creative04 from '@/public/images/creative-04.png'
import CreativeBg01 from '@/public/images/creative-bg-01.jpg'
import CreativeBg02 from '@/public/images/creative-bg-02.jpg'
import CreativeBg03 from '@/public/images/creative-bg-03.jpg'
import CreativeBg04 from '@/public/images/creative-bg-04.jpg'

export default function Creatives() {
  return (
    <section className='bg-gray-100'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-cabinet-grotesk">Join any of our locations near you</h2>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center space-y-8 md:space-y-0">
            {/* Creatives cards */}
            <div className="md:w-1/2" data-aos-id-cards>
              <div className="flex space-x-6">
                {/* Column 1 */}
                <div className="w-1/2 space-y-6">
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos-anchor="[data-aos-id-cards]" data-aos="fade-down">
                    <Image className="w-full h-16 object-cover opacity-60" src={CreativeBg01} width={258} height={64} alt="Creative 01 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <Image className="inline-flex rounded-full" src={Creative01} width={64} height={64} alt="Creative 01" />
                       
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          AGBC GLASGOW
                        </a>
                        <div className="text-sm font-medium text-gray-500">@Dr Esther</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-right" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="200">
                    <Image className="w-full h-16 object-cover opacity-60" src={CreativeBg02} width={258} height={64} alt="Creative 02 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <Image className="inline-flex rounded-full" src={Creative02} width={64} height={64} alt="Creative 01" />
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          AGBC UTRECHT
                        </a>
                        <div className="text-sm font-medium text-gray-500">@Tomisin</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column 2 */}
                <div className="w-1/2 mt-6 space-y-6">
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-left" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="100">
                    <Image className="w-full h-16 object-cover opacity-60" src={CreativeBg03} width={258} height={64} alt="Creative 03 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <Image className="inline-flex rounded-full" src={Creative03} width={64} height={64} alt="Creative 01" />
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          AGBC BERLIN
                        </a>
                        <div className="text-sm font-medium text-gray-500">@Samuel</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Item */}
                  <div className="text-center shadow-sm" data-aos="fade-up" data-aos-anchor="[data-aos-id-cards]" data-aos-delay="300">
                    <Image className="w-full h-16 object-cover opacity-60" src={CreativeBg04} width={258} height={64} alt="Creative 04 bg" />
                    <div className="bg-white px-4 pb-6">
                      <div className="relative inline-flex -mt-8 mb-3">
                        <Image className="inline-flex rounded-full" src={Creative04} width={64} height={64} alt="Creative 01" />
                        
                      </div>
                      <div className="mb-5">
                        <a
                          className="inline-block font-cabinet-grotesk font-bold text-xl decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                          href="#0"
                        >
                          AGBC NIGERIA
                        </a>
                        <div className="text-sm font-medium text-gray-500">@Taiwo</div>
                      </div>
                      <div>
                        <a className="btn-sm text-white bg-gray-800 hover:bg-gray-900 shadow-sm" href="#0">
                          <svg className="mr-2" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-white opacity-70"
                              d="M11 5H7V1a1 1 0 0 0-2 0v4H1a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V7h4a1 1 0 0 0 0-2Z"
                            />
                          </svg>
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="md:w-1/2 md:pl-10 lg:pl-20">
              <div className="text-center md:text-left">
                <Image className="inline-block mb-12" src={CreativesImage} width={330} height={181} alt="Creatives" />
                <h3 className="h3 font-cabinet-grotesk text-4xl mb-4">Become a member of the family</h3>
                <p className="text-xl text-gray-500 mb-6">
                God did not create the believer to function in isolation. We are at our best when in a family. Join a body of like-minded people today
                </p>
                <div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 shadow-sm" href="/signup">
                    Join The Family
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}