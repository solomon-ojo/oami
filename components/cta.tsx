export default function Cta() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="bg-blue-600 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

            <div className="flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
                <h3 className="h3 text-white mb-2">Become A Partner</h3>
                <p className="text-white text-lg opacity-75">Your givings enable us to take the gospel to different nations. Become a partner today</p>
              </div>

              {/* CTA button */}
              <div>
                <a className="btn text-blue-600 bg-gradient-to-r from-blue-100 to-white" href="/oami-ways-to-give.pdf" locale={false} target='_blank'>Partner with us</a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}