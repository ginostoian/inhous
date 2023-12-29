"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "What do I get exactly?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        When you purchase, you will get a digitally downloadable eBook (later
        you will also receive the same information in your account) that will
        include the bathroom designs, shopping lists, and all the guides and
        articles mentioned above.{" "}
      </div>
    ),
  },
  {
    question: "Can I share the Blueprint?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        The Design Blueprint is meant for use only by the person who has
        purchased it. If you&apos;d like to help a friend or a familly member
        get it too, reach out via email and we will arrange an additional 50%
        discount on our price.
      </div>
    ),
  },
  {
    question: "How is this different than an interior designer?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Good question. In reality, 90% of people will want the same kind of
          look in their bathroom. This is the reason we have created ready made
          designs that will match those requirements, for all budgets.
        </p>
        <p>
          This significantly reduces the time spent on the design of your
          project, while still allowing you to customise it by switching items
          out between designs or going for something specific.
        </p>
        <p>
          Working this way, you get the same professional designs - or even
          better, but for a much lower price and tons of knowledge articles and
          guides to help you with your project.
        </p>
      </div>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <p>
        Yes! If you&apos;re not happy with the Blueprint you can request a
        refund within 7 days of your purchase. Reach out to us by email. The
        only thing we ask of you is to let us know why you&apos;re unhappy.
      </p>
    ),
  },
  {
    question: "I have another question",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Cool, shoot us an email and we&apos;ll get back to you ASAP.
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section
      className="bg-base-200"
      id="faq"
    >
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item
              key={i}
              item={item}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
