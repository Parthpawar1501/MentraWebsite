import type {MetaFunction} from '@remix-run/node';
import NavigationBar from '../components/NavigationBar';
import ScrollReveal from '../components/ScrollReveal';
import GetYourMentraGlassesSection from '../imports/Frame1984078261';
import Footer from '../imports/Frame1984078270-14-8211';
import {useState} from 'react';
// Hero section image
import imgAboutHero from "/assets/551715d6dae135191779e906c9df5ddb3d719234.png";
// Our Roots section image
import imgAboutRoots from "/assets/9bd13b993f4db0d7910a3e77d580330c8196cbda.png";
// Our Mission section image
import imgAboutMission from "/assets/941ea41c22412686984c524708231da6edbd53ad.png";
// Open Source Future section image
import imgAboutOpenSource from "/assets/04de4f892e4e3df51d41b04942dade53ac02ab7c.png";
// Team carousel images
import imgTeam1 from "/assets/074ab71e7b858304b7b3d0cc93a375a063653b74.png";
import imgTeam2 from "/assets/bb07fd06e6c4321a583b7cfa3b338bcb8bd30d7b.png";
// News section images
import imgNews1 from "/assets/9afba06bbe7725ea0650b181366d51a6a3782f87.png";
import imgNews2 from "/assets/51d7d50f9b381f963c3ef047a3dd22f068b8e016.png";
import imgNews3 from "/assets/b9a2e40afe9a6295c872f0043640730bdf2a4916.png";

