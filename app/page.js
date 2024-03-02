'use client';
import React, { useEffect } from 'react';
import { useTimeStore } from './_utils/store.js'; // Correct path to your timeStore
import { dosagesStore } from './_utils/store.js'; // Correct path to your dosagesStore

export default function Home() {
  const setCurrentTime = useTimeStore((state) => state.setCurrentTime);
  const currentTime = useTimeStore((state) =>
    state.currentTime.toLocaleTimeString()
  );
  const dosages = dosagesStore((state) => state.dosages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [setCurrentTime]);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-500'>
      <h1 className='text-4xl font-bold'>{currentTime}</h1>
      <ul>
        {dosages.map((dosage) => (
          <li key={dosage.id}>{dosage.name}</li>
        ))}
      </ul>
    </main>
  );
}
