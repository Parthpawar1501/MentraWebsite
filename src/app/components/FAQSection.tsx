import { useState, useRef, useEffect, ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: ReactNode | string;
  answerLink?: string;
}

interface FAQCategory {
  id: string;
  name: string;
  faqs: FAQItem[];
}

function PlusIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M12 5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg className="block size-full" fill="none" viewBox="0 0 24 24">
      <path d="M5 12H19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function FAQAccordion({ question, answer, isOpen, onToggle }: { question: string; answer: ReactNode | string; isOpen: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(isOpen ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    
    if (isOpen) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
      
      // Reset to auto after animation
      const timer = setTimeout(() => {
        setHeight(undefined);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      // Set to current height first, then to 0 to trigger animation
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => {
        setHeight(0);
      });
    }
  }, [isOpen]);

  return (
    <div className="w-full border-b border-[#f1f2f9] last:border-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 md:py-6 cursor-pointer group transition-colors rounded-[16px] px-2 md:px-4 hover:bg-[#f5f5f5]"
        aria-label={isOpen ? "Collapse" : "Expand"}
        aria-expanded={isOpen}
      >
        <p className={`font-['Red_Hat_Display:SemiBold',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#0a0a0a] text-[20px] md:text-[24px] text-left flex-1 transition-colors ${
          isOpen ? 'text-[#00b869]' : 'group-hover:text-[#00b869]'
        }`}>
          {question}
        </p>
        <div className={`size-[20px] md:size-[24px] text-[#0a0a0a] transition-all duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#00b869]' : ''} group-hover:text-[#00b869]`}>
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <div
        ref={contentRef}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pb-6 px-2 md:px-4">
          {typeof answer === 'string' ? (
            <p className="font-['Manrope:Regular',sans-serif] leading-[150%] not-italic relative text-[#686069] text-[16px] md:text-[18px] whitespace-pre-line">
              {answer}
            </p>
          ) : (
            <div className="font-['Manrope:Regular',sans-serif] leading-[150%] not-italic relative text-[#686069] text-[16px] md:text-[18px]">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("product");
  const [openFAQ, setOpenFAQ] = useState<{ [key: string]: boolean }>({});

  const categories: FAQCategory[] = [
    {
      id: "product",
      name: "Product & Purchase",
      faqs: [
        {
          question: "How much does it cost?",
          answer: (
            <>
              Mentra Live costs $299, which includes glasses, charging case, and charging cable.
              <br /><br />
              Due to demand, we only permit 3 orders per customer at this time. Business bulk orders may be considered by{" "}
              <a href="https://mentraglass.com/contact" className="text-[#00b869] hover:underline font-medium" target="_blank" rel="noopener noreferrer">contacting us</a>.
            </>
          )
        },
        {
          question: "Which countries do you ship to?",
          answer: "We are currently only shipping within the United States, but more countries will gain access throughout 2026."
        },
        {
          question: "When will my order ship?",
          answer: "Batch 1 ships February 13th, 2026. Batch 2 will ship in March."
        },
        {
          question: "What is Founder's 1000 Club?",
          answer: "Batch 1 is sold out when we reach 1,000 purchases. Being a Batch 1 owner of Mentra Live automatically gets you access to the Founder's 1000 Club.\n\nAs a member, you get early access to upcoming Mentra MiniApps, experimental features, and private community drops. You'll also be able to influence the future of the Mentra ecosystem, joining a special private Discord group with the founders."
        },
        {
          question: "Can I use prescription lenses?",
          answer: "Yes. You can swap your Mentra Live lenses through any optician."
        },
        {
          question: "Is it waterproof?",
          answer: "You cannot swim with Mentra Lives, but they are fine for rain, sweat, and everyday use."
        }
      ]
    },
    {
      id: "features",
      name: "Features & Capabilities",
      faqs: [
        {
          question: "What can it do?",
          answer: "Mentra Live's app store allows your smart glasses experience to constantly evolve and change.\n\nMentra Live gives your AI eyes to see the world. Ask AI about what you're seeing, or interact with it in real time to enhance your experience.\n\nYou can also livestream your view to Twitch, X, YouTube, TikTok, OnlyFans, and other streaming platforms, and capture photos, listen to music, take calls, take notes, and much more."
        },
        {
          question: "What makes it unique?",
          answer: "Mentra Live is the only smart glasses with an app store, which means your experience can constantly evolve. With other glasses, your experience is locked into a close ecosystem. Your data and information is used to serve you ads and gain information about your life. (i.e., Meta!)\n\nWith Mentra Live, it's your data, your apps, your glasses. Lightweight, they're built for everyday wear to be a seamless part of your life."
        },
        {
          question: "Does it have a display?",
          answer: "No. That's on purpose – lighter, longer-lasting, and more comfortable. Displays add weight, drain the battery, and slow you down.\n\nMentra Lives are some of the lightest smart glasses on the market (not to mention amongst the most affordable). However, Mentra Display will be coming in Fall 2026."
        },
        {
          question: "What is a MiniApp?",
          answer: (
            <>
              MiniApps are the apps you can find in our Mentra app on iOS (Apple App Store) and Android (Google Play Store). When you use Even Realities, Vuzix, or Mentra Live, through the app, you can find numerous apps that enhance your experience.
              <br /><br />
              MiniApps like:
              <br />
              • <strong>Merge</strong> - proactive AI that answers your questions before you ask
              <br />
              • <strong>Live Captions</strong> - real-time subtitles for the deaf and hard-of-hearing
              <br />
              • <strong>Live Translation</strong> - understand every language
              <br />
              • <strong>Notes</strong> - AI note taker
              <br /><br />
              … and more! Check out our{" "}
              <a href="/miniapps" className="text-[#00b869] hover:underline font-medium">MiniApps</a>{" "}
              or download the{" "}
              <a href="/app" className="text-[#00b869] hover:underline font-medium">Mentra app</a>{" "}
              here.
            </>
          )
        },
        {
          question: "How long does the battery last?",
          answer: "We've optimized Mentra Live for long battery life.\n\n• All-day wear: 10+ hours of mixed use\n• Music: 5+ hours\n• Live streaming: 40+ mins\n• Video recording: 1+ hours"
        },
        {
          question: "Can I use it without internet?",
          answer: "Yes. Connected through your phone's cell service, you can take calls, listen to music, and run numerous apps from the Mentra MiniApp Store."
        }
      ]
    },
    {
      id: "technical",
      name: "Technical & Support",
      faqs: [
        {
          question: "What is MentraOS?",
          answer: "MentraOS is an open-source operating system (OS). It's the industry-leading OS, built for Even Realities, Vuzix, Mentra Live, and more.\n\nOpen source means a product's design or source code is publicly accessible, allowing anyone to view, modify, and distribute it, fostering collaborative development and transparency."
        },
        {
          question: "Does Mentra Live store my data?",
          answer: "MentraOS only stores your email address and the apps you have installed. Users can view all their data and delete all their data directly in the Mentra app."
        },
        {
          question: "Does it work with iOS and Android?",
          answer: "Yes, through the Mentra app."
        },
        {
          question: "Can developers build apps?",
          answer: "Absolutely. MentraOS and SDK are fully open source. Build apps for the next great interface in our lives."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryId: string, index: number) => {
    const key = `${categoryId}-${index}`;
    setOpenFAQ(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const activeCategoryData = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full max-w-[1452px] mx-auto px-[24px] md:px-[133.778px]" data-name="FAQ Section">
      {/* Tab Switcher */}
      <div className="bg-[#fbfbfe] content-stretch flex flex-wrap gap-[12px] items-center justify-center px-[12px] md:px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-full max-w-[800px]" data-name="Tab Switcher">
        <div aria-hidden="true" className="absolute border border-[#f1f2f9] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0.5px_1px_0px_rgba(25,33,61,0.07)]" />
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setOpenFAQ({}); // Close all FAQs when switching categories
            }}
            className={`content-stretch flex items-center px-[12px] md:px-[16px] py-[10px] md:py-[12px] relative rounded-[8px] shrink-0 transition-all duration-300 cursor-pointer ${
              activeCategory === category.id
                ? "bg-[#00b869] shadow-[0px_2px_6px_0px_rgba(74,58,255,0.1)]"
                : "hover:bg-[#f5f5f5]"
            }`}
            data-name="Tab"
          >
            <p className={`font-['Red_Hat_Display:Medium',sans-serif] leading-[1.35] not-italic relative shrink-0 text-[18px] md:text-[24px] text-nowrap transition-colors ${
              activeCategory === category.id ? "text-white" : "text-[#514f6e]"
            }`}>
              {category.name}
            </p>
            {activeCategory === category.id && (
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_-1px_1px_0px_rgba(0,0,0,0.12),inset_0px_1px_1.5px_0px_rgba(255,255,255,0.25)]" />
            )}
          </button>
        ))}
      </div>

      {/* FAQ Accordions */}
      <div className="relative rounded-[24px] shadow-[0px_2px_6px_0px_rgba(25,33,61,0.1)] shrink-0 w-full bg-white" data-name="Accordions">
        <div className="content-stretch flex flex-col gap-0 isolate items-start p-[32px] md:p-[48px] lg:p-[80px] relative w-full">
          {activeCategoryData.faqs.map((faq, index) => {
            const key = `${activeCategory}-${index}`;
            return (
              <FAQAccordion
                key={key}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ[key] || false}
                onToggle={() => toggleFAQ(activeCategory, index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}