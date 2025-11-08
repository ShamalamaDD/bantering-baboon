import React, { useMemo } from 'react'
import AnalysisSummary from '../components/AnalysisSummary'
import PaceHeatmap from '../components/PaceHeatmap'
import FillerReport from '../components/FillerReport'
import EmphasisMap from '../components/EmphasisMap'
import DownloadReport from '../components/DownloadReport'

export default function Analysis() {
    // demo data (memoized so it's stable across renders)
    const data = useMemo(() => {
        const wpm = Array.from({ length: 60 }, (_, i) => ({
            t: i,
            wpm: Math.round(110 + 20 * Math.sin(i / 6)),
        }))

        const fillers = [
            { word: 'um', count: 6 },
            { word: 'uh', count: 3 },
            { word: 'like', count: 4 },
        ]

        const emphasis = Array.from({ length: 60 }, (_, i) => ({
            t: i,
            pitch: Math.round(200 + 40 * Math.cos(i / 5)),
            intensity: +(0.6 + 0.3 * Math.abs(Math.sin(i / 7))).toFixed(2),
        }))

        return { wpm, fillers, emphasis }
    }, [])

    if (!data) {
        return (
            <div className="max-w-6xl mx-auto mt-6">
                <p className="text-center text-sm text-gray-500">No analysis available.</p>
            </div>
        )
    }

    return (
        <main className="max-w-6xl mx-auto mt-6 space-y-8" aria-labelledby="analysis-heading">
            <h1 id="analysis-heading" className="sr-only">
                Analysis
            </h1>

            <section aria-label="Summary">
                <AnalysisSummary data={data} />
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6" aria-label="Detailed reports">
                <article className="card" aria-labelledby="pace-heading">
                    <h2 id="pace-heading" className="text-lg font-semibold mb-4">
                        Pace Heatmap
                    </h2>
                    <PaceHeatmap data={data.wpm} />
                </article>

                <article className="card" aria-labelledby="filler-heading">
                    <h2 id="filler-heading" className="text-lg font-semibold mb-4">
                        Filler-Word Report
                    </h2>
                    <FillerReport fillers={data.fillers} />
                </article>

                <article className="card lg:col-span-2" aria-labelledby="emphasis-heading">
                    <h2 id="emphasis-heading" className="text-lg font-semibold mb-4">
                        Emphasis Map
                    </h2>
                    <EmphasisMap data={data.emphasis} />
                </article>
            </section>

            <div className="flex justify-end">
                {/* pass data to the downloader so it can build a report */}
                <DownloadReport data={data} />
            </div>
        </main>
    )
}