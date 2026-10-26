import type { Raw } from '../types';

const env: Raw[] = [
  ['Climate', 'Which gas is the largest contributor to human-caused warming?', 'Carbon dioxide', 'Oxygen', 'Nitrogen', 'Argon', 'Burning fossil fuels releases CO₂, the largest human-driven source of enhanced greenhouse warming.'],
  ['Water Pollution', 'Excess nitrogen and phosphorus in a lake most directly cause…', 'Eutrophication', 'Acid rain', 'Ozone depletion', 'Biomagnification', 'Nutrients trigger algal blooms; decomposition then depletes dissolved oxygen.'],
  ['Atmosphere', 'Which chemicals were mainly responsible for stratospheric ozone depletion?', 'CFCs', 'CO₂', 'SO₂', 'Methane', 'Chlorine from chlorofluorocarbons breaks down ozone.'],
  ['Energy Flow', 'If producers contain 10,000 kcal, about how much is available to secondary consumers (10% rule)?', '100 kcal', '1,000 kcal', '10 kcal', '5,000 kcal', '10,000 → 1,000 (primary) → 100 (secondary).'],
  ['Energy', 'Which of these is a renewable energy source?', 'Solar', 'Coal', 'Natural gas', 'Uranium-235', 'Solar energy is replenished continually; the others are finite.'],
  ['Biodiversity', 'The leading cause of biodiversity loss worldwide is…', 'Habitat loss', 'Natural volcanic eruptions', 'Cosmic radiation', 'Tides', 'Land conversion destroys and fragments habitat.'],
  ['Ecosystems', 'Primary succession begins on…', 'Bare rock without soil', 'A burned forest', 'An abandoned farm', 'A flooded meadow', 'Pioneer species such as lichens create soil from rock.'],
  ['Air Pollution', 'Ground-level ozone in photochemical smog forms from…', 'NOₓ and VOCs in sunlight', 'CFCs and CO₂', 'SO₂ and water', 'Methane and nitrogen', 'Sunlight drives reactions between nitrogen oxides and volatile organic compounds.'],
];

const french: Raw[] = [
  ['Grammar: passé composé', 'Choose the correct form: « Elle ___ née en 1990. »', 'est', 'a', 'avait', 'sera', 'Naître takes être in the passé composé: elle est née.'],
  ['Vocabulary', 'What does « il faut » express?', 'It is necessary / one must', 'It is possible', 'It is forbidden', 'It is beautiful', '« Il faut » expresses necessity.'],
  ['Grammar: subjunctive', 'Choose the correct form: « Il faut que tu ___ tes devoirs. »', 'fasses', 'fais', 'feras', 'faisais', '« Il faut que » requires the subjunctive: que tu fasses.'],
  ['Register', 'Which pronoun is used for a polite address to one stranger?', 'vous', 'tu', 'on', 'ils', 'Vous is the formal “you”.'],
  ['Grammar: negation', 'Complete: « Je ne mange ___ de viande. »', 'pas', 'plus tard', 'jamais pas', 'rien pas', 'Ne … pas is the basic negation.'],
  ['False friends', 'What does « la bibliothèque » mean?', 'Library', 'Bookstore', 'Bookshelf only', 'Office', 'A bookstore is « une librairie ».'],
  ['Grammar: prepositions', 'Complete: « Je vais ___ États-Unis. »', 'aux', 'en', 'à', 'dans le', 'Plural countries take aux.'],
  ['Writing', 'Which closing is the most formal for a letter to a woman you do not know?', 'Je vous prie d’agréer, Madame, mes salutations distinguées.', 'Bisous !', 'À plus !', 'Salut, ça va ?', 'It is the standard formal closing.'],
];

