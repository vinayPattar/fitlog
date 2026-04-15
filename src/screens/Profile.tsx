import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Edit2, Lock, ChevronRight, Moon, Bell, Shield, LogOut, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Profile() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <section className="text-center">
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
            <img 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/alex/300/300" 
              alt="Profile"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-primary text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform">
            <Edit2 size={16} />
          </button>
        </div>
        <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-1">Alex Rivers</h1>
        <p className="text-on-surface-variant font-medium">Premium Member since Jan 2024</p>
      </section>

      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col items-center justify-center p-5">
          <span className="text-primary font-headline font-extrabold text-2xl">24</span>
          <span className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Workouts</span>
        </Card>
        <Card className="flex flex-col items-center justify-center p-5">
          <span className="text-secondary font-headline font-extrabold text-2xl">84%</span>
          <span className="text-on-surface-variant text-xs uppercase tracking-widest font-bold">Goal Reach</span>
        </Card>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="font-headline font-bold text-xl text-on-surface">Personal Info</h2>
          <button className="text-primary font-bold text-sm hover:opacity-70 transition-opacity">Edit All</button>
        </div>
        <Card variant="low" className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-2">Email Address</label>
            <div className="bg-surface-container-highest px-6 py-4 rounded-full text-on-surface font-medium flex items-center justify-between">
              <span>alex.rivers@fitness.com</span>
              <Lock size={18} className="text-outline-variant" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-2">Weight</label>
              <div className="bg-surface-container-highest px-6 py-4 rounded-full text-on-surface font-medium">
                78 kg
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant ml-2">Height</label>
              <div className="bg-surface-container-highest px-6 py-4 rounded-full text-on-surface font-medium">
                182 cm
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="font-headline font-bold text-xl text-on-surface px-2">Subscriptions</h2>
        <Card variant="gradient" className="relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="bg-white/20 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full backdrop-blur-md">Active Plan</span>
                <h3 className="text-white font-headline font-extrabold text-2xl mt-2">FitLog Elite</h3>
              </div>
              <Award size={32} className="text-white" />
            </div>
            <p className="text-white/80 text-sm mb-6 max-w-[200px]">Next billing date: Feb 12, 2025</p>
            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-transform">
              Manage Subscription
            </button>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="font-headline font-bold text-xl text-on-surface px-2">App Settings</h2>
        <div className="space-y-3">
          {[
            { icon: Moon, label: 'Dark Mode', toggle: false },
            { icon: Bell, label: 'Push Notifications', toggle: true },
            { icon: Shield, label: 'Privacy & Security', arrow: true },
          ].map((item, i) => (
            <div key={i}>
              <Card className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <span className="font-bold text-on-surface">{item.label}</span>
                </div>
                {item.toggle !== undefined && (
                  <div className={cn(
                    "w-12 h-6 rounded-full relative transition-colors",
                    item.toggle ? "bg-primary" : "bg-surface-container-high"
                  )}>
                    <div className={cn(
                      "absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all",
                      item.toggle ? "right-1" : "left-1"
                    )} />
                  </div>
                )}
                {item.arrow && <ChevronRight size={20} className="text-outline" />}
              </Card>
            </div>
          ))}
        </div>
      </section>

      <div className="px-2 pb-10 space-y-4">
        <Link to="/auth" className="block">
          <button className="w-full py-5 rounded-full font-headline font-extrabold text-secondary bg-secondary/5 hover:bg-secondary/10 transition-all active:scale-95 border border-secondary/10 flex items-center justify-center gap-2">
            <LogOut size={20} />
            Logout
          </button>
        </Link>
        <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mt-8 opacity-30">
          FitLog v2.4.0 • Built for Excellence
        </p>
      </div>
    </motion.div>
  );
}
