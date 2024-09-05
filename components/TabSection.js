"use client";

import { useState } from 'react';
import styles from './TabSection.module.css';


const tabs = ["About Me", "Experiences", "Recommended"];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
    <div className={styles.tabContainer}>
      <div className={styles.iconContainer}>
      <img src='/assests/images/questionIcon.png' alt='icon' className={styles.icon} />
      <img src='/assests/images/squIcon.png' alt='icon' className={styles.squicon} />
      </div>


      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeTab === "About Me" && <p>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br/><br/>
                                        I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>}
        {activeTab === "Experiences" && <p>Experience content goes here...</p>}
        {activeTab === "Recommended" && <p>Recommended content goes here...</p>}
      </div>
      <div className={styles.rectangle1}></div>
      </div>

      <div className={styles.rectangle2}></div>
      </>
  );
};

export default TabSection;
