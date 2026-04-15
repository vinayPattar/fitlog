export interface Workout {
  id: string;
  name: string;
  date: string;
  category: string;
  duration: string;
  volume: string;
  intensity?: string;
  focus?: string;
  exercises: Exercise[];
}

export interface Exercise {
  id: string;
  name: string;
  type: string;
  muscleGroup: string;
  sets: Set[];
  rpe?: number;
  notes?: string;
}

export interface Set {
  id: string;
  weight: number;
  reps: number;
}