const chinese: Raw[] = [
  ['Vocabulary', 'What does 你好 mean?', 'Hello', 'Thank you', 'Goodbye', 'Sorry', '你好 is the standard greeting.'],
  ['Measure Words', 'Choose the correct measure word: 一___书', '本', '个', '只', '条', '本 is the measure word for books.'],
  ['Grammar', 'Complete: 我___学生。 (I am a student.)', '是', '有', '在', '很', '是 links the subject to a noun.'],
  ['Vocabulary', 'What does 昨天 mean?', 'Yesterday', 'Tomorrow', 'Today', 'Every day', '昨天 means “yesterday”.'],
  ['Grammar: 把', 'Which sentence is correct?', '我把书放在桌子上。', '我放把书在桌子上。', '我书把放在桌子上。', '把我书放在桌子上。', 'The 把 structure is Subject + 把 + Object + Verb + Complement.'],
  ['Negation', 'Complete: 我昨天___去学校。 (I did not go to school yesterday.)', '没', '不', '别', '未有', 'Past actions are negated with 没(有), not 不.'],
  ['Vocabulary', 'What does 图书馆 mean?', 'Library', 'Bookstore', 'Museum', 'Cinema', '图书馆 is a library; a bookstore is 书店.'],
  ['Connectors', 'What does 因为……所以…… express?', 'Because … therefore …', 'Although … but …', 'If … then …', 'Not only … but also …', 'It links cause and result.'],
];

const spanish: Raw[] = [
  ['Grammar: preterite', 'Complete: « Ayer yo ___ al mercado. »', 'fui', 'iba', 'voy', 'iré', 'A completed past action uses the preterite: fui.'],
  ['Ser vs. estar', 'Complete: « Ella ___ doctora. »', 'es', 'está', 'son', 'estás', 'Ser expresses profession or identity.'],
  ['Grammar: subjunctive', 'Complete: « Espero que tú ___ mañana. »', 'vengas', 'vienes', 'vendrás', 'viniste', 'Wishes after “esperar que” take the subjunctive.'],
  ['False friends', 'What does “embarazada” mean?', 'Pregnant', 'Embarrassed', 'Tired', 'Excited', 'Embarrassed is “avergonzado/a”.'],
  ['Grammar: gender', 'Which is correct?', 'el problema', 'la problema', 'los problema', 'una problema', 'Problema is masculine despite ending in -a.'],
  ['Grammar: imperfect', 'Complete: « Cuando yo era niño, ___ en la calle. »', 'jugaba', 'jugué', 'juego', 'jugaré', 'Habitual past actions use the imperfect.'],
  ['Idioms', 'What does « Hace dos años que vivo aquí » mean?', 'I have lived here for two years.', 'I lived here two years ago.', 'I will live here for two years.', 'Two years ago I did it.', 'Hace + time + que + present = for that long.'],
  ['Writing', 'Which closing is formal in an email?', 'Atentamente,', '¡Chao!', 'Besos,', 'Nos vemos,', 'Atentamente is the standard formal closing.'],
];

const compGov: Raw[] = [
  ['Political Systems', 'In the United Kingdom, the prime minister is…', 'The leader of the majority party or coalition in the House of Commons', 'Directly elected by the people', 'Appointed by the monarch regardless of Parliament', 'Chosen by the Supreme Court', 'The UK is a parliamentary system.'],
  ['China', 'China’s highest-level policy-making power effectively lies in the…', 'Chinese Communist Party', 'Judiciary', 'Free press', 'Opposition parties', 'China is a single-party state led by the CCP.'],
  ['Iran', 'Which Iranian body vets candidates for office?', 'Guardian Council', 'Congress', 'House of Lords', 'Duma', 'The Guardian Council reviews legislation and candidates.'],
  ['Nigeria', 'Nigeria’s system of government is…', 'A federal presidential republic', 'A unitary monarchy', 'A parliamentary monarchy', 'A theocracy', 'It has a president and a federal structure.'],
  ['Mexico', 'Mexico’s 2000 election was notable because…', 'The PRI lost the presidency after about 70 years', 'The PRI won for the first time', 'The military took power', 'The monarchy ended', 'It was a milestone in democratization.'],
  ['Russia', 'Russia’s constitution establishes a… system.', 'Semi-presidential', 'Parliamentary monarchy', 'Pure presidential', 'Confederal', 'It has both a president and a prime minister.'],
  ['Concepts', 'Sovereignty means…', 'The ultimate authority to govern within a territory', 'Control of the economy', 'Having a large military', 'Membership in the UN', 'It refers to supreme legal authority over a territory.'],
  ['Electoral Systems', 'In proportional representation, seats are allocated…', 'According to each party’s share of the vote', 'To the winner in each district', 'By lottery', 'By the executive', 'PR gives parties seats in proportion to votes.'],
];

