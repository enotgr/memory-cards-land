import { useEffect, useState } from 'react';

import heroImage from '../images/831shots_so.png';
import overviewImage from '../images/975shots_so.png';
import flowImage from '../images/946shots_so.png';
import themesImage from '../images/732shots_so.png';
import collectionsImage from '../images/622shots_so.png';
import collectionDetailImage from '../images/851shots_so.png';
import answerImage from '../images/489shots_so.png';
import editorImage from '../images/774shots_so.png';
import trainingImage from '../images/606shots_so.png';
import cardPracticeImage from '../images/378shots_so.png';
import widgetImage from '../images/845shots_so.png';
import logoImageWhite from '../images/logo_white.png';
import logoImageGray from '../images/logo_gray.png';

const supportEmail = 'enotgr.company@gmail.com';
const currentYear = new Date().getFullYear();

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (route === 'features') {
      requestAnimationFrame(() => {
        document.getElementById('features')?.scrollIntoView();
      });
    }
  }, [route]);

  return (
    <div className={route === '/privacy' ? 'app-shell privacy-page' : 'app-shell'}>
      <Header />
      <main>{route === '/privacy' ? <PrivacyPolicy /> : <Home />}</main>
      <Footer />
    </div>
  );
}

function getRoute() {
  return window.location.hash.replace('#', '') || '/';
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#/" aria-label="Memory Cards home">
        <img className="brand-mark" src={logoImageGray} alt="" aria-hidden="true" />
        <span>Memory Cards</span>
      </a>
    </header>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src={heroImage} alt="" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Create, organize, practice</p>
          <h1>Memory Cards</h1>
          <p className="hero-text">
            Create collections, add front and back cards, and practice what you
            want to remember in a calm app built for everyday use
          </p>
        </div>
      </section>

      <section id="features" className="feature-lead">
        <p className="eyebrow">Built for daily study</p>
        <h2>All the essentials, without the clutter</h2>
        <p>
          Memory Cards keeps the full workflow visible: collect, create,
          practice, and keep cards returning through the widget
        </p>
      </section>

      <section className="showcase-panel">
        <div className="showcase-copy">
          <p className="eyebrow">Overview</p>
          <h2>A calm place for everything you want to remember</h2>
          <p>
            Memory Cards keeps collections, cards, training, and the widget in
            one focused iPhone experience
          </p>
        </div>
        <div className="wide-render">
          <img src={overviewImage} alt="Memory Cards app overview screens" />
        </div>
      </section>

      <section className="wide-feature tone-light">
        <div className="feature-copy">
          <p className="eyebrow">Collections</p>
          <h2>Separate every subject cleanly</h2>
          <p>
            Keep topics, terms, dates, formulas, questions, or any personal set
            in its own collection with a color and icon that makes it easy to
            recognize
          </p>
        </div>
        <div className="device-pair collection-pair">
          <img src={collectionsImage} alt="Memory Cards collections screen" />
          <img src={collectionDetailImage} alt="Memory Cards collection detail screen" />
        </div>
      </section>

      <section className="statement-band tone-ink">
        <div className="statement-copy">
          <p className="eyebrow">Cards</p>
          <h2>Front and back, made fast</h2>
          <p>
            Add only what matters: a prompt on one side and the answer on the
            other, while the app stays fast because the card model stays simple
          </p>
        </div>
      </section>

      <section className="wide-feature answer-feature tone-light">
        <div className="feature-copy">
          <p className="eyebrow">Answers</p>
          <h2>Accept the answers people actually type</h2>
          <p>
            Add alternative answers so training can count spelling variants,
            synonyms, shorthand, or other accepted responses as correct
          </p>
        </div>
        <div className="single-device">
          <img src={answerImage} alt="New card editor with alternative answers" />
        </div>
      </section>

      <section className="flow-panel">
        <img className="flow-bg" src={flowImage} alt="" aria-hidden="true" />
        <div className="showcase-copy">
          <p className="eyebrow">Flow</p>
          <h2>Create, practice, return later</h2>
          <p>
            The experience is intentionally simple: add cards when you need
            them, review from a collection, then let the widget keep one card in
            sight
          </p>
        </div>
      </section>

      <section className="wide-feature reverse tone-light">
        <div className="feature-copy">
          <p className="eyebrow">Training</p>
          <h2>Practice sessions stay focused</h2>
          <p>
            Open a collection, move through cards one by one, and finish a
            session without dashboards, streak pressure, or extra screens
          </p>
        </div>
        <div className="device-pair compact">
          <img src={cardPracticeImage} alt="Single card practice screen" />
          <img src={trainingImage} alt="Training completed screen" />
        </div>
      </section>

      <section className="widget-feature tone-light">
        <div className="widget-image">
          <img src={widgetImage} alt="Memory Cards widget on iPhone Home Screen" />
        </div>
        <div className="feature-copy">
          <p className="eyebrow">Widget</p>
          <h2>Let cards come back by themselves</h2>
          <p>
            Pick a collection for the Home Screen widget and see a random card
            from that set throughout the day
          </p>
        </div>
      </section>

      <section className="statement-band tone-ink">
        <span className="reminder-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img">
            <path d="M10.3 21a2 2 0 0 0 3.4 0" />
            <path d="M18.6 8.2a6.6 6.6 0 0 0-13.2 0c0 6.8-2.4 7.5-2.4 9.3h18c0-1.8-2.4-2.5-2.4-9.3Z" />
            <path d="M4 3.6a10.4 10.4 0 0 0-2.5 5.2" />
            <path d="M20 3.6a10.4 10.4 0 0 1 2.5 5.2" />
          </svg>
        </span>
        <div className="statement-copy">
          <p className="eyebrow">Reminders</p>
          <h2>Practice at the right moment</h2>
          <p>
            Set a daily notification for a specific time and let Memory Cards
            remind you to return before practice slips away
          </p>
        </div>
      </section>

      <section className="showcase-panel">
        <div className="showcase-copy">
          <p className="eyebrow">Personal</p>
          <h2>Collections can still feel yours</h2>
          <p>
            Use colors, icons, light mode, or dark mode to make sets easy to
            scan while the interface stays quiet
          </p>
        </div>
        <div className="wide-render split-render">
          <img src={themesImage} alt="Memory Cards light and dark mode screens" />
          <img src={editorImage} alt="Collection customization screen" />
        </div>
      </section>

      <section className="closing-panel">
        <div>
          <p className="eyebrow">Memory Cards</p>
          <h2>Small enough to use every day</h2>
          <p>
            A focused place for the terms, facts, and notes you want to
            remember
          </p>
        </div>
      </section>
    </>
  );
}

