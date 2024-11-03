import React from "react";

import { MdOutlineCleaningServices } from "react-icons/md";

export default function Faq() {
  const faq = [
    {
      question:
        "What should the customer know about your pricing (e.g., discounts, fees)?",
      answer:
        "We price by looking at the home online that we are asked to clean and estimate how long the work will take to complete perfectly. Our prices are always competitive with our competition and fair to the homeowner.",
    },
    {
      question:
        "What education and/or training do you have that relates to your work?",
      answer:
        "We have been self taught for over 2 decades however we do go to school to learn correct methods for soft washing and roof cleaning and read all literature on new methods for cleaning and keep up with the latest info on providing perfect customer service.",
    },
    {
      question: "How did you get started doing this type of work?",
      answer:
        "Back in 1994 I left my employment and was thinking what I wanted to do in the future and a friend who knew I cleaned gutters for a few friends asked me to bid on gutter and window cleaning on the 76 homes at the Woods of Westlake. 23 years later and I still clean for them twice a year.That was the start of my business.",
    },
    {
      question: "What types of customers have you worked with?",
      answer: "We only clean residental homes so homeowners.",
    },
    {
      question:
        "Describe a recent project you are fond of. How long did it take?",
      answer:
        "We started cleaning roof algae two years ago and it is a fun learning experience perfecting the process. We went to school in New Jersey to learn the best methods.",
    },
    {
      question:
        "What advice would you give a customer looking to hire a provider in your area of work?",
      answer:
        "Look for a company that has actual trained employees rather than sub contractors. My competition spends extreme amounts of money for advertising and their pricing reflects that. We do as good a job and usually better but we don't have the advertising budget.",
    },
  ];
  return (
    <section className="bg-blue-100 py-10" id="faq">
      <div className="container">
        <div className="w-full lg:w-2/3 mx-auto text-center mb-8">
          <div className="flex items-center gap-1 w-fit mx-auto">
            <MdOutlineCleaningServices size={20} className="text-blue-600" />
            <h3 className="text-lg text-blue-600 second-font font-semibold uppercase">
              faq's
            </h3>
          </div>
          <h1 className="text-4xl font-bold leading-20 text-blue-900 second-font capitalize">
            Frequently asked questions
          </h1>
          <p className="mt-3 text-slate-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            commodi nam, ea quo ipsa laudantium ad amet voluptatem quae, aut
            similique dignissimos quisquam vel ex corrupti.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faq.map((item, index) => (
            <div key={index}>
              <h3 className="text-blue-900 text-xl font-semibold mb-2">
                {item.question}
              </h3>
              <p className="text-slate-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
