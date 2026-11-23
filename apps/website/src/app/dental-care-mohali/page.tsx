import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veterinary Dental Care in Mohali | GreenCoatVets',
  description: 'Comprehensive pet dental care in Mohali. We offer dental examination, professional teeth cleaning, extractions, root canal treatments, dental radiography, and advanced oral surgery including fracture and tumour treatments.',
  alternates: {
    canonical: 'https://www.greencoatvets.com/dental-care-mohali',
  },
  openGraph: {
    title: 'Veterinary Dental Care in Mohali | GreenCoatVets',
    description: 'Comprehensive pet dental care in Mohali. We offer dental examination, professional teeth cleaning, extractions, root canal treatments, dental radiography, and advanced oral surgery including fracture and tumour treatments.',
    url: 'https://www.greencoatvets.com/dental-care-mohali',
    siteName: 'GreenCoatVets',
    type: 'website',
    images: [
      {
        url: 'https://www.greencoatvets.com/rabbit-scaling.jpeg',
        width: 800,
        height: 600,
        alt: 'Dental cleaning of a rabbit at GreenCoatVets',
      },
    ],
  },
  keywords: ['pet dental care', 'veterinary dentist', 'Mohali', 'dental surgery', 'root canal', 'dental radiography'],
}

export default function DentalCarePage() {
  return (
    <main className="flex-auto">
      {/* Hero section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Comprehensive Veterinary Dental Care in Mohali
          </h1>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            GreenCoatVets provides complete oral health services for your pets. From routine dental check-ups and cleaning to advanced procedures like root canal therapy and jaw fracture repair, our experienced team ensures your pet&apos;s smile stays healthy.
          </p>
          <Link href="/contact-us">
            <a className="inline-block mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
              Book a Dental Appointment
            </a>
          </Link>
        </div>
      </section>

      {/* Introduction and Services */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Dental Services</h2>
          <p className="text-gray-700 mb-6">
            Dental health is critical to your pet&apos;s overall well-being. At GreenCoatVets, we emphasize preventive care and advanced diagnostics:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Comprehensive dental examination and oral evaluation</li>
            <li>Professional dental scaling and polishing (cleaning)</li>
            <li>Extractions and repair of broken or worn teeth</li>
            <li>Digital dental X-rays for accurate diagnosis of hidden issues</li>
            <li>Periodontal surgery (e.g., gingivectomy and, if needed, gingivoplasty)</li>
            <li>Root canal therapy for salvageable teeth</li>
            <li>Oral and maxillofacial surgery, including repair of facial fractures</li>
            <li>Mandibular and maxillary fracture repair</li>
            <li>Excision of oral masses and jaw tumour removal</li>
          </ul>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dental Procedure Videos</h2>
          <p className="text-gray-700 mb-8">
            Watch our experts perform key dental procedures on pets:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <video className="w-full h-auto rounded-lg border" controls>
                <source src="/root-canal.mp4" type="video/mp4" />
                Your browser does not support the video tag. <a href="/root-canal.mp4">Download the video here.</a>
              </video>
              <p className="mt-2 text-center text-gray-600">Root canal treatment on a pet</p>
            </div>
            <div className="flex flex-col items-center">
              <video className="w-full h-auto rounded-lg border" controls>
                <source src="/dental-xray.mp4" type="video/mp4" />
                Your browser does not support the video tag. <a href="/dental-xray.mp4">Download the video here.</a>
              </video>
              <p className="mt-2 text-center text-gray-600">Using digital dental X-ray for diagnosis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dental Care for Exotic Pets</h2>
          <div className="w-full md:w-2/3">
            <img src="/rabbit-scaling.jpeg" alt="Rabbit receiving dental scaling" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <p className="mt-4 text-gray-700 text-center">
            Many exotic pets, like rabbits and guinea pigs, also need dental care. Our gentle approach and specialized tools allow us to safely clean and treat small animal teeth, ensuring their comfort and health.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ready to help your pet smile?</h2>
          <p className="text-gray-700 mb-6">Contact GreenCoatVets today for dental check-up and treatment.</p>
          <Link href="/contact-us">
            <a className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
              Schedule an Appointment
            </a>
          </Link>
        </div>
      </section>
    </main>
  )
}
