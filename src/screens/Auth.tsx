import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, Lock, Eye, Chrome, Apple } from 'lucide-react';
import { motion } from 'motion/react';

export function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
      
      <motion.main 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md z-10"
      >
        <Card className="p-10 flex flex-col items-center">
          <div className="mb-10 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container rounded-3xl flex items-center justify-center shadow-lg shadow-primary/20 mb-6 mx-auto transform active:scale-95 transition-transform duration-200">
              <Zap size={48} className="text-white" fill="currentColor" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface mb-2">FitLog</h1>
            <p className="text-on-surface-variant font-medium tracking-wide text-sm uppercase">The Mindful Athlete</p>
          </div>

          <form className="w-full space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <Mail size={20} />
                </div>
                <input 
                  className="w-full pl-14 pr-6 py-4 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/10 transition-all outline-none font-body" 
                  placeholder="Email Address" 
                  type="email" 
                />
              </div>
              
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-on-surface-variant group-focus-within:text-primary transition-colors">
                  <Lock size={20} />
                </div>
                <input 
                  className="w-full pl-14 pr-14 py-4 bg-surface-container-highest border-none rounded-lg text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/10 transition-all outline-none font-body" 
                  placeholder="Password" 
                  type="password" 
                />
                <button className="absolute inset-y-0 right-5 flex items-center text-on-surface-variant hover:text-primary transition-colors" type="button">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a className="text-on-surface-variant hover:text-primary text-sm font-semibold transition-colors" href="#">
                Forgot Password?
              </a>
            </div>

            <Button className="w-full py-5">
              Sign In
            </Button>
          </form>

          <div className="w-full flex items-center my-8">
            <div className="flex-grow h-px bg-outline-variant opacity-30" />
            <span className="px-4 text-outline text-xs font-bold uppercase tracking-widest">Or Continue With</span>
            <div className="flex-grow h-px bg-outline-variant opacity-30" />
          </div>

          <div className="flex gap-4 w-full">
            <button className="flex-1 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors transform active:scale-95">
              <Chrome size={24} className="text-on-surface" />
            </button>
            <button className="flex-1 py-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors transform active:scale-95">
              <Apple size={24} className="text-on-surface" />
            </button>
          </div>

          <p className="mt-10 text-on-surface-variant text-sm font-medium">
            New to FitLog? 
            <a className="text-primary font-bold hover:underline ml-1" href="#">Create Account</a>
          </p>
        </Card>

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Card className="p-4 text-center">
            <p className="text-xs text-outline font-bold uppercase mb-1">Active Users</p>
            <p className="text-lg font-headline font-bold text-on-surface">12k+</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-xs text-outline font-bold uppercase mb-1">Workouts</p>
            <p className="text-lg font-headline font-bold text-on-surface">850k+</p>
          </Card>
        </div>
      </motion.main>

      <div className="hidden lg:block absolute right-[10%] top-1/2 -translate-y-1/2 w-[400px] h-[600px] rounded-xl overflow-hidden shadow-2xl rotate-3">
        <img 
          src="https://picsum.photos/seed/fitness/800/1200" 
          alt="Fitness lifestyle" 
          className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-10">
          <p className="text-white text-2xl font-headline font-bold leading-tight">
            Elevate your body,<br />Calm your mind.
          </p>
        </div>
      </div>
    </div>
  );
}

// Mock Zap icon for Auth
function Zap({ size, className, fill }: { size: number, className?: string, fill?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill || "none"} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
