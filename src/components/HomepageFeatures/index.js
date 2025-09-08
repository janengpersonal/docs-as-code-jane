import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <div className="container">
      {/* Diátaxis Framework Section */}
      <section className={styles.splitContainer}>
        {/* Left: Text Introduction */}
        <div className={styles.leftBlock}>
          <h2>Diátaxis Documentation Framework</h2>
          <p>
            I follow the{' '}
            <a
              href="https://diataxis.fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Diátaxis framework</strong>
            </a>{' '}
            to create technical documentation that supports users at every stage
            of their journey—from onboarding to offboarding. This approach
            ensures clear, purposeful content tailored to different learning
            needs.
          </p>
          <ul>
            <li>
              <strong>Tutorials:</strong> Step-by-step guides for beginners to
              learn by doing
            </li>
            <li>
              <strong>How-To Guides:</strong> Practical, goal-oriented
              instructions for specific tasks
            </li>
            <li>
              <strong>Reference:</strong> Concise, factual technical information
            </li>
            <li>
              <strong>Explanation:</strong> Context, background, and in-depth
              discussion
            </li>
          </ul>
        </div>
      </section>

      {/* About Me Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Left: Text */}
          <div className={styles.leftBlock}>
            <h2>Hello / 你好 / Xin chào!</h2>
            <p>
              Hi, I'm Thao Nguyen (Jane)—a Technical Writer and Lead UX Writer
              passionate about writing, product development, and user experience.
              This portfolio highlights my projects, problem-solving skills, and
              career aspirations. I'm open to remote or hybrid opportunities
              globally.
            </p>
            <p>
              Outside of work, I enjoy technology, travel, and yoga. Feel free to
              connect if we share interests! I am fluent in English, Mandarin,
              and Vietnamese.
            </p>
          </div>

          {/* Right: Image */}
          <div className={styles.rightBlock}>
            <img
              src="/img/jane-profile.jpg"
              alt="Thao Nguyen (Jane) profile"
              className={styles.profileImage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

