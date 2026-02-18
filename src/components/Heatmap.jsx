import React, { useMemo } from 'react';
import './Heatmap.css';

const Heatmap = ({ submissionCalendar }) => {
    if (!submissionCalendar) return null;

    const { calendarData, totalSubmissions, streak, maxStreak, activeDays } = useMemo(() => {
        let data = {};
        try {
            data = JSON.parse(submissionCalendar);
        } catch (e) {
            console.error("Failed to parse submissionCalendar", e);
        }

        // Stats Calculation
        let total = 0;
        let active = 0;
        const timestamps = Object.keys(data).map(Number).sort((a, b) => a - b);

        // Convert to Set of date strings for easy lookup
        const dateSet = new Set();
        timestamps.forEach(ts => {
            total += data[ts];
            active++;
            const dateStr = new Date(ts * 1000).toDateString();
            dateSet.add(dateStr);
        });

        // Current Streak
        let currentStreak = 0;
        let checkDate = new Date();
        // Check today
        if (dateSet.has(checkDate.toDateString())) {
            currentStreak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            // Check yesterday (streak valid if solved yesterday)
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (dateSet.has(yesterday.toDateString())) {
                checkDate = yesterday;
                // Don't increment yet, loop will handle
            } else {
                // No streak active
                checkDate = null;
            }
        }

        if (checkDate) {
            while (true) {
                if (dateSet.has(checkDate.toDateString())) {
                    // If we already counted today, don't double count if logic falls through, 
                    // but simplified: just count backwards from the last "found" day.
                    // Let's restart simple:
                    break;
                }
                break;
            }
        }

        // Simplified Streak Logic:
        // 1. Get all unique sorted dates
        const uniqueDates = [...dateSet].map(d => new Date(d)).sort((a, b) => b - a); // Descending

        let localStreak = 0;
        let todayStr = new Date().toDateString();
        let yesterdayStr = new Date(Date.now() - 86400000).toDateString();

        if (uniqueDates.length > 0) {
            if (uniqueDates[0].toDateString() === todayStr) {
                localStreak = 1;
                let prev = uniqueDates[0];
                for (let i = 1; i < uniqueDates.length; i++) {
                    const curr = uniqueDates[i];
                    const diff = (prev - curr) / (1000 * 60 * 60 * 24);
                    if (Math.round(diff) === 1) {
                        localStreak++;
                        prev = curr;
                    } else {
                        break;
                    }
                }
            } else if (uniqueDates[0].toDateString() === yesterdayStr) {
                localStreak = 0; // It's 0 per LeetCode if you haven't solved today, but "active" from yesterday. 
                // Actually LeetCode shows "0" if not today. Let's show the "streak from yesterday" or just 0?
                // Visual preference: show the chain. But strict streak is 0.
                // Let's implement strict connected days (including today implies 1+).
                // Actually let's just count consecutive days ending today or yesterday.

                let prev = new Date(); // Start "today" conceptually
                // If not today, we check if chain starts yesterday
                if (!dateSet.has(todayStr) && dateSet.has(yesterdayStr)) {
                    // Streak broken technically, but let's count the historical streak
                    // Actually let's just use strict logic.
                    localStreak = 0;
                }
            }
        }

        // Find Max Streak (naive O(N))
        let maxS = 0;
        let tempS = 0;
        if (uniqueDates.length > 0) {
            // Sort Ascending for max calculation
            const ascDates = [...dateSet].map(d => new Date(d)).sort((a, b) => a - b);
            tempS = 1;
            maxS = 1;
            for (let i = 1; i < ascDates.length; i++) {
                const diff = (ascDates[i] - ascDates[i - 1]) / (1000 * 60 * 60 * 24);
                if (Math.round(diff) === 1) {
                    tempS++;
                } else {
                    maxS = Math.max(maxS, tempS);
                    tempS = 1;
                }
            }
            maxS = Math.max(maxS, tempS);
        }

        return { calendarData: data, totalSubmissions: total, streak: localStreak, maxStreak: maxS, activeDays: active };
    }, [submissionCalendar]);


    // Generate Calendar Grid (Weeks -> Days)
    const { weeks, monthLabels } = useMemo(() => {
        const today = new Date();
        const endDate = new Date(today);
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - 364); // 365 days total? LeetCode shows ~1 year

        // Align start date to Sunday? Or just raw 365 days?
        // LeetCode grid starts from a specific day of week aligned.
        // Let's simpler: Generate arrays.

        const allDays = [];
        for (let i = 0; i < 365; i++) {
            const d = new Date(startDate);
            d.setDate(d.getDate() + i);
            allDays.push(d);
        }

        const weeksArr = [];
        let currentWeek = [];
        const monthMap = []; // { label: 'Jan', index: 0 }

        allDays.forEach((day, index) => {
            if (day.getDate() === 1) { // Start of month
                // Approximate index in terms of weeks
                monthMap.push({ label: day.toLocaleString('default', { month: 'short' }), index: Math.floor(index / 7) });
            }

            // Check data
            const startOfDay = new Date(day).setHours(0, 0, 0, 0) / 1000;
            const endOfDay = new Date(day).setHours(23, 59, 59, 999) / 1000;
            let count = 0;
            Object.keys(calendarData).forEach(ts => {
                if (ts >= startOfDay && ts <= endOfDay) count += calendarData[ts];
            });

            currentWeek.push({ date: day, count });

            if (currentWeek.length === 7 || index === allDays.length - 1) {
                // But we want columns of 7 days (Sun-Sat). 
                // If we just push 7, it might not align with real weekdays.
                // Better approach: create a grid where rows are fixed (Sun, Mon, ...)
            }
        });

        // Correct approach: Group by Week (Column-based)
        // We need to know the day of the week of the start date.
        // Shift start date to previous Sunday to make full columns?

        const realStartDate = new Date(today);
        realStartDate.setDate(realStartDate.getDate() - 364);
        const dayOfWeek = realStartDate.getDay(); // 0 (Sun) - 6 (Sat)

        // Pad beginning
        const displayDays = [];
        /* 
           Actually, CSS Subgrid is hard.
           Standard approach: Flex container of Columns.
           Each Column has 7 cells (Sun-Sat).
        */

        // Adjust start to previous Sunday
        const alignStart = new Date(realStartDate);
        alignStart.setDate(alignStart.getDate() - alignStart.getDay());

        // Generate until Today (or end of this week)
        const alignEnd = new Date(today);

        const weeksData = [];
        let iter = new Date(alignStart);

        let tempWeek = [];
        while (iter <= alignEnd) {
            const startOfDay = new Date(iter).setHours(0, 0, 0, 0) / 1000;
            const endOfDay = new Date(iter).setHours(23, 59, 59, 999) / 1000;
            let count = 0;
            Object.keys(calendarData).forEach(ts => {
                if (ts >= startOfDay && ts <= endOfDay) count += calendarData[ts];
            });

            tempWeek.push({ date: new Date(iter), count });

            if (tempWeek.length === 7) {
                weeksData.push(tempWeek);
                tempWeek = [];
            }
            iter.setDate(iter.getDate() + 1);
        }
        if (tempWeek.length > 0) weeksData.push(tempWeek);

        // Calculate Month Labels based on the *first* week a month appears in
        const mT = [];
        weeksData.forEach((week, wIndex) => {
            const firstDay = week[0]; // Sunday
            // If this week contains the 1st of a month, or if it's the first label
            // Simplification: Check if the 1st of month is in this week
            const hasFirst = week.find(d => d.date.getDate() === 1);
            if (hasFirst) {
                mT.push({ label: hasFirst.date.toLocaleString('default', { month: 'short' }), weekIndex: wIndex });
            }
        });

        return { weeks: weeksData, monthLabels: mT };

    }, [calendarData]);

    const getColorClass = (count) => {
        if (count === 0) return 'level-0';
        if (count <= 3) return 'level-1';
        if (count <= 6) return 'level-2';
        if (count <= 9) return 'level-3';
        return 'level-4';
    };

    return (
        <div className="heatmap-container">
            <div className="heatmap-stats">
                <div className="stat-item">
                    <span className="h-stat-label">Total Submissions</span>
                    <span className="h-stat-val">{totalSubmissions}</span>
                </div>
                <div className="stat-item">
                    <span className="h-stat-label">Max Streak</span>
                    <span className="h-stat-val">{maxStreak}</span>
                </div>
                <div className="stat-item">
                    <span className="h-stat-label">Active Days</span>
                    <span className="h-stat-val">{activeDays}</span>
                </div>
            </div>

            <div className="heatmap-scroll">
                <div className="heatmap-graph">
                    {/* Month Labels Row */}
                    <div className="month-row">
                        {monthLabels.map((m, i) => (
                            <span
                                key={i}
                                className="month-label"
                                style={{
                                    left: `${m.weekIndex * 15}px` // 12px width + 3px gap approx
                                }}
                            >
                                {m.label}
                            </span>
                        ))}
                    </div>

                    <div className="graph-body">
                        {/* Day Labels Column */}
                        <div className="day-labels">
                            <span>Mon</span>
                            <span>Wed</span>
                            <span>Fri</span>
                        </div>

                        {/* Weeks Grid */}
                        <div className="weeks-grid">
                            {weeks.map((week, wIdx) => (
                                <div key={wIdx} className="week-col">
                                    {week.map((day, dIdx) => (
                                        <div
                                            key={dIdx}
                                            className={`day-cell ${getColorClass(day.count)}`}
                                            title={`${day.date.toDateString()}: ${day.count} submissions`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="heatmap-legend">
                <span>Less</span>
                <div className="level-0 day-cell sm"></div>
                <div className="level-1 day-cell sm"></div>
                <div className="level-2 day-cell sm"></div>
                <div className="level-3 day-cell sm"></div>
                <div className="level-4 day-cell sm"></div>
                <span>More</span>
            </div>
        </div>
    );
};

export default Heatmap;
