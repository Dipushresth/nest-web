import Button from "@/components/shared/button/Button";
import Link from "next/link";

const featureList = [
  {
    title: "Premium AI built-in",
    desc: "Do your best work faster with the Gemini app, NotebookLM, and Gemini in Gmail, Docs, Sheets, and more.",
  },
  {
    title: "Tools born in the Cloud",
    desc: "Collaborate in real time, from any device, across tools that are always up-to-date.",
  },
  {
    title: "Enterprise-grade security",
    desc: "Protect your emails, files, and meetings with AI-powered security and compliance controls.",
  },
];
export default function FeatureSection() {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-slateblacking-tight mb-2">
          <span className="text-primary"> सबै</span> Tools
          <span className="text-primary"> एउटै </span> Platform
          <span className="text-primary"> मा </span>
        </h2>
        <h3
          className="text-2xl md:text-[46px] font-bold  mb-4 md:mb-8 font-sans bg-linear-to-r from-primary-100 via-primary-200 to-primary-50
               text-transparent bg-clip-text"
        >
          Google Workspace
        </h3>

        <div className="space-y-16">
          <div className="grid md:grid-cols-3 gap-10 justify-center">
            {featureList.map((f) => (
              <div
                key={f.title}
                className="p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all group"
              >
                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {f.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/">
            <Button iconRight="quotation">Get a Quotation</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
