import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ChevronLeft, CheckCircle, Trash2, Plus, GripVertical, Dumbbell, Accessibility } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

export function EditWorkout() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary active:scale-95 transition-transform duration-200 shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-black font-headline tracking-tight text-emerald-900">Edit Workout</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center active:scale-95 transition-transform duration-200 shadow-lg shadow-emerald-200">
          <CheckCircle size={24} fill="currentColor" />
        </button>
      </header>

      <Card className="space-y-6">
        <div className="space-y-4">
          <div className="group">
            <label className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1 block px-1">Workout Name</label>
            <input 
              className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 text-lg font-bold font-headline focus:ring-2 focus:ring-primary/10 transition-all outline-none" 
              placeholder="Enter workout title..." 
              type="text" 
              defaultValue="Afternoon Hypertrophy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1 block px-1">Date</label>
              <input 
                className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-primary/10 transition-all outline-none" 
                type="date" 
                defaultValue="2023-10-24"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1 block px-1">Category</label>
              <div className="bg-surface-container-highest rounded-lg px-4 py-3 text-sm font-medium flex items-center justify-between cursor-pointer">
                <span>Strength Training</span>
                <Plus size={16} className="rotate-45" />
              </div>
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1 block px-1">Notes</label>
            <textarea 
              className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 text-sm font-medium min-h-[80px] focus:ring-2 focus:ring-primary/10 transition-all outline-none" 
              placeholder="How are you feeling today?"
              defaultValue="Focusing on eccentric control for the first two exercises. Keep rest periods under 90s."
            />
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-between px-2">
        <h2 className="font-headline font-bold text-lg text-emerald-900">Exercise Stack</h2>
        <span className="text-xs font-bold font-label uppercase tracking-tighter bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">3 Exercises</span>
      </div>

      <div className="space-y-4">
        {/* Exercise Card 1 */}
        <Card className="p-5 border border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Dumbbell size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Barbell Squats</h3>
                <p className="text-xs text-outline font-medium">Legs • Quadriceps</p>
              </div>
            </div>
            <button className="text-outline-variant hover:text-secondary transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-2 px-2 text-[10px] font-bold uppercase tracking-widest text-outline">
              <div className="col-span-2">Set</div>
              <div className="col-span-4 text-center">Weight (kg)</div>
              <div className="col-span-4 text-center">Reps</div>
              <div className="col-span-2"></div>
            </div>
            
            {[1, 2].map((set) => (
              <div key={set} className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-2 text-sm font-bold text-center text-primary-container">{set}</div>
                <div className="col-span-4">
                  <input className="w-full bg-surface-container text-center border-none rounded-lg py-2 text-sm font-bold focus:ring-1 focus:ring-primary/20" type="number" defaultValue="100" />
                </div>
                <div className="col-span-4">
                  <input className="w-full bg-surface-container text-center border-none rounded-lg py-2 text-sm font-bold focus:ring-1 focus:ring-primary/20" type="number" defaultValue="8" />
                </div>
                <div className="col-span-2 flex justify-end">
                  <GripVertical size={16} className="text-outline-variant" />
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-6 w-full py-3 rounded-full border border-dashed border-outline-variant text-outline text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
            <Plus size={16} />
            Add Set
          </button>
        </Card>

        {/* Exercise Card 2 */}
        <Card className="p-5 border border-outline-variant/10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Accessibility size={20} />
              </div>
              <div>
                <h3 className="font-headline font-bold text-on-surface">Leg Extensions</h3>
                <p className="text-xs text-outline font-medium">Legs • Quads Isolation</p>
              </div>
            </div>
            <button className="text-outline-variant hover:text-secondary transition-colors">
              <Trash2 size={20} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-2 items-center">
              <div className="col-span-2 text-sm font-bold text-center text-primary-container">1</div>
              <div className="col-span-4">
                <input className="w-full bg-surface-container text-center border-none rounded-lg py-2 text-sm font-bold focus:ring-1 focus:ring-primary/20" type="number" defaultValue="45" />
              </div>
              <div className="col-span-4">
                <input className="w-full bg-surface-container text-center border-none rounded-lg py-2 text-sm font-bold focus:ring-1 focus:ring-primary/20" type="number" defaultValue="12" />
              </div>
              <div className="col-span-2 flex justify-end">
                <GripVertical size={16} className="text-outline-variant" />
              </div>
            </div>
          </div>
          
          <button className="mt-6 w-full py-3 rounded-full border border-dashed border-outline-variant text-outline text-xs font-bold uppercase tracking-widest hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
            <Plus size={16} />
            Add Set
          </button>
        </Card>

        <div className="w-full h-32 rounded-lg overflow-hidden relative ambient-shadow">
          <img 
            src="https://picsum.photos/seed/gym/800/400" 
            alt="Gym equipment" 
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent flex items-end p-4">
            <p className="text-white text-xs font-bold font-headline">Finish strong. Consistency is the only secret.</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-28 inset-x-0 flex justify-center pointer-events-none">
        <Button className="pointer-events-auto" icon={<Plus size={20} />}>
          Add Exercise
        </Button>
      </div>
    </motion.div>
  );
}
