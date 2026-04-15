import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PlusCircle, ArrowRight, Dumbbell, Zap, Smile } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-headline text-on-surface mb-2 tracking-tight">
            Hello, Alex!
          </h1>
          <p className="text-on-surface-variant font-medium">
            Ready to break some personal records today?
          </p>
        </div>
        <Link to="/edit-workout">
          <Button icon={<PlusCircle size={24} />}>
            Add Workout
          </Button>
        </Link>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Calories Card */}
        <Card className="md:col-span-2 flex flex-col justify-between relative overflow-hidden min-h-[180px]">
          <div className="z-10">
            <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Calories</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold font-headline text-on-surface">850</span>
              <span className="text-on-surface-variant text-lg">/ 1000 kcal</span>
            </div>
          </div>
          <div className="mt-6 w-full h-3 bg-surface-container rounded-full overflow-hidden z-10">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full" 
            />
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
        </Card>

        {/* Weight Card */}
        <Card className="flex flex-col justify-between">
          <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Body Weight</p>
          <div>
            <span className="text-4xl font-extrabold font-headline text-on-surface">165</span>
            <span className="text-on-surface-variant text-sm block mt-1 font-medium">lbs</span>
          </div>
        </Card>

        {/* Weekly Count */}
        <Card className="flex flex-col justify-between">
          <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Weekly Workouts</p>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-extrabold font-headline text-on-surface">4</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-1.5 h-6 bg-primary rounded-full" />
              ))}
              <div className="w-1.5 h-6 bg-surface-container rounded-full" />
            </div>
          </div>
        </Card>

        {/* Weekly Volume */}
        <Card className="md:col-span-2 flex items-center justify-between">
          <div>
            <p className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Weekly Volume</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold font-headline text-on-surface">12k</span>
              <span className="text-on-surface-variant text-lg font-medium">lbs</span>
            </div>
          </div>
          <div className="w-32 h-20 flex items-end gap-1">
            {[40, 60, 90, 75, 30].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "flex-1 rounded-t-sm",
                  i === 4 ? "bg-secondary/40" : "bg-primary/20",
                  i === 2 ? "bg-primary" : ""
                )}
              />
            ))}
          </div>
        </Card>

        {/* Insight Card */}
        <Card variant="gradient" className="md:col-span-2 flex flex-col justify-center relative overflow-hidden group">
          <div className="z-10">
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-primary-fixed font-bold mb-2">Peak Performance</p>
            <h3 className="text-2xl font-bold font-headline mb-4 leading-tight">
              You're doing better than 85% of your peers this week.
            </h3>
            <button className="flex items-center gap-2 text-primary-fixed font-bold text-sm group-hover:gap-4 transition-all">
              View Analytics <ArrowRight size={16} />
            </button>
          </div>
          <div className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <Zap size={120} fill="currentColor" />
          </div>
        </Card>
      </div>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-extrabold font-headline text-on-surface tracking-tight">Recent Workouts</h2>
          <button className="text-primary font-bold hover:underline">View all</button>
        </div>
        <div className="space-y-4">
          {[
            { name: 'Upper Body Power', icon: Dumbbell, color: 'bg-emerald-100 text-emerald-800', detail: '45 mins • Bench Press, Pullups, Dips', metric: '4,200 lbs', label: 'Volume', path: '/workouts' },
            { name: 'Zone 2 Recovery Run', icon: Zap, color: 'bg-orange-100 text-orange-800', detail: '32 mins • 3.2 miles', metric: 'Moderate', label: 'Intensity', path: '/' },
            { name: 'Mobility & Flow', icon: Smile, color: 'bg-blue-100 text-blue-800', detail: '20 mins • Full Body Stretch', metric: 'Flexibility', label: 'Focus', path: '/' },
          ].map((workout, i) => (
            <Link key={i} to={workout.path} className="block">
              <Card className="p-6 flex items-center justify-between hover:shadow-md transition-all group cursor-pointer active:scale-[0.99]">
                <div className="flex items-center gap-6">
                  <div className={cn("w-14 h-14 rounded-full flex items-center justify-center", workout.color)}>
                    <workout.icon size={30} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-headline text-on-surface">{workout.name}</h4>
                    <p className="text-on-surface-variant font-medium text-sm">{workout.detail}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">{workout.label}</p>
                    <p className="text-lg font-bold font-headline text-primary">{workout.metric}</p>
                  </div>
                  <ArrowRight size={20} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
