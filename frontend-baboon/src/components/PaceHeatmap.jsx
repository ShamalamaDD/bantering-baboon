import React, { useId, memo } from 'react'
import PropTypes from 'prop-types'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
} from 'recharts'

function PaceHeatmap({ data = [] }) {
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
                No pace data
            </div>
        )
    }

    const tooltipFormatter = (value, name) => {
        return [value, name === 'wpm' ? 'WPM' : name]
    }

    return (
        <div style={{ width: '100%', height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fb7185" stopOpacity={0.9} />
                            <stop offset="100%" stopColor="#f97316" stopOpacity={0.1} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid stroke="#0f172a" strokeOpacity={0.04} />
                    <XAxis dataKey="t" tick={{ fill: '#cbd5e1', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#cbd5e1', fontSize: 12 }} allowDecimals={false} />
                    <Tooltip formatter={tooltipFormatter} cursor={{ stroke: '#f97316', strokeOpacity: 0.1 }} />

                    <Area
                        type="monotone"
                        dataKey="wpm"
                        stroke="#fb7185"
                        fill={`url(#${gradientId})`}
                        fillOpacity={1}
                        isAnimationActive={false}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

PaceHeatmap.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            t: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            wpm: PropTypes.number,
        })
    ),
}

export default memo(PaceHeatmap)