export const meta: MetaFunction = () => {
  return [
    {title: 'About Mentra - AI Smart Glasses'},
    {name: 'description', content: 'Learn about Mentra\'s mission, vision, and the team behind the revolutionary AI smart glasses.'},
    {property: 'og:title', content: 'About Mentra - AI Smart Glasses'},
    {property: 'og:description', content: 'Learn about Mentra\'s mission, vision, and the team behind the revolutionary AI smart glasses.'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function AboutPage() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const teamMembers = [
    {
      image: imgTeam1,
      title: "Mentra AI",
      description: "With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget,",
    },
    {
      image: imgTeam2,
      title: "Mentra AI",
      description: "With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget.",
    },
  ];

  const newsItems = [
    {
      image: imgNews1,
      title: "Mentra AI",
      description: "With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.",
    },
    {
      image: imgNews2,
      title: "Mentra AI",
      description: "With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.",
    },
    {
      image: imgNews3,
      title: "Mentra AI",
      description: "With high-definition video capabilities and a sleek design, the Mentra Live Camera Glasses are not just a gadget, but a lifestyle accessory that enhances your experiences.",
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <NavigationBar />
      <main className="flex flex-col items-center w-full max-w-[1452px] px-4 md:px-8 lg:px-[133.778px] py-16">
        {/* Hero Section */}
        <ScrollReveal direction="fade" delay={0} duration={0.8}>
          <div className="content-stretch flex items-center gap-[80px] pb-[80px] pt-[40px] px-0 relative shrink-0 w-full max-w-[1454px] mb-0">
            <div className="h-[641px] relative rounded-[24px] shrink-0 w-[687px]" data-name="Rectangle 161123840">
              <img alt="About Mentra hero" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgAboutHero} />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame 1984078194">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#0d0c0d] text-[28px] tracking-[0.3px]">About Us</p>
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px]">Choose your Reality</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Our Roots Section */}
        <ScrollReveal direction="up" delay={100} distance={40} duration={0.8}>
          <div className="content-stretch flex flex-col gap-[80px] items-start pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1454px] mb-0">
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame 1984078194">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px]">Our Roots</p>
              <div className="font-['Manrope:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[24px] text-black tracking-[0.24px] w-full">
                <p className="mb-0">In 2018, Cayden built his first smart glasses in his university dorm. Meanwhile, Israelov was independently experimenting with smart glasses technology. They connected on Reddit in 2022, teamed up to form TeamOpenSmartGlasses – the earliest community of smart glasses hackers – and within a year presented OpenSourceSmartGlasses at CES 2023.</p>
                <p className="mb-0">&nbsp;</p>
                <p className="mb-0">
                  That experience led to a greater realization: <br />
                  Just as smartphones needed an Android, smart glasses need their own operating system.
                </p>
                <p className="mb-0">That idea became MentraOS.</p>
                <p className="mb-0">&nbsp;</p>
                <p>
                  In 2024, Cayden dropped out of MIT and Israelov quit his job to found Mentra. They launched MentraOS, went through YC, and raised $8M.
                  <br />
                  <br />
                  Today, the team is made up of diverse individuals who have experience working with Google, FitBit, Calvin Klein, and Nike, yet will always retain that hacker spirit.
                </p>
              </div>
            </div>
            <div className="h-[641px] relative shrink-0 w-[1454px]" data-name="Rectangle 161123840">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="Our Roots" className="absolute h-[148.49%] left-[-0.62%] max-w-none top-[-24.25%] w-[100.62%]" src={imgAboutRoots} />
              </div>
            </div>
            {/* Timeline */}
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0 w-[1455px]" data-name="Group 1597880430">
              <div className="col-[1] h-[12px] ml-[32.14px] mt-[35px] relative row-[1] w-[11.687px]" data-name="Ellipse 2336">
                <div className="w-[12px] h-[12px] bg-[#00b869] rounded-full" />
              </div>
              <div className="col-[1] grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start ml-0 mt-0 relative row-[1]" data-name="Group 1597880429">
                <div className="col-[1] h-[1px] bg-[#0a0a0a] ml-0 mt-[41px] relative row-[1] w-[1454px]" data-name="Line 31" />
                <div className="col-[1] content-stretch flex items-center justify-between ml-[18.5px] mt-[60px] relative row-[1] w-[1397.515px]" data-name="Frame 1984078228">
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2018</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2019</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2020</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2021</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2022</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2023</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2024</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2025</p>
                  <p className="font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] relative shrink-0 text-[18px] text-black">2026</p>
                </div>
                <p className="col-[1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] ml-[2.01px] mt-0 relative row-[1] text-[18px] text-black">First pair of smart glasses</p>
                <p className="col-[1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] ml-[495px] mt-0 relative row-[1] text-[18px] text-black">Different Angles</p>
                <p className="col-[1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] ml-[839px] mt-0 relative row-[1] text-[18px] text-black">CES 2023</p>
              </div>
              <p className="col-[1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] ml-[1158px] mt-0 relative row-[1] text-[18px] text-black">Y Combinator</p>
              <p className="col-[1] font-['Red_Hat_Display:Regular',sans-serif] leading-[1.5] ml-[1298px] mt-0 relative row-[1] text-[18px] text-black">Mentra Live Launch</p>
              <div className="col-[1] h-[12px] ml-[1198.14px] mt-[35px] relative row-[1] w-[11.687px]" data-name="Ellipse 2341">
                <div className="w-[12px] h-[12px] bg-[#00b869] rounded-full" />
              </div>
              <div className="col-[1] h-[12px] ml-[878.14px] mt-[35px] relative row-[1] w-[11.687px]" data-name="Ellipse 2338">
                <div className="w-[12px] h-[12px] bg-[#00b869] rounded-full" />
              </div>
              <div className="col-[1] h-[12px] ml-[538.14px] mt-[35px] relative row-[1] w-[11.687px]" data-name="Ellipse 2339">
                <div className="w-[12px] h-[12px] bg-[#00b869] rounded-full" />
              </div>
              <div className="col-[1] h-[12px] ml-[1378.14px] mt-[35px] relative row-[1] w-[11.687px]" data-name="Ellipse 2340">
                <div className="w-[12px] h-[12px] bg-[#00b869] rounded-full" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Team Carousel Section */}
        <ScrollReveal direction="up" delay={200} distance={40} duration={0.8}>
          <div className="content-stretch flex flex-col items-start pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1454px] mb-0">
            <div className="content-stretch flex items-center gap-[40px] relative shrink-0 w-full" data-name="Frame 1984078191">
              <button
                onClick={() => setCurrentTeamIndex(Math.max(0, currentTeamIndex - 1))}
                className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px] hover:bg-[rgba(255,255,255,0.6)] transition-all duration-200"
                aria-label="Previous team member"
                data-name="Back Button Icon"
              >
                <svg className="w-6 h-6 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="content-stretch flex gap-[40px] items-start relative shrink-0 flex-1 overflow-hidden" data-name="Frame 1597880429">
                {teamMembers.map((member, index) => (
                  <div key={index} className="content-stretch flex gap-[32px] items-start relative shrink-0 min-w-[519px]" style={{ transform: `translateX(-${currentTeamIndex * 100}%)`, transition: 'transform 0.3s ease' }} data-name="Frame 1618873009">
                    <div className="h-[172.682px] relative rounded-[24px] shrink-0 w-[243.5px]" data-name="image 163">
                      <img alt={member.title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={member.image} />
                    </div>
                    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Frame 1984078194">
                      <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-nowrap">{member.title}</p>
                      <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-[243.5px]">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setCurrentTeamIndex(Math.min(teamMembers.length - 1, currentTeamIndex + 1))}
                className="backdrop-blur-[5px] backdrop-filter bg-[rgba(255,255,255,0.4)] content-stretch flex items-center justify-center relative rounded-[32px] shrink-0 size-[40px] hover:bg-[rgba(255,255,255,0.6)] transition-all duration-200"
                aria-label="Next team member"
                data-name="Back Button Icon"
              >
                <svg className="w-6 h-6 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Our Mission Section */}
        <ScrollReveal direction="up" delay={300} distance={40} duration={0.8}>
          <div className="content-stretch flex items-start gap-[80px] pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1454px] mb-0" data-name="Frame 1618873013">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[552px]" data-name="Frame 1984078194">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] mb-0">Our Mission</p>
              <div className="h-[1px] bg-[#0a0a0a] relative shrink-0 w-[552px]" data-name="Line 15" />
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[552px]" data-name="Frame 1984078183">
                <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-black w-[536px] mb-0">
                  For years, the world was promised smart glasses, but the technology wasn't ready. In 2024, AI and hardware finally reached that moment. Software did not. So we built MentraOS. Smart glasses are not a trend. They are inevitable. Today, we pull out our phones hundreds of times a day just to connect our eyes, ears, and senses to the digital world. Smart glasses make that connection seamless and natural. AI becomes powerful only when it understands context. With smart glasses, AI can see what you see, hear what you hear, and understand your environment in real time, unlocking the next generation of truly helpful computing. We vow to protect people from a future where their technology and experiences are controlled by big tech companies. With MentraOS and Mentra Live, we ensure a future where people will always get to choose their reality.
                </p>
              </div>
            </div>
            <div className="h-[641px] relative rounded-[24px] shrink-0 w-[822px]" data-name="Rectangle 161123840">
              <img alt="Our Mission" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgAboutMission} />
            </div>
          </div>
        </ScrollReveal>

        {/* Open Source Future Section */}
        <ScrollReveal direction="up" delay={400} distance={40} duration={0.8}>
          <div className="content-stretch flex items-start gap-[80px] pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1454px] mb-0" data-name="Frame 1618873013">
            <div className="h-[641px] relative rounded-[24px] shrink-0 w-[687px]" data-name="Rectangle 161123840">
              <img alt="Open Source Future" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgAboutOpenSource} />
            </div>
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[687px]" data-name="Frame 1984078194">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px] mb-0">Open Source Future</p>
              <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-black w-[687px] mb-0">
                We believe the future of smart glasses should be open source, because innovation, freedom, and community-driven progress lead to the best platforms.
              </p>
              <div className="h-[1px] bg-[#0a0a0a] relative shrink-0 w-[687px]" data-name="Line 15" />
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[687px]" data-name="Frame 1984078183">
                <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-black w-[687px] mb-0">
                  By rethinking the operating system from the ground up, we've built the foundation for the future of wearable AI.
                </p>
              </div>
              <div className="h-[1px] bg-[#0a0a0a] relative shrink-0 w-[687px]" data-name="Line 14" />
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[687px]" data-name="Frame 1984078185">
                <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] text-black w-[687px] mb-0">
                  Join us in building a future where smart glasses are controlled by the people.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Get Your Mentra Glasses Section */}
        <ScrollReveal direction="up" delay={500} distance={40} duration={0.8}>
          <div className="content-stretch pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1452px] mb-0">
            <GetYourMentraGlassesSection />
          </div>
        </ScrollReveal>

        {/* News Section */}
        <ScrollReveal direction="up" delay={600} distance={40} duration={0.8}>
          <div className="content-stretch flex flex-col items-start pb-[80px] pt-0 px-0 relative shrink-0 w-full max-w-[1454px] mb-0" data-name="Frame 1984078230">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full mb-[40px]" data-name="Frame 1984078194">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[57.333px]">Catch up on the latest news</p>
              <button className="bg-[#00b869] content-stretch flex flex-col h-[40.979px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#009258] transition-colors" data-name="Buttons">
                <p className="font-['Red_Hat_Display:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-white text-[16px] text-nowrap">View All</p>
              </button>
            </div>
            <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Frame 1597880429">
              {newsItems.map((item, index) => (
                <div key={index} className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 flex-1" data-name={`Frame 161887300${index === 0 ? '9' : index === 1 ? '10' : '11'}`}>
                  <div className="h-[305.887px] relative rounded-[24px] shrink-0 w-full" data-name="image 163">
                    <img alt={item.title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={item.image} />
                  </div>
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame 1984078194">
                    <p className="font-['Red_Hat_Display:SemiBold',sans-serif] leading-[57.333px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] text-nowrap">{item.title}</p>
                    <p className="font-['Manrope:Regular',sans-serif] leading-[normal] relative shrink-0 text-[16px] text-black w-full">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}