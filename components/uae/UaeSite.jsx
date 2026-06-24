'use client';

import { useState } from 'react';
import EmirateExplorer from '@/components/uae/EmirateExplorer';
import EmirateModal from '@/components/uae/EmirateModal';
import Header from '@/components/uae/Header';
import Hero from '@/components/uae/Hero';
import { emirates } from '@/data/uae/emirates';

export default function UaeSite() {
  const [activeKey, setActiveKey] = useState(emirates[0].key);
  const [scrollRequestKey, setScrollRequestKey] = useState(null);
  const [modalKey, setModalKey] = useState(null);

  const focusEmirate = (key) => {
    setActiveKey(key);
    setScrollRequestKey(key);
    document
      .getElementById('explorer')
      ?.scrollIntoView({ behavior: 'smooth' });
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
          onEmirateOpen={setModalKey}
        />
      </div>
      {modalKey && (
        <EmirateModal
          key={modalKey}
          emirateKey={modalKey}
          onClose={() => setModalKey(null)}
        />
      )}
    </div>
  );
}
