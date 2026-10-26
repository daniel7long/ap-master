import type { Raw } from '../types';

const micro: Raw[] = [
  ['Supply & Demand', 'The price of a substitute good rises. What happens to demand for the original good?', 'It increases (shifts right)', 'It decreases (shifts left)', 'There is a movement down along the curve', 'It is unchanged', 'Consumers switch to the cheaper original good, shifting its demand curve right.'],
  ['Elasticity', 'Price rises 10% and quantity demanded falls 20%. Demand is…', 'Elastic', 'Inelastic', 'Unit elastic', 'Perfectly inelastic', '|% change in Q / % change in P| = 2 > 1, so demand is elastic.'],
  ['Perfect Competition', 'A profit-maximizing perfectly competitive firm produces where…', 'P = MC', 'P = ATC', 'MR = ATC', 'MC = AVC', 'Profit is maximized where MR = MC, and for a price taker MR = P.'],
  ['Market Failure', 'A good produces a negative externality. Relative to the efficient quantity, the free market…', 'Overproduces', 'Underproduces', 'Produces exactly the efficient quantity', 'Produces nothing', 'Private cost is below social cost, so too much is produced.'],
  ['Monopoly', 'A profit-maximizing monopolist sets output where MR = MC and charges…', 'The price on the demand curve at that quantity', 'The price equal to MC', 'The price equal to MR', 'The minimum of ATC', 'Price is read from the demand curve and is above MR = MC.'],
  ['Public Goods', 'A public good is…', 'Non-rival and non-excludable', 'Rival and excludable', 'Rival and non-excludable', 'Non-rival and excludable', 'Public goods can be used by many at once and nobody can be kept from using them.'],
  ['Market Intervention', 'A binding price floor set above equilibrium creates…', 'A surplus', 'A shortage', 'No change', 'A lower price', 'At a higher price, quantity supplied exceeds quantity demanded.'],
  ['Game Theory', 'In a Nash equilibrium, each player…', 'Chooses a best response to the others’ strategies', 'Has a dominant strategy', 'Maximizes the total payoff', 'Cooperates', 'No player can gain by changing strategy alone.'],
];

const macro: Raw[] = [
  ['National Income', 'Which formula gives GDP by the expenditure approach?', 'C + I + G + (X − M)', 'C + I + G + (M − X)', 'C + S + T', 'W + R + i + π', 'GDP = consumption + investment + government purchases + net exports.'],
  ['Price Indexes', 'Nominal GDP is $1,100 and the GDP deflator is 110. What is real GDP?', '$1,000', '$1,210', '$110', '$990', 'Real GDP = nominal ÷ (deflator/100) = 1,100 ÷ 1.10 = 1,000.'],
  ['Unemployment', 'Unemployment caused by a recession is…', 'Cyclical', 'Frictional', 'Structural', 'Natural', 'Cyclical unemployment rises when output falls below potential.'],
  ['Fiscal Policy', 'If MPC = 0.8, the simple spending multiplier is…', '5', '4', '1.25', '0.8', 'Multiplier = 1/(1 − MPC) = 1/0.2 = 5.'],
  ['Monetary Policy', 'The Fed buys government bonds in the open market. The money supply… and interest rates…', 'Rises; fall', 'Falls; rise', 'Rises; rise', 'Falls; fall', 'Reserves increase, expanding lending and lowering interest rates.'],
  ['Banking', 'With a required reserve ratio of 10%, the simple money multiplier is…', '10', '0.1', '9', '100', 'Money multiplier = 1/reserve ratio = 1/0.10 = 10.'],
  ['Phillips Curve', 'The short-run Phillips curve shows…', 'An inverse relationship between inflation and unemployment', 'A positive relationship between them', 'No relationship', 'A vertical line at the natural rate', 'In the short run, lower unemployment tends to come with higher inflation.'],
  ['AD–AS', 'Which policy shifts aggregate demand left?', 'Raising taxes', 'Cutting taxes', 'Raising government spending', 'Lowering the discount rate', 'Higher taxes reduce disposable income and consumption.'],
];

