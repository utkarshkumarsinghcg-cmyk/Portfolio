import React from 'react';
import './Achievements.css';
import { achievementList } from '../data';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Milestones and recognitions in my journey</p>
      </div>

      <div className="achievements-container">
        {achievementList.map((achievement) => (
          <div key={achievement.id} className="achievement-card">
            <div className="achievement-icon-wrapper">
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-glow"></div>
            </div>
            
            <div className="achievement-content">
              <div className="achievement-meta">
                <span className="achievement-date">{achievement.date}</span>
                <span className="achievement-badge">{achievement.badge}</span>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
