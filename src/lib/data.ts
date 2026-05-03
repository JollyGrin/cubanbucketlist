export type Experience = {
  id: string;
  title: string;
  blurb: string;
  meta: string;
  votes: number;
  goal: number;
  palette: { from: string; to: string; ink: string; accent: string };
  icon: 'mountain' | 'kitchen' | 'scuba' | 'waterfall' | 'car' | 'salsa';
  region: string;
};

export const experiences: Experience[] = [
  {
    id: 'sierra',
    title: 'Sierra Maestra Photography Expedition',
    blurb:
      'Three days chasing golden hour with a Cuban photographer who knows every ridgeline by name.',
    meta: '3 days · Granma · max 6',
    votes: 482,
    goal: 500,
    palette: { from: '#0E5F5A', to: '#08443F', ink: '#F5EFE3', accent: '#D9A441' },
    icon: 'mountain',
    region: 'Granma province',
  },
  {
    id: 'havana-kitchen',
    title: 'Havana Family Kitchen Night',
    blurb:
      'Cook a four-course Cuban supper in a Centro Habana home. Music, rum, real conversation.',
    meta: '1 evening · Centro Habana · max 8',
    votes: 671,
    goal: 500,
    palette: { from: '#E5613D', to: '#A8462C', ink: '#FBF7EE', accent: '#D9A441' },
    icon: 'kitchen',
    region: 'Havana',
  },
  {
    id: 'scuba',
    title: 'Secret Scuba with a Local Legend',
    blurb:
      'A dive with the man who taught most of the divers on the island. Reefs the boats never reach.',
    meta: '1 day · María la Gorda · max 4',
    votes: 358,
    goal: 500,
    palette: { from: '#127478', to: '#0E5F5A', ink: '#FBF7EE', accent: '#F18A6A' },
    icon: 'scuba',
    region: 'Pinar del Río',
  },
  {
    id: 'waterfalls',
    title: 'Hidden Waterfalls & Local Life',
    blurb:
      'Trek to falls that don’t appear on maps. Lunch with the family who keeps them secret.',
    meta: '2 days · Topes de Collantes · max 6',
    votes: 294,
    goal: 500,
    palette: { from: '#2C8C84', to: '#0E5F5A', ink: '#FBF7EE', accent: '#D9A441' },
    icon: 'waterfall',
    region: 'Sancti Spíritus',
  },
  {
    id: 'vintage-car',
    title: 'Vintage Car Mountain Road Trip',
    blurb:
      'A ’57 Chevy, a route through the Escambray, and a mechanic who can fix it with a butter knife.',
    meta: '3 days · cross-country · max 3',
    votes: 412,
    goal: 500,
    palette: { from: '#D9A441', to: '#B0822A', ink: '#1B1814', accent: '#A8462C' },
    icon: 'car',
    region: 'Cienfuegos → Trinidad',
  },
  {
    id: 'salsa',
    title: 'Salsa Night on a Secret Rooftop',
    blurb:
      'A live septet, a rooftop most Cubans don’t know exists, and lessons that work even on you.',
    meta: '1 evening · Old Havana · max 12',
    votes: 537,
    goal: 500,
    palette: { from: '#A8462C', to: '#7E3320', ink: '#FBF7EE', accent: '#D9A441' },
    icon: 'salsa',
    region: 'Havana',
  },
];

export const featured = experiences.slice(0, 4);

export const trending = [
  { id: 'havana-kitchen', delta: '+128' },
  { id: 'salsa', delta: '+96' },
  { id: 'sierra', delta: '+74' },
  { id: 'vintage-car', delta: '+41' },
];

export const journal = [
  {
    id: 'j1',
    kicker: 'Field notes',
    title: 'The fisherman who feeds half of Baracoa',
    excerpt:
      'On the eastern tip of the island, where the road runs out, we spent a morning with Reinaldo and his grandson.',
    date: 'Apr 2026',
    palette: { from: '#0E5F5A', to: '#08443F' },
  },
  {
    id: 'j2',
    kicker: 'Hidden gem',
    title: 'A coffee farm in the clouds',
    excerpt:
      'Three hours up a mule track outside Santiago is a finca where the beans dry on the porch and the rocking chairs are always free.',
    date: 'Mar 2026',
    palette: { from: '#D9A441', to: '#B0822A' },
  },
  {
    id: 'j3',
    kicker: 'Local hero',
    title: 'Yoandra, the only female luthier in Holguín',
    excerpt:
      'She builds tres guitars in a converted bedroom. The waiting list is now eighteen months long.',
    date: 'Feb 2026',
    palette: { from: '#E5613D', to: '#A8462C' },
  },
];

export const network = [
  { id: 'n1', name: 'Lázaro Mendieta', role: 'Photographer · Bayamo', initials: 'LM', tone: 'teal' as const },
  { id: 'n2', name: 'Yamilet Cruz', role: 'Chef · Centro Habana', initials: 'YC', tone: 'coral' as const },
  { id: 'n3', name: 'El Tigre Domínguez', role: 'Dive instructor · Pinar', initials: 'TD', tone: 'mustard' as const },
  { id: 'n4', name: 'Reinaldo Ortiz', role: 'Mountain guide · Topes', initials: 'RO', tone: 'terracotta' as const },
  { id: 'n5', name: 'Yoandra Pérez', role: 'Luthier · Holguín', initials: 'YP', tone: 'teal' as const },
  { id: 'n6', name: 'Onel "El Mecánico"', role: 'Vintage cars · Trinidad', initials: 'OM', tone: 'coral' as const },
];