function PrivacyPolicy() {
  return (
    <article className="policy">
      <p className="eyebrow">Last updated: May 26, 2026</p>
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how Memory Cards handles information when
        you use the iPhone app and its Home Screen widget
      </p>

      <h2>Information We Collect</h2>
      <p>
        Memory Cards does not collect personal information through the app. The
        app does not require an account, does not include advertising, and does
        not send your card content to us
      </p>

      <h2>Your Card Content</h2>
      <p>
        Collections, cards, front sides, back sides, colors, icons, and widget
        preferences are created by you and stored locally on your device. The
        Home Screen widget uses the selected collection to display cards from
        your saved content
      </p>

      <h2>Data Storage and Deletion</h2>
      <p>
        Your saved content remains on your device until you delete it. You can
        delete collections and cards in the app, or remove local app data by
        deleting Memory Cards from your device
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Memory Cards does not use third-party analytics, advertising SDKs, or
        cross-app tracking services
      </p>

      <h2>Support Requests</h2>
      <p>
        If you contact us by email, we receive the email address and information
        you choose to include. We use that information only to respond to your
        request
      </p>

      <h2>Children's Privacy</h2>
      <p>
        Memory Cards is not designed to collect personal information from
        children
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy when the app changes. The updated
        version will be posted on this page with a new effective date
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
      </p>
    </article>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span className="footer-brand">
        <img src={logoImageWhite} alt="" aria-hidden="true" />
        <span>Memory Cards</span>
      </span>
      <div className="footer-links">
        <a href={`mailto:${supportEmail}`}>Support: {supportEmail}</a>
        <a href="#/privacy">Privacy Policy</a>
      </div>
      <span className="footer-copy">© {currentYear} Memory Cards. All rights reserved</span>
    </footer>
  );
}

export default App;
