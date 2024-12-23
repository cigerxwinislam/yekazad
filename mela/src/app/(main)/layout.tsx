// Bismillahirrahmanirrahim



import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full max-w-7xl mx-auto gap-5 p-5">
        {children}
      </div>
    </div>
  );
} export default Layout;