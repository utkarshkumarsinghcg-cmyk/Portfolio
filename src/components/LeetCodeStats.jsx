import React, { useState, useEffect } from 'react';
import './LeetCodeStats.css';
import Heatmap from './Heatmap';
import { SiLeetcode } from 'react-icons/si';
import { FaTrophy, FaCheckCircle, FaCode } from 'react-icons/fa';

const LEETCODE_USERNAME = "XOkYAgzRLP";

const LeetCodeStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // GraphQL Query to get stats
                const query = `
                  query getUserStats($username: String!) {
                    matchedUser(username: $username) {
                      username
                      submissionCalendar
                      submitStats: submitStatsGlobal {
                        acSubmissionNum {
                          difficulty
                          count
                        }
                      }
                      profile {
                        ranking
                        realName
                        userAvatar
                      }
                    }
                     allQuestionsCount {
                        difficulty
                        count
                    }
                  }
                `;

                const response = await fetch('/leetcode-api/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username: LEETCODE_USERNAME }
                    })
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                if (data.errors) {
                    throw new Error(data.errors[0].message);
                }

                if (!data.data || !data.data.matchedUser) {
                    throw new Error("User not found");
                }

                const user = data.data.matchedUser;
                const submissionNum = user.submitStats.acSubmissionNum;
                const allCounts = data.data.allQuestionsCount;

                // Process Data
                const totalSolved = submissionNum.find(i => i.difficulty === 'All').count;
                const easySolved = submissionNum.find(i => i.difficulty === 'Easy').count;
                const mediumSolved = submissionNum.find(i => i.difficulty === 'Medium').count;
                const hardSolved = submissionNum.find(i => i.difficulty === 'Hard').count;

                const totalEasy = allCounts.find(i => i.difficulty === 'Easy').count;
                const totalMedium = allCounts.find(i => i.difficulty === 'Medium').count;
                const totalHard = allCounts.find(i => i.difficulty === 'Hard').count;

                // Acceptance Rate (Estimate if not directly available, or just omit/use mock if needed. 
                // Creating a rough calc or just showing "N/A" if not in this query, but let's assume valid data)
                // NOTE: Acceptance rate isn't in this specific query easily without more complex calls, 
                // so we'll replace "Acceptance Rate" card with something else or calculate a simple ratio if desired.
                // For now, let's use a placeholder or calculate based on submissions if we had total submissions.
                // Let's replace Acceptance Rate with "Easy/Medium/Hard" summary or just hide it.
                // Actually, let's just use "Ranking" and maybe "Real Name" or "Contribution".
                // Let's keep it simple.

                setStats({
                    totalSolved,
                    ranking: user.profile.ranking || "N/A",
                    acceptanceRate: "N/A",
                    easySolved,
                    mediumSolved,
                    hardSolved,
                    totalEasy,
                    totalMedium,
                    totalHard,
                    avatar: user.profile.userAvatar,
                    submissionCalendar: user.submissionCalendar
                });
                setLoading(false);

            } catch (err) {
                console.error("Error fetching LeetCode stats:", err);
                setError("Could not load LeetCode data.");
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return (
            <section className="leetcode-section">
                <div className="leetcode-loading">
                    <SiLeetcode className="leetcode-icon-spin" />
                    <p>Fetching Code Data...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="leetcode-section" id="leetcode">
                <div className="error-container" style={{ textAlign: 'center', padding: '2rem' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)' }}>{error}</p>
                    <a href={`https://leetcode.com/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="leetcode-btn">
                        View Profile on LeetCode
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section className="leetcode-section" id="leetcode">
            <div className="leetcode-header">
                <h2><SiLeetcode className="leetcode-title-icon" /> LeetCode Stats</h2>
                <p>Consistent problem solving and continuous learning.</p>
            </div>

            <div className="leetcode-container">
                <div className="stat-card total-solved">
                    <div className="stat-icon-wrapper">
                        <FaCode />
                    </div>
                    <div className="stat-info">
                        <h3>{stats.totalSolved}</h3>
                        <p>Total Solved</p>
                    </div>
                </div>

                <div className="stat-card ranking">
                    <div className="stat-icon-wrapper">
                        <FaTrophy />
                    </div>
                    <div className="stat-info">
                        <h3>{stats.ranking}</h3>
                        <p>Global Ranking</p>
                    </div>
                </div>

                {/* Replaced Acceptance Rate with Avatar/Profile info or just hidden for now if 'N/A' */}
                <div className="stat-card profile-card">
                    <div className="stat-icon-wrapper" style={{ overflow: 'hidden', padding: 0 }}>
                        <img src={stats.avatar} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="stat-info">
                        <h3>{LEETCODE_USERNAME}</h3>
                        <p>Profile</p>
                    </div>
                </div>


                <div className="difficulty-breakdown">
                    <div className="difficulty-item easy">
                        <span className="diff-label">Easy</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(stats.easySolved / stats.totalEasy) * 100}%` }}></div>
                        </div>
                        <span className="diff-count">{stats.easySolved} <span className="diff-total">/ {stats.totalEasy}</span></span>
                    </div>
                    <div className="difficulty-item medium">
                        <span className="diff-label">Medium</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(stats.mediumSolved / stats.totalMedium) * 100}%` }}></div>
                        </div>
                        <span className="diff-count">{stats.mediumSolved} <span className="diff-total">/ {stats.totalMedium}</span></span>
                    </div>
                    <div className="difficulty-item hard">
                        <span className="diff-label">Hard</span>
                        <div className="progress-bar">
                            <div className="progress-fill" style={{ width: `${(stats.hardSolved / stats.totalHard) * 100}%` }}></div>
                        </div>
                        <span className="diff-count">{stats.hardSolved} <span className="diff-total">/ {stats.totalHard}</span></span>
                    </div>
                </div>
            </div>

            <div className="leetcode-actions">
                <a href={`https://leetcode.com/${LEETCODE_USERNAME}/`} target="_blank" rel="noopener noreferrer" className="leetcode-btn">
                    Visit LeetCode Profile
                </a>
            </div>

            <Heatmap submissionCalendar={stats.submissionCalendar} />
        </section>
    );
};

export default LeetCodeStats;
