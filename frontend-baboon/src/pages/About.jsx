import React from "react";

export default function About() {
    return (
        <section
            aria-labelledby="about-heading"
            className="max-w-4xl mx-auto mt-6 p-6 bg-white/5 dark:bg-gray-900 rounded-lg shadow-sm"
        >
            <header>
                <h2 id="about-heading" className="text-2xl font-semibold text-white">
                    About SpeakPace
                </h2>
                <p className="text-gray-300 mt-3 leading-relaxed">
                    SpeakPace (Bantering Baboon) is an MVP speech-coaching app that helps
                    speakers improve pace, reduce filler words, and sharpen emphasis. It
                    provides instant, data-driven feedback using modern web technologies.
                </p>
            </header>

            <ul className="mt-4 space-y-3">
                <li className="flex items-start text-gray-200">
                    <svg
                        className="flex-none w-5 h-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-3">Real-time pace and rhythm analysis</span>
                </li>

                <li className="flex items-start text-gray-200">
                    <svg
                        className="flex-none w-5 h-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-3">Filler-word detection and tips</span>
                </li>

                <li className="flex items-start text-gray-200">
                    <svg
                        className="flex-none w-5 h-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span className="ml-3">Emphasis and intonation feedback</span>
                </li>
            </ul>

            <div className="mt-6">
                <a
                    href="/try"
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                    Try SpeakPace
                </a>
            </div>
        </section>
    );
}