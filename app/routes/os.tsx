import type {MetaFunction} from '@remix-run/node';
import NavigationBar from '../components/NavigationBar';
import ScrollReveal from '../components/ScrollReveal';
import Footer from '../imports/Frame1984078270-14-8211';
import imgImage203 from "/assets/074ab71e7b858304b7b3d0cc93a375a063653b74.png";
import imgEzgifFrame0022 from "/assets/9da11aee800379f79fd3147ec9d54ed8009c3fa4.png";
import imgScreen from "/assets/70e6cef7e4932d4c2243766935472439652bd8c4.png";
import imgChangeColorHere from "/assets/2effc128444e041451979989499c0686570d87f7.png";
import imgScreenshot20260109At32205Pm1 from "/assets/3e716864cf4047bbadc5979533465dade88d3530.png";
import imgImage155 from "/assets/9d77be3f2640eae14e306f9ef7ab95ea7c90ec9d.png";
import imgIPhone15 from "/assets/83fb1abc62c74b98254b83e1c995957305d9c32a.png";

export const meta: MetaFunction = () => {
  return [
    {title: 'MentraOS - Mentra'},
    {name: 'description', content: 'The operating system for your smart glasses'},
    {property: 'og:title', content: 'MentraOS - Mentra'},
    {property: 'og:description', content: 'The operating system for your smart glasses'},
    {property: 'og:type', content: 'website'},
  ];
};

