'use client';

import { useRef, useState } from 'react';
import DubaiVideoIntro from '@/components/DubaiVideoIntro';
import EmirateVideoIntro from '@/components/EmirateVideoIntro';
import FujairahVideoIntro from '@/components/FujairahVideoIntro';
import EmirateExplorer from '@/components/uae/EmirateExplorer';
import EmirateModal from '@/components/uae/EmirateModal';
import Header from '@/components/uae/Header';
import Hero from '@/components/uae/Hero';
import SiteFooter from '@/components/uae/SiteFooter';
import { emirates } from '@/data/uae/emirates';

export default function UaeSite() {
  const [activeKey, setActiveKey] = useState(emirates[0].key);
  const [scrollRequestKey, setScrollRequestKey] = useState(null);
  const [modalKey, setModalKey] = useState(null);
  const [showAbuDhabiIntro, setShowAbuDhabiIntro] = useState(false);
  const [showDubaiIntro, setShowDubaiIntro] = useState(false);
  const [showFujairahIntro, setShowFujairahIntro] = useState(false);
  const abuDhabiIntroShown = useRef(false);
  const dubaiIntroShown = useRef(false);
  const fujairahIntroShown = useRef(false);

  const focusEmirate = (key) => {
    setActiveKey(key);
    setScrollRequestKey(key);
    document
      .getElementById('explorer')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEmirateOpen = (emirateKey) => {
    setModalKey(emirateKey);

    if (emirateKey === 'abuDhabi' && !abuDhabiIntroShown.current) {
      abuDhabiIntroShown.current = true;
      setShowAbuDhabiIntro(true);
    }

    if (emirateKey === 'dubai' && !dubaiIntroShown.current) {
      dubaiIntroShown.current = true;
      setShowDubaiIntro(true);
    }

    if (emirateKey === 'fujairah' && !fujairahIntroShown.current) {
      fujairahIntroShown.current = true;
      setShowFujairahIntro(true);
    }
  };

  return (
    <div>
      <Header activeKey={activeKey} onEmirateClick={focusEmirate} />
      <Hero />
      <div id="explorer">
        <EmirateExplorer
          activeKey={activeKey}
          scrollRequestKey={scrollRequestKey}
          onActiveChange={setActiveKey}
          onEmirateOpen={handleEmirateOpen}
        />
      </div>
      {modalKey && (
        <EmirateModal
          key={modalKey}
          emirateKey={modalKey}
          onClose={() => setModalKey(null)}
        />
      )}
      {showAbuDhabiIntro && (
        <EmirateVideoIntro onDismiss={() => setShowAbuDhabiIntro(false)} />
      )}
      {showDubaiIntro && (
        <DubaiVideoIntro onDismiss={() => setShowDubaiIntro(false)} />
      )}
      {showFujairahIntro && (
        <FujairahVideoIntro onDismiss={() => setShowFujairahIntro(false)} />
      )}
      <SiteFooter />
    </div>
  );
}
