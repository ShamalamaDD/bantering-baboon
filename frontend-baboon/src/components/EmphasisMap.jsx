import React, { useId, memo } from 'react'
import PropTypes from 'prop-types'
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts'

function EmphasisMap({ data = [] }) {
    // useId is available in React 18+; fall back to a random id for older versions / SSR safety
    const gradientId =
        (typeof useId === 'function' ? useId() : null) || `grad-${Math.random().toString(36).slice(2, 9)}`

    if (!Array.isArray(data) || data.length === 0) {
        return (
            <div
                style={{
                    width: '100%',
                    height: 260,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    fontSize: 14,
                }}
            >
                No emphasis data
            </div>
        )
    }

    const tooltipFormatter = (value, name) => {
        return [value, name === 'pitch' ? 'Pitch (Hz)' : name === 'intensity' ? 'Intensity' : name]
    }

    return (
        <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid stroke="#0f172a" strokeOpacity={0.04} />
                    <XAxis dataKey="t" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fill: '#cbd5e1', fontSize: 12 }} allowDecimals={false} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fill: '#cbd5e1', fontSize: 12 }} domain={[0, 1]} />
                    <Tooltip formatter={tooltipFormatter} cursor={{ stroke: '#f59e0b', strokeOpacity: 0.1 }} />

                    <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="pitch"
                        stroke="#fbbf24"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={false}
                    />
                    <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="intensity"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

EmphasisMap.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            pitch: PropTypes.number,
            intensity: PropTypes.number,
        })
    ),
}

export default memo(EmphasisMap)