const stats: Raw[] = [
  ['Exploring Data', 'Which measure of center is most resistant to outliers?', 'Median', 'Mean', 'Standard deviation', 'Range', 'The median depends on rank, not on how extreme values are.'],
  ['Normal Distribution', 'A score of 85 on a test with mean 70 and SD 10 has a z-score of…', '1.5', '15', '0.15', '−1.5', 'z = (85 − 70)/10 = 1.5.'],
  ['Random Variables', 'X is binomial with n = 50 and p = 0.2. What is its mean?', '10', '8', '40', '0.2', 'μ = np = 50 × 0.2 = 10.'],
  ['Sampling Distributions', 'By the Central Limit Theorem, the distribution of sample means is approximately normal when…', 'The sample size is large', 'The population is normal only', 'The sample is biased', 'The standard deviation is zero', 'For large n, x̄ is approximately normal regardless of population shape.'],
  ['Confidence Intervals', 'A 95% confidence interval means…', 'The method captures the true parameter in 95% of samples', 'There is a 95% chance the parameter is in this interval', '95% of the data lie in the interval', 'The sample mean is 95% accurate', 'The confidence level describes the long-run success rate of the method.'],
  ['Hypothesis Tests', 'A p-value is the probability of…', 'Results at least as extreme as observed, if H₀ is true', 'H₀ being true', 'H₀ being false', 'A Type II error', 'It measures how surprising the data are under the null hypothesis.'],
  ['Hypothesis Tests', 'A Type I error is…', 'Rejecting a true null hypothesis', 'Failing to reject a false null hypothesis', 'Accepting a false alternative', 'Using the wrong test', 'Type I = false positive, with probability α.'],
  ['Regression', 'A correlation of r = −0.9 indicates…', 'A strong negative linear relationship', 'A weak negative relationship', 'A strong positive relationship', 'No relationship', 'The sign gives direction and |r| near 1 gives strength.'],
];

const csA: Raw[] = [
  ['Primitives', 'What does int x = 7 / 2; store in x?', '3', '3.5', '4', '3.0', 'Integer division truncates the decimal part.'],
  ['Strings', 'What does "Hello".substring(1, 3) return?', '"el"', '"ell"', '"He"', '"Hel"', 'substring(1, 3) returns indexes 1 and 2, i.e. "el".'],
  ['Iteration', 'After for (int i = 1; i <= 4; i++) sum += i; with sum = 0, what is sum?', '10', '6', '4', '24', '1 + 2 + 3 + 4 = 10.'],
  ['Strings', 'How should you compare the contents of two String objects?', 'a.equals(b)', 'a == b', 'a.compare(b)', 'a = b', '== compares references; equals compares characters.'],
  ['ArrayList', 'ArrayList list = [5, 6, 7]. After list.remove(0), list is…', '[6, 7]', '[5, 6]', '[5, 7]', '[7]', 'remove(int index) deletes the element at index 0 and shifts the rest left.'],
  ['Arrays', 'For int[] a = new int[5], what is the last valid index?', '4', '5', '6', '0', 'Indexes run 0 to length − 1.'],
  ['Recursion', 'int f(int n) { return n == 0 ? 1 : n * f(n - 1); } What does f(4) return?', '24', '10', '16', '12', '4 × 3 × 2 × 1 × 1 = 24.'],
  ['Searching', 'Binary search requires the array to be…', 'Sorted', 'Of even length', 'Free of duplicates', 'Of type int', 'Binary search halves the range using order.'],
];

const csP: Raw[] = [
  ['Binary', 'What is the binary number 1011 in decimal?', '11', '13', '9', '10', '8 + 0 + 2 + 1 = 11.'],
  ['Data Compression', 'Lossless compression…', 'Allows exact reconstruction of the original', 'Permanently removes some data', 'Always makes files larger', 'Only works on images', 'No information is lost.'],
  ['The Internet', 'On the Internet, a message is typically sent as…', 'Packets that may take different routes', 'One continuous stream', 'A single fixed circuit', 'Encrypted text only', 'Packet switching allows routes to vary and recover from failures.'],
  ['Algorithms', 'Which structure repeats a block of code until a condition is met?', 'Iteration', 'Sequencing', 'Selection', 'Abstraction', 'Loops repeat steps; selection chooses between steps.'],
  ['Cybersecurity', 'An email that imitates a bank to steal your password is…', 'Phishing', 'A DDoS attack', 'Compression', 'Encryption', 'Phishing tricks users into revealing credentials.'],
  ['Cybersecurity', 'Public-key encryption uses…', 'A public key and a private key', 'A single shared key', 'No key', 'Only hashing', 'Anyone can encrypt with the public key; only the private key decrypts.'],
  ['Impact of Computing', 'The digital divide refers to…', 'Unequal access to computing and the Internet', 'Splitting a program into modules', 'Dividing binary numbers', 'A network failure', 'It describes gaps in access to technology between groups.'],
  ['Boolean Logic', 'What is NOT (true AND false)?', 'true', 'false', 'undefined', 'null', 'true AND false = false; NOT false = true.'],
];

