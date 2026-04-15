import { cn } from '../../lib/utils';
import { Bell } from 'lucide-react';

interface TopBarProps {
  title?: string;
  showAvatar?: boolean;
  avatarUrl?: string;
}

export function TopBar({ title = 'FitLog', showAvatar = true, avatarUrl }: TopBarProps) {
  return (
    <nav className="fixed top-4 inset-x-4 rounded-3xl glass flex justify-between items-center px-6 py-4 z-[60] ambient-shadow">
      <div className="flex items-center gap-3">
        {showAvatar && (
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img 
              className="w-full h-full object-cover" 
              src={avatarUrl || "https://picsum.photos/seed/athlete/200/200"} 
              alt="User profile"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        <span className="text-xl font-black text-primary font-headline tracking-tight">{title}</span>
      </div>
      
      <button className="p-2 rounded-full hover:bg-primary/10 transition-all active:scale-95 text-primary">
        <Bell size={24} />
      </button>
    </nav>
  );
}
