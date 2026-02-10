import Image from "next/image";
import discount20 from "@/assets/images/discount-20.png";
import discount499 from "@/assets/images/discount-499.png";
import { Icon } from "@/assets/icons/icons";
import VideoSection from "@/components/video/VideoSection";
import TrustedBy from "@/components/shared/feature/trusted-by/TrustedBy";
import { AccordionItemInterface } from "@/types/FaqTypes";
import { AccordionMenu } from "@/components/shared/accordion-menu/AccordionMenu";
import Button from "@/components/shared/button/Button";
import Link from "next/link";
import PricingSection from "@/components/home/components/Pricing";
import FeatureSection from "@/components/home/components/Features";

export default function Home() {
  const faqItems: AccordionItemInterface[] = [
    {
      trigger: "Is Google Workspace compatible with my current email client?",
      content:
        "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    },
    {
      trigger:
        "Can I transfer my current Google Workspace account to Nest Nepal?",
      content:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    },
    {
      trigger: "Are there any fees for transferring a domain to Nest Nepal?",
      content: "Payments are processed securely through our payment partners.",
    },
    {
      trigger: "Are there any hidden charges for Nest Nepal Customers?",
      content:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    },
    {
      trigger: "What all does Gsuite productivity suite include?",
      content:
        " All payments are processed securely through our payment partners.",
    },
  ];
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      {/* Hero Section */}
      <section className="pt-12 pb-16 overflow-hidden">
        <div className=" -translate-x-1/2 w-[140%] bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-2xl md:text-[54px] font-bold mb-6 font-sans   bg-gradient-to-r from-primary-100 via-primary-200 to-primary-50
               text-transparent bg-clip-text"
          >
            Google Workspace
          </h2>

          <div className="flex justify-center items-center gap-4 mb-10">
            <Icon name="gmail" className="w-9 h-7" />
            <Icon name="calendar" className="w-8 h-8" />
            <Icon name="gdrive" className="w-9 h-8" />
            <Icon name="gchat" className="w-8 h-9" />
            <Icon name="gmeet" className="w-9 h-7.5" />
          </div>

          <h1 className="text-3xl md:text-[54px] font-medium text-black leading-[1.5] mb-6 ">
            <span className="text-primary">किन केही</span> Businesses
            efficiently <span className="text-primary">चल्छन्, र केही</span>{" "}
            <br />
            daily operations मै struggle
            <span className="text-primary">गर्छन्?</span>
          </h1>

          <p className="text-base md:text-lg text-slate-700 font-medium mb-12">
            Reason luck, ads वा team size होइन. Reason हो right partner with
            right tools.
          </p>

          <div className="flex justify-center mb-12">
            <div className="flex flex-col gap-1 drop-shadow-xl">
              <Image
                src={discount20}
                alt="Discount 20"
                width={200}
                height={200}
              />
              <Image
                src={discount499}
                alt="Discount 499"
                width={200}
                height={200}
              />
            </div>
          </div>

          <p className="text-black font-medium mb-10 max-w-lg mx-auto">
            Everything Your Business Needs to Work Smarter. A complete Google
            Workspace setup done right by Nest Nepal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button color="secondary">15 min · Free Demo</Button>
            </Link>

            <Link href="/">
              <Button iconRight="quotation">Get a Quotation</Button>
            </Link>
          </div>
        </div>
      </section>
      <VideoSection />
      <TrustedBy />
      <PricingSection />
      <FeatureSection />
      <AccordionMenu
        items={faqItems}
        title={
          <>
            Frequently asked question
            <span className="text-primary">(FAQS)</span>
          </>
        }
      />
    </div>
  );
}
