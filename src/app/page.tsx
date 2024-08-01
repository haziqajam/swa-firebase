// pages/index.tsx
import React from 'react';
import NotificationSystem from '../components/NotificationSystem';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        
        <title>Ivan Avra Job Test</title>
        <meta name="description" content="A simple notification system using React and Firebase." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Ivan Avra Job Test</h1>
        <div className="w-full max-w-md">
          <NotificationSystem />
        </div>
      </main>
    </>
  );
};

export default Home;
