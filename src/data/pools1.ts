import type { Raw } from '../types';

const calcAB: Raw[] = [
  ['Limits', 'What is lim(x→0) sin(3x)/x ?', '3', '0', '1', '1/3', 'Rewrite as 3·sin(3x)/(3x). Since sin(u)/u → 1 as u → 0, the limit is 3.'],
  ['Derivatives', 'If f(x) = x²eˣ, what is f′(x)?', 'eˣ(x² + 2x)', '2xeˣ', 'x²eˣ', 'eˣ(2x − x²)', 'Product rule: (x²)′eˣ + x²(eˣ)′ = 2xeˣ + x²eˣ = eˣ(x² + 2x).'],
  ['Derivatives', 'What is d/dx [sin(x²)]?', '2x cos(x²)', 'cos(x²)', '2x sin(x²)', 'cos(2x)', 'Chain rule: derivative of the outside, cos(x²), times the derivative of the inside, 2x.'],
  ['Integrals', 'Evaluate ∫₀² 3x² dx.', '8', '6', '12', '4', 'An antiderivative is x³, so the value is 2³ − 0³ = 8.'],
  ['Fundamental Theorem', 'If g(x) = ∫₀ˣ √(1 + t²) dt, what is g′(x)?', '√(1 + x²)', '√(1 + x²) / 2x', 'x√(1 + x²)', '1 / √(1 + x²)', 'By the Fundamental Theorem of Calculus, d/dx ∫ₐˣ f(t) dt = f(x).'],
  ['Related Rates', 'A circle’s radius grows at 2 cm/s. How fast is its area growing when r = 5 cm?', '20π cm²/s', '10π cm²/s', '25π cm²/s', '50π cm²/s', 'A = πr², so dA/dt = 2πr·dr/dt = 2π(5)(2) = 20π.'],
  ['Applications of Derivatives', 'For f(x) = x³ − 3x, where is the local minimum?', 'x = 1', 'x = −1', 'x = 0', 'x = 3', 'f′(x) = 3x² − 3 = 0 gives x = ±1. f″(x) = 6x is positive at x = 1, so it is a local minimum.'],
  ['Implicit Differentiation', 'On x² + y² = 25, what is dy/dx at (3, 4)?', '−3/4', '3/4', '−4/3', '4/3', 'Differentiate: 2x + 2y·y′ = 0, so y′ = −x/y = −3/4.'],
];
const bcExtra: Raw[] = [
  ['Series', 'What is the radius of convergence of Σ xⁿ/n (n ≥ 1)?', '1', '0', '2', '∞', 'Ratio test: |x|·n/(n+1) → |x|, so the series converges for |x| < 1.'],
  ['Parametric', 'For x = t², y = t³, what is dy/dx at t = 2?', '3', '2', '6', '12', 'dy/dx = (3t²)/(2t) = 3t/2 = 3 at t = 2.'],
  ['Integration Techniques', 'Evaluate ∫ x eˣ dx.', 'xeˣ − eˣ + C', 'xeˣ + eˣ + C', 'x²eˣ/2 + C', 'eˣ + C', 'Integration by parts with u = x, dv = eˣ dx gives xeˣ − ∫eˣ dx = xeˣ − eˣ + C.'],
  ['Taylor Series', 'What is the coefficient of x³ in the Maclaurin series of e²ˣ?', '4/3', '2/3', '8', '1/6', 'e^u = Σ uⁿ/n!, so e²ˣ has x³ term (2x)³/3! = 8x³/6 = (4/3)x³.'],
];

const phys1: Raw[] = [
  ['Newton’s Laws', 'A net force of 10 N acts on a 2 kg object. What is its acceleration?', '5 m/s²', '20 m/s²', '0.2 m/s²', '12 m/s²', 'a = F/m = 10/2 = 5 m/s².'],
  ['Kinematics', 'An object falls from rest for 3 s (g = 9.8 m/s², no air resistance). What is its speed?', '29.4 m/s', '9.8 m/s', '44.1 m/s', '3.3 m/s', 'v = gt = 9.8 × 3 = 29.4 m/s.'],
  ['Energy', 'What is the kinetic energy of a 2 kg object moving at 3 m/s?', '9 J', '6 J', '18 J', '3 J', 'KE = ½mv² = ½(2)(9) = 9 J.'],
  ['Momentum', 'A 1 kg cart moving at 4 m/s sticks to a 3 kg cart at rest. What is their final speed?', '1 m/s', '4 m/s', '2 m/s', '0.75 m/s', 'Momentum is conserved: 1(4) = (1 + 3)v, so v = 1 m/s.'],
  ['Circular Motion', 'An object moves at 10 m/s on a circle of radius 5 m. What is its centripetal acceleration?', '20 m/s²', '2 m/s²', '50 m/s²', '10 m/s²', 'a = v²/r = 100/5 = 20 m/s².'],
  ['Energy', 'How much energy is stored in a spring (k = 200 N/m) stretched 0.1 m?', '1 J', '10 J', '20 J', '0.1 J', 'U = ½kx² = ½(200)(0.01) = 1 J.'],
  ['Oscillations', 'A pendulum’s mass is doubled with the same length and small amplitude. What happens to its period?', 'It stays the same', 'It doubles', 'It halves', 'It increases by √2', 'T = 2π√(L/g) does not depend on mass.'],
  ['Rotation', 'A 20 N force acts perpendicular to a wrench 0.5 m from the pivot. What is the torque?', '10 N·m', '40 N·m', '20 N·m', '2.5 N·m', 'τ = rF sin90° = 0.5 × 20 = 10 N·m.'],
];

