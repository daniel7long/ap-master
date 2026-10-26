import type { Raw } from '../types';

const usGov: Raw[] = [
  ['Foundations', 'In Federalist No. 10, Madison argued that…', 'A large republic can control the effects of factions', 'Political parties should be banned', 'States should be sovereign', 'Direct democracy is best', 'An extended republic dilutes any single faction’s power.'],
  ['Judiciary', 'Marbury v. Madison (1803) established…', 'Judicial review', 'Executive privilege', 'Separation of church and state', 'Equal protection', 'The Court asserted the power to strike down unconstitutional laws.'],
  ['Federalism', 'The “necessary and proper” clause is the basis for…', 'Implied powers of Congress', 'The right to bear arms', 'Presidential veto', 'Judicial independence', 'McCulloch v. Maryland upheld implied powers.'],
  ['Congress', 'How many voting members does the U.S. House of Representatives have?', '435', '100', '538', '50', 'The House has 435 voting members; the Senate has 100.'],
  ['Civil Liberties', 'The First Amendment protects…', 'Freedoms of religion, speech, press, assembly and petition', 'The right to a speedy trial', 'Protection from unreasonable searches', 'The right to bear arms', 'These are the core First Amendment freedoms.'],
  ['Elections', 'How many electoral votes are needed to win the presidency?', '270', '218', '300', '435', 'There are 538 electors; a majority is 270.'],
  ['Congress', 'Cloture to end a Senate filibuster generally requires…', '60 votes', '51 votes', '67 votes', '100 votes', 'Three-fifths of the Senate must vote to end debate.'],
  ['Civil Liberties', 'Selective incorporation applies most Bill of Rights protections to states through the…', 'Fourteenth Amendment', 'Tenth Amendment', 'Second Amendment', 'Article I', 'The Due Process Clause was used to incorporate rights.'],
];

const usHist: Raw[] = [
  ['Colonial Era', 'After 1763, Britain taxed the colonies mainly to…', 'Pay debts from the French and Indian War', 'Fund colonial schools', 'Punish smugglers only', 'Finance exploration', 'War debt and defense costs led to new taxes.'],
  ['Antebellum', 'The Missouri Compromise (1820) admitted Missouri as…', 'A slave state, and Maine as a free state', 'A free state', 'A territory', 'A neutral state', 'It also banned slavery north of 36°30′.'],
  ['Civil War', 'The Emancipation Proclamation (1863) freed enslaved people…', 'In Confederate-held territory', 'In the border states', 'Nationwide', 'In the North', 'It applied to areas in rebellion.'],
  ['Reconstruction', 'The Thirteenth Amendment…', 'Abolished slavery', 'Granted citizenship', 'Gave Black men the vote', 'Banned alcohol', 'Ratified in 1865.'],
  ['Gilded Age', 'Plessy v. Ferguson (1896) upheld…', '“Separate but equal” segregation', 'School integration', 'Women’s suffrage', 'Income tax', 'It legitimized Jim Crow.'],
  ['New Deal', 'The Social Security Act of 1935…', 'Created old-age pensions and unemployment insurance', 'Created the Federal Reserve', 'Banned child labor', 'Ended Prohibition', 'It was a cornerstone of the New Deal.'],
  ['Civil Rights', 'Brown v. Board of Education (1954)…', 'Declared segregated public schools unconstitutional', 'Upheld segregation', 'Created busing', 'Ended Jim Crow overall', 'It overturned Plessy for education.'],
  ['Cold War', 'The policy of containment aimed to…', 'Stop the spread of communism', 'Expand NATO', 'Promote isolationism', 'End the arms race', 'The Truman Doctrine put it into practice.'],
];

const world: Raw[] = [
  ['Mongol Empire', 'The Pax Mongolica…', 'Facilitated trade and communication across Eurasia', 'Ended trade on the Silk Roads', 'Destroyed the Islamic world', 'Created the printing press', 'Mongol rule secured trade routes.'],
  ['Exchange', 'The Columbian Exchange refers to…', 'The transfer of plants, animals and diseases between hemispheres', 'A trade treaty', 'The founding of banks', 'Spanish taxes', 'Crops, animals and diseases crossed the Atlantic.'],
  ['Atlantic World', 'The transatlantic slave trade forcibly moved millions of Africans primarily to…', 'The Americas', 'Europe', 'Australia', 'East Asia', 'Most went to Brazil and the Caribbean.'],
  ['Revolutions', 'The Haitian Revolution (1791–1804) was notable as…', 'The only successful slave revolt that created an independent state', 'A conflict over taxes', 'A revolt against the Spanish crown', 'A religious war', 'Haiti became independent in 1804.'],
  ['Industrialization', 'The Meiji Restoration in Japan led to…', 'Rapid industrialization and modernization', 'Isolation', 'The Shogunate’s strengthening', 'Colonization by Britain', 'Japan adopted Western technology and institutions.'],
  ['Imperialism', 'The Berlin Conference (1884–85) set rules for…', 'The European partition of Africa', 'The partition of India', 'The end of the slave trade', 'Trade with China', 'African leaders were excluded.'],
  ['Decolonization', 'Gandhi’s strategy against British rule was…', 'Nonviolent civil disobedience', 'Armed revolution', 'Appeasement', 'Joining the empire', 'He led campaigns like the Salt March.'],
  ['Cold War', 'The Korean War was an example of…', 'A Cold War proxy conflict', 'A colonial uprising', 'A religious war', 'A trade war', 'The U.S. and China/USSR backed opposing sides.'],
];

const art: Raw[] = [
  ['Modern Art', 'Impressionist painters like Monet emphasized…', 'Fleeting effects of light and color', 'Religious narratives', 'Exact line and detail', 'Abstract geometry', 'They painted outdoors to capture momentary impressions.'],
  ['Ancient Rome', 'The Pantheon in Rome is known for its…', 'Concrete dome with an oculus', 'Flying buttresses', 'Pointed arches', 'Ziggurat', 'It has a coffered dome open at the top.'],
  ['Medieval', 'Which feature is characteristic of Gothic cathedrals?', 'Flying buttresses and pointed arches', 'Horseshoe arches', 'Domes on pendentives', 'Post-and-lintel only', 'They allowed taller, light-filled interiors.'],
  ['Renaissance', 'Michelangelo’s David is famous as a…', 'Marble Renaissance statue in contrapposto', 'Bronze Gothic relief', 'Baroque painting', 'Egyptian sculpture', 'It reflects classical ideals.'],
  ['Modern Art', 'Picasso’s Les Demoiselles d’Avignon is a precursor to…', 'Cubism', 'Impressionism', 'Romanticism', 'Pop Art', 'Its fractured forms led toward Cubism.'],
  ['Islamic Art', 'The Great Mosque of Córdoba is known for its…', 'Double-tiered horseshoe arches', 'Gothic spires', 'Pyramids', 'Pagodas', 'Alternating red and white voussoirs.'],
  ['Modern Art', 'Picasso’s Guernica was a response to…', 'The bombing of a Spanish town', 'World War II’s end', 'The Russian Revolution', 'The French Revolution', 'It depicts the 1937 bombing during the Spanish Civil War.'],
  ['Prehistoric', 'Stonehenge is an example of…', 'A Neolithic megalithic monument', 'A Roman temple', 'A Gothic cathedral', 'A Mayan pyramid', 'Its stones are arranged in post-and-lintel structure.'],
];

export const P4: Record<string, Raw[]> = {
  'us-gov': usGov, 'us-hist': usHist, world, art,
};
