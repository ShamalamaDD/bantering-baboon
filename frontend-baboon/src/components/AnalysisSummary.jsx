import React from "react";
import PropTypes from "prop-types";

export default function AnalysisSummary({ data = {} }) {
    const wpmArray = Array.isArray(data.wpm) ? data.wpm : [];
    const fillersArray = Array.isArray(data.fillers) ? data.fillers : [];

    const avgWpm =
        wpmArray.length > 0
            ? Math.round(
                    wpmArray.reduce((sum, item) => sum + (Number(item?.wpm) || 0), 0) / wpmArray.length
                )
            : null;

    const totalFillers = fillersArray.reduce((sum, f) => sum + (Number(f?.count) || 0), 0);

    // Prefer an explicit duration if provided; otherwise fall back to number of WPM samples
    const durationSeconds =
        Number.isFinite(Number(data.duration)) && data.duration !== ""
            ? Math.round(Number(data.duration))
            : wpmArray.length || 0;

    const StatCard = ({ label, value, hint }) => (
        <div className="card" role="group" aria-label={label}>
            <div className="text-xs text-gray-400">{label}</div>
            <div className="text-2xl font-semibold mt-2">{value ?? "—"}</div>
            <div className="text-sm text-gray-300 mt-2">{hint}</div>
        </div>
    );

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
                label="Average Pace"
                value={avgWpm ? `${avgWpm} WPM` : null}
                hint="Aim for consistent pacing between 100–130 WPM for clarity."
            />

            <StatCard
                label="Filler words"
                value={totalFillers}
                hint="Count of detected filler words (um, uh, like, etc.)"
            />

            <StatCard
                label="Duration"
                value={`${durationSeconds}s`}
                hint="Length of the analysed clip (seconds)"
            />
        </div>
    );
}

AnalysisSummary.propTypes = {
    data: PropTypes.shape({
        wpm: PropTypes.arrayOf(
            PropTypes.shape({
                wpm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            })
        ),
        fillers: PropTypes.arrayOf(
            PropTypes.shape({
                count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            })
        ),
        duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
};