export default function MentraOSPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="About OS">
      <NavigationBar />
      <div className="content-stretch flex flex-col gap-[80px] items-center justify-center overflow-clip pb-[144px] pt-[279px] px-[133.778px] relative shrink-0 w-full">
        {/* Header Section */}
        <ScrollReveal direction="fade" delay={0} duration={0.8}>
          <div className="content-stretch flex flex-col gap-[40px] items-center justify-center relative shrink-0" data-name="Header">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
              <div className="col-[1] h-[526px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.111px] mask-size-[578px_526px] ml-0 mt-[0.11px] relative row-[1] w-[578px]" data-name="iPhone 15">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="iPhone mockup" className="absolute h-[223.8%] left-0 max-w-none top-[0.08%] w-full" src={imgIPhone15} />
                </div>
              </div>
            </div>
            <p className="font-['Red_Hat_Display:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[48px] text-[#0a0a0a] text-center w-[1104px] whitespace-pre-wrap">
              MentraOS is the leading smart glasses operating system (OS) and SDK for smart glasses.
            </p>
            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[32px] text-[#0d0c0d] text-center tracking-[0.3px] w-[1156px] whitespace-pre-wrap">
              Fully open source, MentraOS is the only platform for apps on smart glasses.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Images Section */}
        <ScrollReveal direction="up" delay={100} distance={40} duration={0.8}>
          <div className="content-stretch flex gap-[60px] items-center relative shrink-0">
            <div className="h-[278px] relative shrink-0 w-[664px]" data-name="image 203">
              <img alt="MentraOS" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage203} />
            </div>
            <div className="h-[249px] relative shrink-0 w-[550px]" data-name="ezgif-frame-002 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="MentraOS demo" className="absolute h-[345.32%] left-[-29.94%] max-w-none top-[-119.42%] w-[156.48%]" src={imgEzgifFrame0022} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Description Text */}
        <ScrollReveal direction="up" delay={150} distance={40} duration={0.8}>
          <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[40px] relative shrink-0 text-[32px] text-[#0d0c0d] text-center tracking-[0.3px] w-[1104px] whitespace-pre-wrap">
            Built for Mentra Live, Even Realities, Vuzix, and more, the Mentra MiniApp Store features several popular apps, including AI notetaking (AI Notes), proactive fact-checking (Merge), and live running stats (Dash).
          </p>
        </ScrollReveal>

        {/* Large Phone Mockup Section */}
        <ScrollReveal direction="up" delay={200} distance={40} duration={0.8}>
          <div className="bg-white h-[826px] overflow-clip relative shrink-0 w-[1452px]">
            <div className="absolute h-[721.432px] left-[38px] top-[45px] w-[1380.145px]">
              <div className="absolute h-[823px] left-[-35.93px] rounded-[38.021px] top-[-42px] w-[1452px]" style={{ backgroundImage: "linear-gradient(119.70637253283648deg, rgba(245, 245, 245, 1) 22.5%, rgba(245, 245, 245, 0.3) 63.164%, rgba(0, 184, 105, 0.2) 100%)" }} />
              <div className="absolute content-stretch flex flex-col gap-[19.01px] items-start left-[78.89px] top-[215.73px]">
                <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[54.496px] relative shrink-0 text-[54.496px] text-[#0a0a0a]">
                  Download the app
                </p>
                <ol className="block font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[0] list-decimal min-w-full relative shrink-0 text-[20.436px] text-[#0a0a0a] w-[min-content] whitespace-pre-wrap" start={1}>
                  <li className="mb-0 ms-[30.654px]">
                    <span className="leading-[41.823px]">Open the App Store website on your phone or computer.</span>
                  </li>
                  <li className="mb-0 ms-[30.654px]">
                    <span className="leading-[41.823px]">Choose an app and tap Install.</span>
                  </li>
                  <li className="ms-[30.654px]">
                    <span className="leading-[41.823px]">The app will appear on your MentraOS app in your Apps list.</span>
                  </li>
                </ol>
                <div className="content-stretch flex gap-[38.021px] items-start relative shrink-0">
                  <div className="h-[49.427px] relative shrink-0 w-[171.092px]" data-name="App Store">
                    <a href="https://apps.apple.com/app/mentraos" target="_blank" rel="noopener noreferrer" className="block size-full">
                      <img alt="App Store" className="block max-w-none size-full" src={imgImage155} />
                    </a>
                  </div>
                  <div className="flex h-[49.427px] items-center justify-center relative shrink-0 w-[171.092px]">
                    <div className="flex-none scale-x-[125%] scale-y-[-125%]">
                      <div className="h-[39.541px] relative w-[136.874px]" data-name="Google Play">
                        <a href="https://play.google.com/store/apps/details?id=com.mentraglass.mentraos" target="_blank" rel="noopener noreferrer" className="block size-full">
                          <img alt="Google Play" className="block max-w-none size-full" src={imgImage155} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="h-[49.384px] relative shrink-0 w-[161.726px]" data-name="image 155">
                    <img alt="Download" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage155} />
                  </div>
                </div>
              </div>
              <div className="absolute contents left-[828.85px] top-0">
                <div className="absolute left-[828.85px] size-[475.256px] top-[122.62px]">
                  <div className="absolute inset-0 bg-white rounded-full opacity-50" />
                </div>
                <div className="absolute contents left-[889.68px] top-0" data-name="iPhone">
                  <div className="absolute h-[696.05px] left-[906.03px] rounded-[47.321px] top-[13.77px] w-[320.923px]" data-name="👈 screen">
                    <img alt="Phone screen" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[47.321px] size-full" src={imgScreen} />
                  </div>
                  <div className="absolute h-[721.432px] left-[889.68px] top-0 w-[354.048px]" data-name="🎨 change color here">
                    <img alt="Phone frame" className="block max-w-none size-full" height="721.432" src={imgChangeColorHere} width="354.048" />
                  </div>
                  <div className="absolute bg-white h-[694.254px] left-[calc(50%+376.45px)] overflow-x-clip overflow-y-auto rounded-[46.031px] top-[calc(50%+0.18px)] translate-x-[-50%] translate-y-[-50%] w-[320.99px]">
                    {/* Phone content - simplified version */}
                    <div className="absolute h-[44.106px] left-0 right-0 top-0" data-name="Status Bar">
                      <div className="absolute h-[44.106px] left-0 right-[64.25%] top-1/2 translate-y-[-50%]" data-name="Time">
                        <p className="absolute font-['SF_Pro:Semibold',sans-serif] inset-[33.96%_36.9%_25.23%_36.96%] leading-[17.969px] not-italic text-[13.885px] text-black text-center">
                          9:41
                        </p>
                      </div>
                    </div>
                    <div className="absolute bg-[#0400ce] h-[695.888px] left-0 right-0 top-0" />
                    <div className="absolute bg-black blur-[83.31px] filter h-[711.406px] left-[-340.59px] rounded-[816.77px] top-[406.75px] w-[693.437px]" />
                    <div className="absolute bg-white blur-[81.677px] filter h-[711.406px] left-[-17.97px] rounded-[816.77px] top-[-396.95px] w-[693.437px]" />
                    <div className="absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-end leading-[0] left-[20.42px] not-italic text-[49.006px] text-white top-[314.46px] tracking-[0.196px] translate-y-[-100%] whitespace-nowrap">
                      <p className="leading-[0.95]">Mockup 👾</p>
                    </div>
                    <div className="absolute flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-end leading-[0] left-[20.42px] not-italic text-[13.885px] text-white top-[255.65px] tracking-[0.196px] translate-y-[-100%] whitespace-nowrap">
                      <p className="leading-none">🧑‍💻 Greg Riaguzov</p>
                    </div>
                    <div className="absolute h-[21px] left-0 top-[831px] w-[393px]" data-name="Home Indicator">
                      <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[139px]">
                        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                          <div className="bg-[#171717] h-[5px] rounded-[100px] w-[139px]" data-name="Home Indicator" />
                        </div>
                      </div>
                    </div>
                    {/* Simplified Store UI */}
                    <div className="absolute bg-[var(--background,white)] content-stretch flex flex-col gap-[39.507px] h-[701.241px] items-center left-0 overflow-clip pb-[26.338px] pt-[57.174px] px-[26.338px] top-[-2.68px] w-[320.99px]" data-name="Store">
                      <div className="content-stretch flex flex-col gap-[19.753px] items-center relative shrink-0 w-[320.99px]" data-name="Container">
                        <div className="content-stretch flex items-center justify-between px-[19.753px] py-0 relative shrink-0 w-[320.99px]" data-name="Header">
                          <div className="content-stretch flex items-center relative shrink-0 w-[178.602px]" data-name="Title Container">
                            <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[23.045px] relative shrink-0 text-[16.461px] text-[#0a0a0a] text-center">
                              Mentra Store
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#f5f5f5] content-stretch flex gap-[8.231px] h-[37.037px] items-center px-[13.169px] py-[8.231px] relative rounded-[19.753px] shrink-0 w-[281.484px]" data-name="Search Container">
                          <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[11.523px] text-[rgba(0,0,0,0.3)] text-center">Search app</p>
                        </div>
                        {/* App cards placeholder */}
                        <div className="content-stretch flex flex-col gap-[9.877px] items-center relative shrink-0 w-full">
                          <div className="bg-gradient-to-br from-[#6eb7dc] via-[#c14cbf] to-[#d46e3f] h-[232.516px] overflow-clip relative rounded-[16.423px] shrink-0 w-[281.785px]">
                            <div className="absolute flex flex-col font-['Red_Hat_Display:Regular',sans-serif] justify-center leading-[normal] left-[17.29px] text-[13.389px] text-white top-[55.19px] w-[122.511px] whitespace-pre-wrap">
                              MERGE
                            </div>
                            <div className="absolute backdrop-blur-[17.287px] backdrop-filter bg-[rgba(217,217,217,0.34)] content-stretch flex flex-col h-[57.049px] items-start left-0 px-[9.508px] py-[7.779px] top-[175.47px] w-[281.785px]">
                              <div className="content-stretch flex items-center justify-between relative shrink-0 w-[258.447px]">
                                <div className="content-stretch flex gap-[5.186px] items-start relative shrink-0">
                                  <div className="bg-white overflow-clip relative rounded-[8.52px] shrink-0 size-[39.761px]" data-name="Icons" />
                                  <div className="content-stretch flex flex-col h-[39.761px] items-start leading-[normal] pb-[1.729px] pt-0 px-0 relative shrink-0">
                                    <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[13.83px] text-white text-center">Merge</p>
                                    <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold relative shrink-0 text-[9.508px] text-white">Chat • Social</p>
                                    <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal relative shrink-0 text-[7.779px] text-[#e5e5e5]">Upgrade your thinking and memory</p>
                                  </div>
                                </div>
                                <div className="bg-[#8f2995] content-stretch flex flex-col h-[31.117px] items-center justify-center px-[13.83px] py-[6.915px] relative rounded-[16.423px] shrink-0" data-name="Buttons">
                                  <p className="font-['Red_Hat_Display:Medium',sans-serif] font-medium leading-[17.287px] relative shrink-0 text-[#f5f5f5] text-[12.1px]">Get Now</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute h-[29.683px] left-[1014.87px] overflow-clip top-[23.23px] w-[102.386px]" data-name="island">
                  <div className="absolute bg-black h-[29.683px] left-1/2 rounded-[43.019px] top-0 translate-x-[-50%] w-[102.386px]" data-name="d island" />
                  <div className="absolute left-[79.59px] opacity-60 rounded-[12.906px] size-[14.627px] top-[7.31px]" data-name="camera">
                    <div className="absolute inset-0 rounded-[12.906px] bg-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* MentraOS lets you build Section */}
        <ScrollReveal direction="up" delay={300} distance={40} duration={0.8}>
          <div className="content-stretch flex items-center justify-between overflow-clip px-[80px] py-[40px] relative rounded-[24px] shrink-0 w-[1452px]" style={{ backgroundImage: "linear-gradient(122.91214264378954deg, rgba(237, 253, 244, 1) 10.566%, rgba(223, 223, 223, 1) 89.56%)" }}>
            <div className="content-stretch flex flex-col gap-[19.111px] items-start justify-center relative shrink-0 w-[687px]" data-name="Header">
              <p className="font-['Red_Hat_Display:SemiBold',sans-serif] font-semibold leading-[57.333px] relative shrink-0 text-[57.333px] text-[#0a0a0a] text-center">
                MentraOS lets you build
              </p>
              <p className="font-['Red_Hat_Display:Regular',sans-serif] font-normal leading-[normal] min-w-full relative shrink-0 text-[28px] text-[#0a0a0a] w-[min-content] whitespace-pre-wrap">
                Write one TypeScript app that works on multiple smart glasses
              </p>
              <button
                onClick={() => window.open('https://github.com/Mentra-Community/MentraOS', '_blank')}
                className="bg-[#00b869] content-stretch flex flex-col h-[53.021px] items-center justify-center px-[23.565px] py-[11.782px] relative rounded-[35.701px] shadow-[0px_1.473px_2.946px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer hover:bg-[#009258] transition-colors" data-name="Buttons"
              >
                <p className="font-['Red_Hat_Display:Bold',sans-serif] font-bold leading-[29.456px] relative shrink-0 text-[20px] text-[#f5f5f5]">
                  Build Your Own App
                </p>
              </button>
            </div>
            <div className="h-[411px] relative rounded-[23px] shrink-0 w-[569px]" data-name="Screenshot 2026-01-09 at 3.22.05 PM 1">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
                <img alt="Code screenshot" className="absolute h-[101.46%] left-[-0.05%] max-w-none top-[-0.73%] w-[100.63%]" src={imgScreenshot20260109At32205Pm1} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <Footer />
    </div>
  );
}