"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
        <div className="min-h relative">
          <div className="min-h-[60vh] bg-gradient-to-b from-blue-900 to-blue-700
           text-white flex justify-center items-center">
            <div className="text-center p-10">
              <h1 className="text-5xl font-bold mb-5">
                What Makes Us So Special?
              </h1>
              <p className="text-shadow-md max-w-2xl mb-6 justify-center">
                We are not only geeky with advanced skills, but we aim to work
                closely with practice, hospitals and try to bring a positive
                change to Healthcare industry and the wider world in which we
                live.
              </p>
            </div>
            <div
              className="absolute top-1/2 left-1/2  transform 
         -translate-x-1/2 w-[90%] max-w-4xl items-center"
            >
              <Card className="bg-white text-black p-6 rounded-lg mt-20 shadow-lg w-230 h-55 border-none">
                <CardContent className="flex justify-around mt-8 items-center">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/hippa.svg"
                      alt="HIPAA Compliant"
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-sm">HIPAA Compliant</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/Certfied-Expert-Team-02.svg"
                      alt="Certified Expert Teams"
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-sm">Certified Expert Teams</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/Help-and-Support-new.svg"
                      alt="24/7 Help & Support"
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-sm">24/7 Help & Support</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/Trusted-By-leaders-04.svg"
                      alt="Trusted By Leaders"
                      className="w-12 h-12 mb-2"
                    />
                    <p className="text-sm">Trusted By Leaders</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className=" "></div>
        </div>
      

      <section>
        <div className="  bg-gray-100  px-15 mt-10  flex justify-center items-center ">
          <div className="text-center p-30 ">
            <h1 className="text-2xl font-bold  text-left text-gray-800">
              RCM Centric delivers a seasoned team of Practice Management
              experts.
            </h1>
             <hr className="w-16 h-1 mt-3 bg-pink-600 mb-6" />
            <ul className="text-left text-gray-700 space-y-4 max-w-2xl">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Audit and analyze your practice positioning from a strategic
                perspective.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✔</span>
                Acquire a deep knowledge of your billing and coding objectives,
                as well as your needs.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Implement processes to create successful claims that get maximum
                reimbursement.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✔</span>
                Regularly updates within healthcare changes to keep your
                practice billing up-to-date.
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✔</span>
                Recommend additional initiatives to further benefit your
                practice revenue.
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✔</span>
                Complete RCM top-notch solution to get you fast claim
                reimbursement.
              </li>
            </ul>
          </div>
          <div className="w-34 md:w-1/2 bg-white rounded-[40px] p-5 relative flex items-center justify-end">
            <div className="relative w-160 h-96">
              <Image
                src="/Revenue-new.gif"
                alt="Growth Report"
                width={550}
                height={400}
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-white mb-10  flex justify-center items-center">
        <div className="bg-blue-800 p-5 rounded-lg shadow-lg text-center max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-4">
            Looking to level-up your Revenue and ROI?
          </h2>
          <p className="text-lg mb-6">Let’s discuss your next move.</p>
          <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-pink-600 transition">
            Let’s Talk →
          </button>
        </div>
      </section>

          <section className="min-h-screen bg-gray-50 py-26 mb-8 px-43 items-center">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-red-500 uppercase p-10">Innovate. Then do it again.</h2>
        <h1 className="text-4xl font-semibold mt-2">
          Let your imagination soar and explore uncharted territories with fresh ideas and innovative thinking.
        </h1>
          <hr className="w-50 mx-auto border-t-2 mt-4 border-red-500" />
        <p className="text-gray-600 mt-4">
          Whether you're seeking assistance in rapid practice expansion, handling seasonal fluctuations, or optimizing the patient journey with cutting-edge solutions, RCM Centric, is equipped to provide top-notch support.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 max-w-6xl mx-auto">
        <Card className="shadow-lg border-none">
          <CardHeader>
            <Image src="/placeholder-billing.jpg" alt="Billing Expert" width={100} height={100} className="rounded-full mx-auto" />
            <CardTitle>Expertise in Healthcare Medical Billing & Coding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Our company specializes in medical billing services, with a team of experienced professionals who possess in-depth knowledge of the intricacies of the healthcare industry. We stay up-to-date with the latest industry regulations and coding practices, ensuring accurate and timely submission of claims, maximizing reimbursements, and minimizing claim denials.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-none">
          <CardHeader>
            <Image src="/placeholder-technology.jpg" alt="Technology Solution" width={100} height={100} className="rounded-full mx-auto" />
            <CardTitle>Advanced Technology Solutions for Better Revenue Collection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              We leverage state-of-the-art technology to streamline the billing process and enhance efficiency. Our advanced software systems automate various tasks, such as claim generation, payment posting, and denial management, reducing manual errors and saving time. Additionally, our secure online portal allows easy access to financial reports, billing data, and real-time updates, providing transparency and convenience.
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-lg border-none">
          <CardHeader>
            <Image src="/placeholder-customer.jpg" alt="Customer Experience" width={100} height={100} className="rounded-full mx-auto" />
            <CardTitle>Exceptional Customer Experience & Patient Help Desk Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              At RCM Centric, we prioritize delivering exceptional customer experiences. Our dedicated team is committed to providing prompt and friendly customer support, addressing any concerns or questions you may have. We strive to maintain open lines of communication, ensuring that you are always informed about the status of your billing and receivables. Our aim is to get maximum reimbursement for our clients.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  );
}
