import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Play, BarChart2, Dumbbell, TrendingDown, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <section className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container p-8 text-white shadow-lg">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight">Morning, Alex.</h2>
            <p className="opacity-90 max-w-xs font-medium">
              Your body is rested and ready for a flow session today. You've reached 75% of your activity goal.
            </p>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-3">
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="font-body text-[10px] font-bold uppercase tracking-widest">High Energy</span>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="font-body text-[10px] font-bold uppercase tracking-widest">Balanced</span>
              </div>
            </div>
          </div>

          <div className="relative w-48 h-48 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-white/10" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12" />
              <motion.circle 
                initial={{ strokeDashoffset: 502.65 }}
                animate={{ strokeDashoffset: 125.66 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="text-white" 
                cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.65" strokeLinecap="round" strokeWidth="12" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-4xl font-extrabold">75%</span>
              <span className="font-body text-[10px] uppercase tracking-widest opacity-80">Energy Score</span>
            </div>
          </div>
        </div>
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 blur-[64px] rounded-full" />
      </section>

      <section className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
        <Button className="flex-1 min-w-[160px]" icon={<Play size={20} fill="currentColor" />}>
          Start Workout
        </Button>
        <Button variant="secondary" className="flex-1 min-w-[160px]" icon={<BarChart2 size={20} />}>
          Log Metric
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <Card className="md:col-span-3 flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
          <div className="space-y-4 relative">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Dumbbell size={24} />
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider">2h ago</span>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Strength Flow</h3>
              <p className="text-on-surface-variant font-medium">Upper Body & Core focus</p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col">
                <span className="font-headline text-xl font-bold text-primary">450</span>
                <span className="font-body text-[10px] uppercase text-outline">Kcal</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-xl font-bold text-primary">52</span>
                <span className="font-body text-[10px] uppercase text-outline">Mins</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="md:col-span-3 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                <TrendingDown size={24} />
              </div>
              <span className="font-body text-[10px] font-bold text-outline uppercase tracking-wider">Weekly</span>
            </div>
            <div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">Weight Trend</h3>
              <p className="text-on-surface-variant font-medium">-1.2 kg from last week</p>
            </div>
            <div className="h-16 flex items-end gap-2 pt-4">
              {[60, 80, 40, 70, 30].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className={cn("flex-1 rounded-t-full", i === 4 ? "bg-secondary" : "bg-secondary/20")}
                />
              ))}
            </div>
          </div>
        </Card>

        <Card variant="low" className="md:col-span-6 p-8 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-6">
            <div className="space-y-1">
              <span className="font-body text-[10px] font-bold text-primary uppercase tracking-widest">Coming Up Next</span>
              <h3 className="font-headline text-3xl font-extrabold text-on-surface">Power Vinyasa</h3>
              <p className="text-on-surface-variant font-medium">Tomorrow at 07:00 AM • Studio A</p>
            </div>
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-surface-container-low bg-surface-container-highest overflow-hidden">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-surface-container-low bg-primary text-white flex items-center justify-center font-bold text-xs">+12</div>
              </div>
              <p className="text-sm text-on-surface-variant self-center font-medium">with Marcus and 12 others</p>
            </div>
          </div>
          <div className="w-full md:w-64 h-40 rounded-lg overflow-hidden shadow-lg group">
            <img 
              src="https://picsum.photos/seed/yoga/400/300" 
              alt="Yoga session" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </Card>
      </section>

      <section className="text-center py-10 space-y-4">
        <span className="text-primary-container text-4xl opacity-40">"</span>
        <p className="font-headline text-2xl md:text-3xl font-bold text-emerald-800/80 italic leading-snug max-w-2xl mx-auto">
          "Movement is the song of the body."
        </p>
        <div className="w-12 h-1 bg-primary/20 mx-auto rounded-full" />
      </section>
    </motion.div>
  );
}