const phys2: Raw[] = [
  ['Fluids', 'What is the gauge pressure 2 m below the surface of water (ρ = 1000 kg/m³, g = 10 m/s²)?', '20,000 Pa', '2,000 Pa', '10,000 Pa', '200,000 Pa', 'P = ρgh = 1000 × 10 × 2 = 20,000 Pa.'],
  ['Thermodynamics', 'An ideal gas is compressed isothermally to half its volume. What happens to its pressure?', 'It doubles', 'It halves', 'It stays the same', 'It quadruples', 'Isothermal: PV = constant, so halving V doubles P.'],
  ['Thermodynamics', 'A gas absorbs 500 J of heat and does 200 J of work. What is ΔU?', '+300 J', '+700 J', '−300 J', '+200 J', 'ΔU = Q − W = 500 − 200 = 300 J.'],
  ['Electrostatics', 'The distance between two point charges is doubled. The force between them becomes…', 'One-fourth', 'One-half', 'Double', 'Four times', 'Coulomb’s force varies as 1/r², so doubling r divides F by 4.'],
  ['Circuits', 'What is the equivalent resistance of 6 Ω and 3 Ω in parallel?', '2 Ω', '9 Ω', '4.5 Ω', '18 Ω', '1/R = 1/6 + 1/3 = 1/2, so R = 2 Ω.'],
  ['Optics', 'Light passes from air into glass. It bends…', 'Toward the normal', 'Away from the normal', 'Not at all', 'Along the surface', 'Light slows in the denser medium and bends toward the normal (Snell’s law).'],
  ['Modern Physics', 'In the photoelectric effect, increasing light intensity at a fixed frequency above threshold increases…', 'The number of emitted electrons', 'The maximum kinetic energy of electrons', 'The work function', 'The threshold frequency', 'Intensity sets photon count (and so electron count); max KE depends on frequency.'],
  ['Optics', 'An object is placed beyond 2f from a converging lens. The image is…', 'Real, inverted, smaller', 'Virtual, upright, larger', 'Real, inverted, larger', 'Virtual, upright, smaller', 'Beyond 2f, a converging lens forms a real, inverted, reduced image between f and 2f.'],
];

const physCMech: Raw[] = [
  ['Kinematics', 'A particle’s position is x(t) = t³ − 6t. What is its velocity at t = 2 s?', '6 m/s', '2 m/s', '12 m/s', '−4 m/s', 'v = dx/dt = 3t² − 6 = 12 − 6 = 6 m/s.'],
  ['Work & Energy', 'A force F = 3x (N) acts from x = 0 to x = 4 m. How much work is done?', '24 J', '12 J', '48 J', '6 J', 'W = ∫₀⁴ 3x dx = 1.5x² |₀⁴ = 24 J.'],
  ['Rotation', 'What is the moment of inertia of a uniform solid disk about its central axis?', '½MR²', 'MR²', '⅖MR²', '⅓MR²', 'A uniform solid disk has I = ½MR².'],
  ['Angular Momentum', 'A skater pulls her arms in while spinning. Her angular speed…', 'Increases', 'Decreases', 'Stays constant', 'Becomes zero', 'No external torque, so L = Iω is conserved. I decreases, so ω increases.'],
  ['Oscillations', 'A 4 kg mass on a 100 N/m spring oscillates. What is its angular frequency?', '5 rad/s', '25 rad/s', '0.2 rad/s', '10 rad/s', 'ω = √(k/m) = √(100/4) = 5 rad/s.'],
  ['Gravitation', 'What is the escape speed from a planet of mass M and radius R?', '√(2GM/R)', '√(GM/R)', '2GM/R', 'GM/R²', 'Setting ½mv² = GMm/R gives v = √(2GM/R).'],
  ['Conservative Forces', 'A potential energy is U(x) = x² (SI). What is the force?', '−2x', '2x', '−x²', 'x³/3', 'F = −dU/dx = −2x.'],
  ['Momentum', 'A force F = 6t N acts on an object from t = 0 to t = 2 s. What is the impulse?', '12 N·s', '6 N·s', '24 N·s', '3 N·s', 'Impulse = ∫₀² 6t dt = 3t² |₀² = 12 N·s.'],
];

