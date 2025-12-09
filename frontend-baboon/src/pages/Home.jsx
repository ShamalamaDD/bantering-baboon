import React from "react";
import UploadZone from "../components/UploadZone";
import FeatureCard from "../components/FeatureCard";
import { Zap, Mic, FileBarChart } from "lucide-react";

const FEATURES = [
  {
    title: "Pace Heatmap",
    desc: "Visualise your speaking rate over time — see where you speed up or slow down.",
    icon: FileBarChart,
  },
  {
    title: "Filler Word Report",
    desc: "Detects 'um', 'uh', and 'like' — showing spikes in your delivery confidence.",
    icon: Mic,
  },
  {
    title: "Emphasis Map",
    desc: "Highlights your vocal peaks and drops to train better expression.",
    icon: Zap,
  },
];

const STEPS = [
  "Upload a voice note (60s–300s).",
  "We transcribe & analyse — pace, pitch, intensity, filler words.",
  "Download the annotated PDF & practice scripts.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <header className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <article>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-300">
            🎙️ Speak Pace
          </h1>

          <p className="mt-4 text-gray-300 max-w-lg">
            SpeakPace helps presenters and interviewees understand their pacing,
            filler words, and emphasis through clean visuals and actionable
            practice scripts.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>
        </article>

        <aside>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div aria-label="Upload audio file" role="region">
              <UploadZone />
            </div>
          </div>
        </aside>
      </header>

      {/* How It Works */}
      <section className="mt-16 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4">How it works</h2>
        <ol className="text-gray-300 space-y-2 list-decimal list-inside">
          {STEPS.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
