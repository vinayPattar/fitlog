/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TopBar } from './components/ui/TopBar';
import { BottomNav } from './components/ui/BottomNav';
import { Dashboard } from './screens/Dashboard';
import { Home } from './screens/Home';
import { WorkoutDetail } from './screens/WorkoutDetail';
import { Auth } from './screens/Auth';
import { Profile } from './screens/Profile';
import { EditWorkout } from './screens/EditWorkout';
import { AnimatePresence } from 'motion/react';

function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="min-h-screen bg-background">
      {!isAuthPage && <TopBar />}
      <main className={isAuthPage ? "" : "pt-28 pb-32 px-6 max-w-5xl mx-auto"}>
        {children}
      </main>
      {!isAuthPage && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workouts" element={<WorkoutDetail />} />
            <Route path="/edit-workout" element={<EditWorkout />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/metrics" element={<Dashboard />} /> {/* Placeholder */}
          </Routes>
        </AnimatePresence>
      </AppLayout>
    </Router>
  );
}


