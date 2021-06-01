import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center text-center ml-4 mr-4 md:ml-0 md:mr-0">
      <h2 className="text-blue-600 dark:text-blue-500 text-4xl md:text-6xl font-bold">
        Atomic
      </h2>
      <h3 className="text-white dark:text-white pt-1 md:pt-5 text-lg">
        Coming soon. You can check my progress on{' '}
        <a
          className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          href="https://github.com/Xenfo/atomic"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </h3>
      <p className="text-gray-500 dark:text-gray-400 italic text-base md:pt-1">
        If you want Atomic out quickly how about you come and help me? :D
      </p>
    </div>
  );
};

export default Index;
