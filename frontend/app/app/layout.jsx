// /frontend/app/app/layout.js
import React from 'react';

export default function AppLayout({ children }) {
  return (
    <div>
      <header>
        <h1>App Subdomain Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