const bio: Raw[] = [
  ['Cells', 'Which organelle is the main site of ATP production through aerobic respiration?', 'Mitochondrion', 'Ribosome', 'Golgi apparatus', 'Lysosome', 'The electron transport chain on the inner mitochondrial membrane makes most ATP.'],
  ['Transport', 'In osmosis, water moves…', 'From lower solute concentration to higher solute concentration', 'From higher to lower solute concentration', 'Only through active transport', 'Only into cells', 'Water follows its own gradient toward more concentrated solution.'],
  ['Photosynthesis', 'The light-dependent reactions occur in the…', 'Thylakoid membranes', 'Stroma', 'Mitochondrial matrix', 'Cytosol', 'Photosystems sit in the thylakoid membranes of the chloroplast.'],
  ['Molecular Genetics', 'DNA replication is described as…', 'Semiconservative', 'Conservative', 'Dispersive', 'Random', 'Each new double helix has one old and one new strand.'],
  ['Gene Expression', 'A codon AUG on mRNA pairs with which tRNA anticodon?', 'UAC', 'TAC', 'AUG', 'CGU', 'RNA pairing: A–U and G–C, so AUG pairs with UAC.'],
  ['Evolution', 'In a population in Hardy–Weinberg equilibrium, q² = 0.16. What is the frequency of heterozygotes?', '0.48', '0.24', '0.36', '0.16', 'q = 0.4, p = 0.6, 2pq = 2 × 0.6 × 0.4 = 0.48.'],
  ['Cell Division', 'Meiosis produces…', 'Four genetically distinct haploid cells', 'Two identical diploid cells', 'Two haploid cells', 'Four identical diploid cells', 'Crossing over and independent assortment create variation.'],
  ['Ecology', 'Approximately what percent of energy is transferred between trophic levels?', '10%', '50%', '90%', '1%', 'Most energy is lost as heat, so about 10% moves up.'],
];

const psych: Raw[] = [
  ['Learning', 'In Pavlov’s experiments, the bell after repeated pairing with food is a…', 'Conditioned stimulus', 'Unconditioned stimulus', 'Conditioned response', 'Negative reinforcer', 'A neutral stimulus becomes a conditioned stimulus after pairing.'],
  ['Biological Bases', 'Which brain structure is most involved in forming new explicit memories?', 'Hippocampus', 'Cerebellum', 'Amygdala', 'Medulla', 'Damage to the hippocampus causes anterograde amnesia.'],
  ['Learning', 'Negative reinforcement…', 'Removes an aversive stimulus to increase behavior', 'Adds an aversive stimulus to decrease behavior', 'Adds a pleasant stimulus', 'Is the same as punishment', 'It strengthens behavior by taking something unpleasant away.'],
  ['Development', 'Object permanence develops mainly in Piaget’s… stage.', 'Sensorimotor', 'Preoperational', 'Concrete operational', 'Formal operational', 'Infants learn that objects exist even when hidden.'],
  ['Research Methods', 'The independent variable is the one that…', 'The researcher manipulates', 'Is measured as the outcome', 'Stays constant', 'Is chosen randomly', 'Experimenters change the IV to see its effect on the DV.'],
  ['Cognition', 'Confirmation bias is…', 'Favoring information that supports existing beliefs', 'Overestimating one’s abilities', 'Forgetting old information', 'Explaining behavior by traits', 'People search for and interpret evidence in ways that fit what they already believe.'],
  ['Biological Bases', 'Damage to Broca’s area most affects…', 'Speech production', 'Speech comprehension', 'Vision', 'Balance', 'Broca’s aphasia leaves comprehension relatively intact but halting speech.'],
  ['Social Psychology', 'Cognitive dissonance is the discomfort from…', 'Holding inconsistent attitudes or behaviors', 'Social pressure', 'Obeying authority', 'Group polarization', 'People change attitudes or behaviors to reduce the inconsistency.'],
];

