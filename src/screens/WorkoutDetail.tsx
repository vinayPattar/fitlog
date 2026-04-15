import { Card } from '../components/ui/Card';
import { Dumbbell, Timer, TrendingUp, ChevronLeft, MoreVertical, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export function WorkoutDetail() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      <header className="flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary ambient-shadow active:scale-90 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-xl font-black font-headline tracking-tight">Workout Detail</h1>
        <button className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary ambient-shadow active:scale-90 transition-all">
          <MoreVertical size={20} />
        </button>
      </header>

      <section className="relative">
        <Card variant="gradient" className="p-8 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-2 inline-block">
                  Hypertrophy Session
                </span>
                <h2 className="text-4xl font-black font-headline tracking-tight">Leg Day</h2>
              </div>
              <Dumbbell size={40} className="text-white/40" />
            </div>
            
            <div className="pt-6 flex items-end justify-between">
              <div>
                <p className="text-white/70 text-sm font-medium">Total Volume Moved</p>
                <p className="text-3xl font-black font-headline">24,500 <span className="text-lg font-normal opacity-80">lbs</span></p>
              </div>
              <div className="text-right">
                <p className="text-white/70 text-sm font-medium">Duration</p>
                <p className="text-xl font-bold font-headline tracking-tight">72:14</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl font-extrabold font-headline text-on-surface">Exercise Stack</h3>
        <span className="bg-surface-container text-on-surface-variant text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
          3 Movements
        </span>
      </div>

      <div className="space-y-6">
        {/* Barbell Squats */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <Dumbbell size={30} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-headline text-on-surface">Barbell Squats</h4>
              <p className="text-sm text-on-surface-variant font-medium">Compound • Quadriceps</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm font-bold text-primary">4 Sets</p>
              <p className="text-xs text-on-surface-variant">Avg. RPE 8</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { set: 1, lbs: 315, reps: 8 },
              { set: 2, lbs: 315, reps: 8 },
              { set: 3, lbs: 325, reps: 6 },
              { set: 4, lbs: 325, reps: 6 },
            ].map((s) => (
              <div key={s.set} className="bg-surface-container-low p-3 rounded-2xl">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase">Set {s.set}</p>
                <p className="font-headline font-black text-on-surface">{s.lbs} <span className="text-[10px] font-normal">lbs</span></p>
                <p className="text-xs text-primary font-bold">{s.reps} Reps</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Leg Press */}
        <Card className="p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1.5 h-full bg-secondary" />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
              <Zap size={30} />
            </div>
            <div>
              <h4 className="text-lg font-bold font-headline text-on-surface">Leg Press</h4>
              <p className="text-sm text-on-surface-variant font-medium">Machine • Glutes/Quads</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-sm font-bold text-secondary">3 Sets</p>
              <p className="text-xs text-on-surface-variant">Avg. RPE 9</p>
            </div>
          </div>
          
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x">
            {[
              { set: 1, lbs: 540, reps: 12 },
              { set: 2, lbs: 580, reps: 10 },
              { set: 3, lbs: 580, reps: 10 },
            ].map((s) => (
              <div key={s.set} className="flex-shrink-0 w-32 bg-surface-container-low p-3 rounded-2xl snap-start">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase">Set {s.set}</p>
                <p className="font-headline font-black text-on-surface">{s.lbs} <span className="text-[10px] font-normal">lbs</span></p>
                <p className="text-xs text-secondary font-bold">{s.reps} Reps</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-emerald-900 text-white p-6 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Intensity Score</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black font-headline">94</span>
            <TrendingUp size={24} className="text-emerald-400" />
          </div>
          <p className="text-xs opacity-80 leading-relaxed">Top 5% of your leg sessions this year.</p>
        </Card>
        
        <Card variant="low" className="p-6 space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Rest Time Avg</p>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black font-headline text-on-surface">1:45</span>
            <Timer size={24} className="text-on-surface-variant" />
          </div>
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              className="h-full bg-primary rounded-full" 
            />
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
