import React, { useState } from 'react'

export default function DownloadReport({ data, endpoint = '/api/reports/annotated', filename = 'annotated-report.pdf' }) {
    const [loading, setLoading] = useState(false)

    async function handleDownload() {
        if (loading) return
        setLoading(true)
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/pdf' },
                body: JSON.stringify(data), // send the analysis data to the backend
            })

            if (!res.ok) throw new Error(`Request failed: ${res.status} ${res.statusText}`)

            const blob = await res.blob()
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = filename
            document.body.appendChild(a)
            a.click()
            a.remove()
            URL.revokeObjectURL(url)
        } catch (err) {
            console.error(err)
            alert('Failed to download report. See console for details.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <button
            onClick={handleDownload}
            disabled={loading}
            className={`px-5 py-2 rounded-full text-white ${
                loading ? 'opacity-60 cursor-not-allowed bg-gradient-to-r from-cyan-200 to-blue-300' : 'bg-gradient-to-r from-cyan-400 to-blue-500'
            }`}
        >
            {loading ? 'Preparing download…' : 'Download Annotated PDF'}
        </button>
    )
}
