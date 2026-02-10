"use client";
import { useState } from "react";

interface TabItem {
  id: string;
  title: string;
  description: React.ReactNode;
}

interface FeatureTabsProps {
  headline?: string;
  subHeadline?: string;
  tabs?: TabItem[];
}

const defaultTabs: TabItem[] = [
  {
    id: "files",
    title: "Your files, all in one place",
    description: (
      <>
        Edit and organize{" "}
        <span className="text-blue-600 cursor-pointer hover:underline">
          Google Docs
        </span>
        ,
        <span className="text-blue-600 cursor-pointer hover:underline">
          {" "}
          Sheets
        </span>
        ,
        <span className="text-blue-600 cursor-pointer hover:underline">
          {" "}
          Slides
        </span>
        , Microsoft Office files, and PDFs in real-time. Plus, access over 100
        other file types!
      </>
    ),
  },
  {
    id: "annotate",
    title: "Annotate PDFs",
    description:
      "Directly markup and comment on PDF documents within your workspace without needing external software. Collaborate on feedback instantly.",
  },
  {
    id: "ai-search",
    title: "AI-powered search",
    description:
      "Use the power of Google AI to find exactly what you need across all your files, emails, and meetings. Context-aware results at your fingertips.",
  },
  {
    id: "activity",
    title: "Activity view",
    description:
      "Stay updated with a chronological view of changes and interactions. Know who accessed what and when, ensuring transparency and security.",
  },
];

const FeatureTabs: React.FC<FeatureTabsProps> = ({
  headline = "Brands using Google Workspace to succeed online, कसरी?",
  subHeadline = "कसरी teams Google Workspace सँग productivity बढाउँछन् र समय बचत गर्छन्",
  tabs = defaultTabs,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {headline.split(",")[0]},{" "}
            <span className="text-blue-600">{headline.split(",")[1]}</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            {subHeadline}
          </p>
          <div className="w-12 h-1 bg-[#f06292] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
            <div className="absolute inset-0 border border-slate-100 rounded-full animate-[spin_60s_linear_infinite]"></div>

            <div className="absolute inset-[15%] border border-slate-100 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

            <div className="relative z-10 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex items-center justify-center p-8">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"
                alt="Drive"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/01/Google_Docs_logo_%282014-2020%29.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Docs"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-lg shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/16/Google_Slides_logo_%282014-2020%29.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Slides"
                />
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Sheets"
                />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg shadow-md">
                <span className="text-xl md:text-2xl">X</span>
              </div>

              <div className="absolute top-[15%] left-[15%] bg-white p-2 rounded-lg shadow-md">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
                  W
                </div>
              </div>
              <div className="absolute top-[15%] right-[15%] bg-white p-2 rounded-lg shadow-md">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded flex items-center justify-center text-white font-bold text-xs">
                  PDF
                </div>
              </div>
            </div>


            <div className="absolute inset-[15%] flex items-center justify-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-slate-50 p-1.5 rounded-full shadow-sm">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Forms_2020.svg"
                  className="w-5 h-5 md:w-6 md:h-6"
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 right-1/4 bg-slate-50 p-1.5 rounded-full shadow-sm">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-slate-400">
                  📁
                </div>
              </div>
              <div className="absolute left-0 top-1/2 bg-slate-50 p-1.5 rounded-full shadow-sm">
                <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center text-slate-400">
                  🔑
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`pl-6 border-l-4 transition-all duration-300 cursor-pointer ${
                    activeTab === tab.id
                      ? "border-blue-600"
                      : "border-transparent hover:border-slate-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold mb-3 ${
                      activeTab === tab.id ? "text-slate-900" : "text-slate-500"
                    }`}
                  >
                    {tab.title}
                  </h3>

                  {activeTab === tab.id && (
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {tab.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTabs;
