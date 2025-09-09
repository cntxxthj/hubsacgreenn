// src/app/dashboard/layout.tsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">HUB SAC</h2>
      <nav>
        <ul>
          <li className="mb-2"><a href="/dashboard" className="block p-2 rounded hover:bg-gray-700">Dashboard</a></li>
          <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-gray-700">Treinamentos</a></li>
          <li className="mb-2"><a href="#" className="block p-2 rounded hover:bg-gray-700">Turnos</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-8 text-white">{children}</main>
    </div>
  );
}