const physCEM: Raw[] = [
  ['Gauss’s Law', 'What is the electric field inside a uniformly charged conducting spherical shell’s cavity?', 'Zero', 'kQ/R²', 'kQ/r²', 'Depends on distance from the center', 'Gauss’s law with a spherical surface inside encloses no charge, so E = 0.'],
  ['Potential', 'If V(x) = 5x² (volts), what is E at x?', '−10x', '10x', '−5x', '5x³/3', 'E = −dV/dx = −10x.'],
  ['Capacitance', 'The plate separation of a parallel-plate capacitor is halved. Its capacitance…', 'Doubles', 'Halves', 'Is unchanged', 'Quadruples', 'C = ε₀A/d, so halving d doubles C.'],
  ['Circuits', 'What is the time constant of an RC circuit with R = 1 kΩ and C = 2 μF?', '2 ms', '0.5 ms', '2 s', '2 μs', 'τ = RC = 1000 × 2×10⁻⁶ = 2×10⁻³ s.'],
  ['Capacitance', 'A 4 μF capacitor is charged to 10 V. How much energy does it store?', '200 μJ', '400 μJ', '40 μJ', '20 μJ', 'U = ½CV² = ½(4×10⁻⁶)(100) = 200 μJ.'],
  ['Induction', 'A coil’s flux is Φ = 4t² Wb. What is the magnitude of the EMF at t = 3 s?', '24 V', '36 V', '12 V', '8 V', '|ε| = dΦ/dt = 8t = 24 V.'],
  ['Magnetic Fields', 'For a long straight wire, doubling the distance from the wire makes B…', 'Half as large', 'Twice as large', 'One-fourth as large', 'Unchanged', 'B = μ₀I/(2πr), so B is inversely proportional to r.'],
  ['Inductance', 'How much energy is stored in a 2 H inductor carrying 3 A?', '9 J', '18 J', '6 J', '3 J', 'U = ½LI² = ½(2)(9) = 9 J.'],
];

const chem: Raw[] = [
  ['The Mole', 'How many moles are in 18 g of water (M = 18 g/mol)?', '1 mol', '18 mol', '0.5 mol', '2 mol', 'n = m/M = 18/18 = 1 mol.'],
  ['Stoichiometry', 'For 2H₂ + O₂ → 2H₂O, 4 mol H₂ reacts with 1 mol O₂. How much water forms?', '2 mol', '4 mol', '1 mol', '3 mol', 'O₂ is limiting: 1 mol O₂ makes 2 mol H₂O.'],
  ['Acids & Bases', 'What is the pH of 0.01 M HCl?', '2', '1', '12', '0.01', 'HCl is a strong acid: [H⁺] = 0.01 M, so pH = −log(0.01) = 2.'],
  ['Equilibrium', 'For an exothermic reaction at equilibrium, raising the temperature shifts the equilibrium…', 'Toward reactants', 'Toward products', 'Nowhere', 'Toward the side with fewer moles of gas', 'Heat acts like a product; adding heat shifts the reaction toward reactants.'],
  ['Kinetics', 'Doubling [A] quadruples the rate. The reaction is… order in A.', 'Second', 'First', 'Zero', 'Third', 'Rate ∝ [A]ⁿ, and 2ⁿ = 4 gives n = 2.'],
  ['Periodic Trends', 'Which element has the highest electronegativity: Na, Mg, Al, Cl?', 'Cl', 'Na', 'Mg', 'Al', 'Electronegativity increases across a period, so Cl is highest.'],
  ['Thermodynamics', 'If ΔH < 0 and ΔS > 0, the reaction is…', 'Spontaneous at all temperatures', 'Nonspontaneous at all temperatures', 'Spontaneous only at high T', 'Spontaneous only at low T', 'ΔG = ΔH − TΔS is negative at every temperature.'],
  ['Buffers', 'Which pair makes a buffer?', 'CH₃COOH and CH₃COONa', 'HCl and NaCl', 'NaOH and NaCl', 'HNO₃ and NaNO₃', 'A buffer needs a weak acid and its conjugate base.'],
];

export const P1: Record<string, Raw[]> = {
  'calc-ab': calcAB, 'calc-bc': [...calcAB, ...bcExtra],
  'phys-1': phys1, 'phys-2': phys2, 'phys-c-mech': physCMech, 'phys-c-em': physCEM, 'chem': chem,
};
