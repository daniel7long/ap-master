import type { Subject } from '../types';

export const FAMILIES: { id: string; name: string; blurb: string }[] = [
  { id: 'calculus', name: 'Calculus', blurb: 'AB & BC' },
  { id: 'physics', name: 'Physics', blurb: '1, 2 & C' },
  { id: 'chemistry', name: 'Chemistry', blurb: 'AP Chemistry' },
  { id: 'economics', name: 'Economics', blurb: 'Micro & Macro' },
  { id: 'statistics', name: 'Statistics', blurb: 'AP Statistics' },
  { id: 'cs', name: 'Computer Science', blurb: 'CS A & Principles' },
  { id: 'biology', name: 'Biology', blurb: 'AP Biology' },
  { id: 'psychology', name: 'Psychology', blurb: 'AP Psychology' },
  { id: 'english', name: 'English', blurb: 'Language & Literature' },
  { id: 'more', name: 'More AP Subjects', blurb: 'Science, languages, history, government & arts' },
];

export const SUBJECTS: Subject[] = [
  { id: 'calc-ab', name: 'AP Calculus AB', family: 'calculus', icon: '∫', blurb: 'Limits, derivatives, integrals' },
  { id: 'calc-bc', name: 'AP Calculus BC', family: 'calculus', icon: '∑', blurb: 'AB topics plus series, parametric & polar' },
  { id: 'phys-1', name: 'AP Physics 1: Algebra-Based', family: 'physics', icon: '⚙', blurb: 'Mechanics, energy, momentum' },
  { id: 'phys-2', name: 'AP Physics 2: Algebra-Based', family: 'physics', icon: '⚛', blurb: 'Fluids, thermo, optics, modern physics' },
  { id: 'phys-c-mech', name: 'AP Physics C: Mechanics', family: 'physics', icon: '↻', blurb: 'Calculus-based mechanics' },
  { id: 'phys-c-em', name: 'AP Physics C: Electricity & Magnetism', family: 'physics', icon: '⚡', blurb: 'Calculus-based E&M' },
  { id: 'chem', name: 'AP Chemistry', family: 'chemistry', icon: '⚗', blurb: 'Stoichiometry, equilibrium, kinetics' },
  { id: 'micro', name: 'AP Microeconomics', family: 'economics', icon: '¢', blurb: 'Markets, firms, externalities' },
  { id: 'macro', name: 'AP Macroeconomics', family: 'economics', icon: '$', blurb: 'GDP, money, policy' },
  { id: 'stats', name: 'AP Statistics', family: 'statistics', icon: 'σ', blurb: 'Data, inference, probability' },
  { id: 'cs-a', name: 'AP Computer Science A', family: 'cs', icon: '{ }', blurb: 'Java programming' },
  { id: 'cs-p', name: 'AP Computer Science Principles', family: 'cs', icon: '01', blurb: 'Computing concepts & impact' },
  { id: 'bio', name: 'AP Biology', family: 'biology', icon: '🧬', blurb: 'Cells, genetics, evolution, ecology' },
  { id: 'psych', name: 'AP Psychology', family: 'psychology', icon: 'Ψ', blurb: 'Behavior and mental processes' },
  { id: 'eng-lang', name: 'AP English Language and Composition', family: 'english', icon: 'Aa', blurb: 'Rhetoric & argument' },
  { id: 'eng-lit', name: 'AP English Literature and Composition', family: 'english', icon: '“”', blurb: 'Poetry, prose & drama' },
  { id: 'env', name: 'AP Environmental Science', family: 'more', icon: '🌿', blurb: 'Ecosystems, pollution, sustainability' },
  { id: 'french', name: 'AP French Language and Culture', family: 'more', icon: 'Fr', blurb: 'Grammar & comprehension' },
  { id: 'chinese', name: 'AP Chinese Language and Culture', family: 'more', icon: '中', blurb: 'Grammar & comprehension' },
  { id: 'spanish', name: 'AP Spanish Language and Culture', family: 'more', icon: 'Es', blurb: 'Grammar & comprehension' },
  { id: 'comp-gov', name: 'AP Comparative Government and Politics', family: 'more', icon: '⚖', blurb: 'Six core countries' },
  { id: 'euro', name: 'AP European History', family: 'more', icon: '🏰', blurb: 'c. 1450 to present' },
  { id: 'geo', name: 'AP Human Geography', family: 'more', icon: '🌍', blurb: 'Population, culture, cities' },
  { id: 'us-gov', name: 'AP United States Government and Politics', family: 'more', icon: '🏛', blurb: 'Institutions & civil liberties' },
  { id: 'us-hist', name: 'AP United States History', family: 'more', icon: '🗽', blurb: 'Colonial era to present' },
  { id: 'world', name: 'AP World History: Modern', family: 'more', icon: '🧭', blurb: 'c. 1200 to present' },
  { id: 'art', name: 'AP Art History', family: 'more', icon: '🎨', blurb: 'Global art & architecture' },
];

export const subjectById = (id: string) => SUBJECTS.find(s => s.id === id);
export const shortName = (s: Subject) => s.name.replace(/^AP /, '');
