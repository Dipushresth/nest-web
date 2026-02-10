"use client";
import { Icon } from "@/assets/icons/icons";
import Button from "@/components/shared/button/Button";
import Link from "next/link";
import React from "react";

interface FeatureItem {
  icon: string | React.ReactNode;
  label: string;
}

interface PlanSection {
  title: string;
  items: FeatureItem[];
}

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  currency: string;
  billingInfo: string;
  whatsappLink: string;
  sections: {
    storage: PlanSection;
    collaborate: PlanSection;
    communicate: PlanSection;
    control: PlanSection;
  };
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 499,
    originalPrice: 560,
    currency: "Rs.",
    billingInfo: "per user / month,\n1 year commitment ⓘ",
    whatsappLink: "https://wa.me/9876543210",
    sections: {
      storage: {
        title: "Storage",
        items: [
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "30GB Pooled Storage per user",
          },
        ],
      },
      collaborate: {
        title: "Collaborate",
        items: [
          {
            icon: <Icon name="gmail" className="w-5.5 h-4" />,
            label: "Documents with Google Docs",
          },
          {
            icon: <Icon name="calendar" className="w-5.5 h-4" />,
            label: "Data Insights with Google Sheets",
          },
          {
            icon: <Icon name="gmeet" className="w-5.5 h-4" />,
            label: "Present with Google Slides",
          },
          {
            icon: <Icon name="gossip" className="w-5.5 h-4" />,
            label: "Surveys, To-dos and Many More",
          },
        ],
      },
      communicate: {
        title: "Communicate",
        items: [
          {
            icon: <Icon name="gmail" className="w-5.5 h-4" />,
            label: "Secured & Personalized Gmail",
          },
          {
            icon: <Icon name="calendar" className="w-5.5 h-4" />,
            label: "Always in Track with Schedule",
          },
          {
            icon: <Icon name="gmeet" className="w-5.5 h-4" />,
            label: "HD Video Calls (100 Users)",
          },
          {
            icon: <Icon name="gossip" className="w-5.5 h-4" />,
            label: "Gossip Secretly in your Group",
          },
        ],
      },
      control: {
        title: "Control",
        items: [
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "Basic Security & Admin Control",
          },
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "Standard Endpoint Management",
          },
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "Smart Search with Workspace",
          },
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "Vault for eDiscovery",
          },
          {
            icon: <Icon name="gdrive" className="w-5.5 h-4" />,
            label: "Backup options for Drive and Gmail",
          },
        ],
      },
    },
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slateblacking-tight mb-6">
          के <span className="text-blue-600">Google Workspace</span> तपाईंको{" "}
          <br />
          business growth <span className="text-blue-600">को लागि</span> best
          fit <span className="text-blue-600">हो?</span>
        </h2>
        <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10">
          Tailored Plans तपाईंको Online Presence को हरेक पहलुलाई <br />
          Elevate र Empower गर्न
        </p>

        <div className="flex justify-center items-center gap-4 mb-10">
          <Icon name="gmail" className="w-5.5 h-4" />
          <Icon name="calendar" className="w-5 h-5" />
          <Icon name="gdrive" className="w-5.5 h-5" />
          <Icon name="gchat" className="w-5 h-5.5" />
          <Icon name="gmeet" className="w-5 h-4.5" />
        </div>

        <div className="space-y-16">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="flex flex-col lg:flex-row max-w-5xl mx-auto text-left items-start gap-12 md:gap-25"
            >
              <div className="w-full md:w-[35%] mx-auto flex flex-col items-center justify-center pt-8 border-r-0 lg:border-r border-slate-200 pr-0 md:pr-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">
                  {plan.name}
                </h3>
                <div className="flex items-start gap-1 mb-2">
                  <span className="text-lg font-bold mt-1 text-slate-600">
                    {plan.currency}
                  </span>
                  <span className="text-6xl font-black text-slate-900 tracking-tighter">
                    {plan.price}
                  </span>
                  <div className="relative ml-2 mt-2">
                    <span className="text-2xl text-slate-400">
                      {plan.originalPrice}
                    </span>
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 -rotate-12"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 text-center mb-10 whitespace-pre-line leading-relaxed">
                  {plan.billingInfo}
                </p>
                <Link href="#">
                  <Button
                    iconLeft="whatsAppRed"
                    outline="secondary"
                    className="rounded-xl p-2"
                    iconClass="min-h-6 min-w-6"
                  >
                    Contact Sales
                  </Button>
                </Link>
              </div>

              <div className="w-full md:w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 px-4 md:px-0">
                <div className="space-y-10 mb-8 md:mb-0">
                  {/* Storage */}
                  <div>
                    <h4 className="text-base font-bold text-black mb-3">
                      {plan.sections.storage.title}
                    </h4>
                    <ul className="space-y-4">
                      {plan.sections.storage.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <span className="w-5 flex justify-center text-sm">
                            {item.icon}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Communicate */}
                  <div>
                    <h4 className="text-base font-bold text-black mb-3">
                      {plan.sections.communicate.title}
                    </h4>
                    <ul className="space-y-4">
                      {plan.sections.communicate.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <span className="w-5 flex justify-center text-sm">
                            {item.icon}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-10">
                  {/* Collaborate */}
                  <div>
                    <h4 className="text-base font-bold text-black mb-3">
                      {plan.sections.collaborate.title}
                    </h4>
                    <ul className="space-y-4">
                      {plan.sections.collaborate.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <span className="w-5 flex justify-center text-sm">
                            {item.icon}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Control */}
                  <div>
                    <h4 className="text-base font-bold text-black mb-3">
                      {plan.sections.control.title}
                    </h4>
                    <ul className="space-y-4">
                      {plan.sections.control.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                          <span className="w-5 flex justify-center text-sm">
                            {item.icon}
                          </span>
                          <span className="text-sm text-slate-700 font-medium">
                            {item.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
