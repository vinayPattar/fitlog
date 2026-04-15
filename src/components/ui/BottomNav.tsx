import { cn } from '../../lib/utils';
import { LayoutGrid, Dumbbell, User, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: LayoutGrid, label: 'Dashboard', path: '/dashboard' },
  { icon: Dumbbell, label: 'Workouts', path: '/workouts' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-6 inset-x-6 rounded-[40px] h-20 glass ambient-shadow flex justify-around items-center px-6 z-50">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300",
              isActive 
                ? "bg-gradient-to-br from-primary to-primary-container text-white rounded-full w-14 h-14 mb-8 shadow-lg shadow-primary/20 active:scale-90"
                : "text-on-surface-variant hover:text-primary active:scale-90"
            )}
          >
            <item.icon size={isActive ? 28 : 24} />
            {!isActive && (
              <span className="font-body font-medium text-[10px] uppercase tracking-widest mt-1">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