const euro: Raw[] = [
  ['Renaissance', 'Renaissance humanism emphasized…', 'Classical learning and individual potential', 'Papal authority', 'Feudal obligations', 'Divine right', 'Humanists revived Greek and Roman learning.'],
  ['Reformation', 'Martin Luther’s Ninety-five Theses (1517) primarily challenged…', 'The sale of indulgences', 'The divine right of kings', 'Serfdom', 'The printing press', 'Luther protested indulgences and church abuses.'],
  ['Early Modern', 'The Peace of Westphalia (1648)…', 'Ended the Thirty Years’ War and affirmed state sovereignty', 'Started the Reformation', 'Created the EU', 'Ended Napoleon’s rule', 'It is considered a foundation of the modern state system.'],
  ['Scientific Revolution', 'Copernicus proposed that…', 'The Earth orbits the Sun', 'The Sun orbits the Earth', 'Planets move in squares', 'Gravity is repulsive', 'His heliocentric model challenged Ptolemaic astronomy.'],
  ['French Revolution', 'The 1789 Declaration of the Rights of Man and of the Citizen asserted…', 'Liberty, property, security and resistance to oppression', 'Absolute monarchy', 'Class privilege', 'State religion', 'It reflected Enlightenment principles.'],
  ['Industrialization', 'The Industrial Revolution began in…', 'Great Britain', 'Russia', 'Spain', 'Italy', 'Britain had coal, capital and colonial markets.'],
  ['19th Century', 'The Congress of Vienna (1815) sought to…', 'Restore stability and a balance of power after Napoleon', 'Spread revolution', 'Unify Germany', 'Create a single currency', 'Conservative leaders reorganized Europe.'],
  ['20th Century', 'A major provision of the Treaty of Versailles was…', 'Reparations and war guilt imposed on Germany', 'The creation of NATO', 'Independence for India', 'A union with Austria', 'It created lasting German resentment.'],
];

const geo: Raw[] = [
  ['Population', 'In stage 2 of the demographic transition model…', 'Death rates fall while birth rates remain high', 'Birth and death rates are both low', 'Birth rates fall below death rates', 'Population declines', 'Population grows rapidly.'],
  ['Migration', 'Which of the following is a push factor?', 'War', 'Job opportunities', 'Good schools', 'Family ties abroad', 'Push factors drive people from home.'],
  ['Agriculture', 'The von Thünen model explains…', 'Agricultural land use around a market', 'City growth in rings', 'Industrial location by weight', 'Language diffusion', 'It places perishable, intensive products near the market.'],
  ['Urban', 'The concentric zone model was proposed by…', 'Burgess', 'Hoyt', 'Christaller', 'Weber', 'Burgess described rings around the CBD.'],
  ['Agriculture', 'The Green Revolution increased food output through…', 'High-yield seeds, fertilizers and irrigation', 'Reduced mechanization', 'Hunting and gathering', 'Subsistence farming', 'It raised yields in many developing countries.'],
  ['Political Geography', 'Gerrymandering is…', 'Drawing district boundaries for political advantage', 'Counting votes', 'Migrating between states', 'A type of boundary dispute between countries', 'It manipulates electoral districts.'],
  ['Political Geography', 'A centripetal force…', 'Unifies a state', 'Divides a state', 'Creates borders', 'Moves people', 'Examples include shared language or national identity.'],
  ['Population', 'The replacement-level total fertility rate is about…', '2.1', '1.0', '3.5', '5.0', 'About 2.1 children per woman keeps population stable.'],
];

export const P3: Record<string, Raw[]> = {
  env, french, chinese, spanish, 'comp-gov': compGov, euro, geo,
};
