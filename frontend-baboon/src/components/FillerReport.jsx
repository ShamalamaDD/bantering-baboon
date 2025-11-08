import React from 'react'
import PropTypes from 'prop-types'

export default function FillerReport({ fillers = [] }) {
    if (!Array.isArray(fillers) || fillers.length === 0) {
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
                No filler data
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {fillers.map((filler, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                    <span className="text-white font-medium">{filler.word}</span>
                    <span className="text-gray-400">{filler.count} times</span>
                </div>
            ))}
        </div>
    )
}

FillerReport.propTypes = {
    fillers: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ),
}
