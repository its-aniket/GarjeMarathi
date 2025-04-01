import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'


const TermsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className=" mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
          
          <div className="prose prose-lg ">
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">ACCEPTANCE OF TERMS</h2>
              <p>Thank you for visiting and using this site. These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of Garje Marathi Global portal and any related mobile or software applications including but not limited to delivery of information via the website whether existing now or in the future that link to the Terms (collectively, the "Services").</p>
              
              <p>These Terms are effective for all existing and future users accounts including but without limitation to users who have joined the platform as a part of formal business between an Garje Marathi Global (hereafter referred as GMG) and AlmaShines.</p>
              
              <p>Please carefully read these Terms. By accessing or using the Site, you are agreeing to these Terms and concluding. You may not use the Services if you do not accept the Terms or unable to be bound by the Terms. Your use of the Site is at your own risk, including the risk that you might be exposed to content that is objectionable, or otherwise inappropriate.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">DEFINITIONS</h2>
              <p>User
"User" or "You" or "Your" refers to you, as a user of the Services. A user is someone who accesses or uses the Services for the purpose of sharing, displaying, hosting, publishing, transacting, or uploading information or views or pictures and includes other persons jointly participating in using the Services including without limitation a user having access to ‘institute community’ created with or without consent of the institute.
Content
"Content" will include (but is not limited to) images, photos, audio, video, events, location data, nearby places, and all other forms of information or data. "Your content" or "User Content" means content that you upload, share or transmit to, through or in connection with the Services, such as likes, , images, photos, messages, profile information, and any other materials that you publicly display or displayed in your account profile. "Third Party Content" means content that comes from parties other than GMG or its users and is available on the Services.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">ACCEPTANCE OF TERMS</h2>
              <p>Thank you for visiting and using this site. These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of Garje Marathi Global portal and any related mobile or software applications including but not limited to delivery of information via the website whether existing now or in the future that link to the Terms (collectively, the "Services").</p>
              
              <p>These Terms are effective for all existing and future users accounts including but without limitation to users who have joined the platform as a part of formal business between an Garje Marathi Global (hereafter referred as GMG) and AlmaShines.</p>
              
              <p>Please carefully read these Terms. By accessing or using the Site, you are agreeing to these Terms and concluding. You may not use the Services if you do not accept the Terms or unable to be bound by the Terms. Your use of the Site is at your own risk, including the risk that you might be exposed to content that is objectionable, or otherwise inappropriate.</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">ACCEPTANCE OF TERMS</h2>
              <p>Thank you for visiting and using this site. These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of Garje Marathi Global portal and any related mobile or software applications including but not limited to delivery of information via the website whether existing now or in the future that link to the Terms (collectively, the "Services").</p>
              
              <p>These Terms are effective for all existing and future users accounts including but without limitation to users who have joined the platform as a part of formal business between an Garje Marathi Global (hereafter referred as GMG) and AlmaShines.</p>
              
              <p>Please carefully read these Terms. By accessing or using the Site, you are agreeing to these Terms and concluding. You may not use the Services if you do not accept the Terms or unable to be bound by the Terms. Your use of the Site is at your own risk, including the risk that you might be exposed to content that is objectionable, or otherwise inappropriate.</p>
            </section>

            
            
            <section className="mt-8">
              <p className="text-sm text-gray-600 italic">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TermsPage