const engLang: Raw[] = [
  ['Rhetorical Appeals', 'An appeal to the speaker’s credibility is called…', 'Ethos', 'Pathos', 'Logos', 'Kairos', 'Ethos builds trust through character or expertise.'],
  ['Rhetorical Appeals', 'Using a story about a suffering child to move readers appeals mainly to…', 'Pathos', 'Ethos', 'Logos', 'Syntax', 'Pathos appeals to emotion.'],
  ['Rhetorical Appeals', 'Citing statistics and logical reasoning is an appeal to…', 'Logos', 'Pathos', 'Ethos', 'Tone', 'Logos appeals to reason.'],
  ['Rhetorical Devices', 'The line “It was the best of times, it was the worst of times” is an example of…', 'Antithesis', 'Anaphora only', 'Alliteration', 'Hyperbole', 'Contrasting ideas in parallel structure is antithesis (it is also anaphora).'],
  ['Argument', 'A concession in an argument essay…', 'Acknowledges a valid opposing point', 'Restates the thesis', 'Attacks the opponent', 'Introduces a new topic', 'Concession then refutation strengthens credibility.'],
  ['Style', 'Syntax refers to…', 'Sentence structure', 'Word choice', 'Figures of speech', 'The author’s attitude', 'Syntax is how words are arranged into sentences.'],
  ['Synthesis', 'A strong synthesis essay…', 'Uses sources to support the writer’s own argument', 'Summarizes each source in turn', 'Ignores the sources', 'Uses only quotations', 'Sources are evidence for your position, not the entire essay.'],
  ['Rhetorical Devices', 'Repeating the same word at the start of successive clauses is…', 'Anaphora', 'Chiasmus', 'Metonymy', 'Irony', 'Anaphora is repetition at the beginning of clauses.'],
];

const engLit: Raw[] = [
  ['Poetry', 'When a sentence runs over the end of a line without punctuation, it is called…', 'Enjambment', 'Caesura', 'End-stopped line', 'Apostrophe', 'Enjambment carries sense across the line break.'],
  ['Narration', 'A narrator whose account the reader cannot fully trust is…', 'Unreliable', 'Omniscient', 'Third-person limited', 'Objective', 'Unreliable narrators distort or misreport events.'],
  ['Figurative Language', '“Her smile was a sunrise” is a…', 'Metaphor', 'Simile', 'Personification', 'Hyperbole', 'It equates two unlike things without “like” or “as”.'],
  ['Poetry', 'In a Shakespearean or Petrarchan sonnet, the volta is…', 'A turn in thought or tone', 'The rhyme scheme', 'The last line', 'A refrain', 'The volta signals a shift in argument or attitude.'],
  ['Character', 'A foil is a character who…', 'Contrasts with another to highlight qualities', 'Narrates the story', 'Changes dramatically', 'Is the antagonist', 'Foils sharpen our view of the protagonist by contrast.'],
  ['Drama', 'Dramatic irony occurs when…', 'The audience knows something the characters do not', 'A character says the opposite of what they mean', 'Events end unexpectedly', 'Characters deceive one another', 'The gap between audience and character knowledge creates tension.'],
  ['Symbolism', 'A symbol is…', 'An object or image that represents a larger idea', 'A comparison using like', 'A repeated sound', 'An exaggeration', 'Symbols carry meaning beyond their literal sense.'],
  ['Poetry', 'Iambic pentameter has…', 'Five iambs per line', 'Four trochees per line', 'Ten stresses per line', 'Five anapests per line', 'An iamb is unstressed-stressed; five of them make ten syllables.'],
];

export const P2: Record<string, Raw[]> = {
  micro, macro, stats, 'cs-a': csA, 'cs-p': csP, bio, psych, 'eng-lang': engLang, 'eng-lit': engLit,
};
