export const APP_BROWSE_URL = '/stories';
export const APP_NAME = 'Software Heritage Stories';
export const CLASSNAME_SEED = 'swh-stories';
export const CLASSNAME_PRODUCTION_PREFIX = 'prod';
export enum Color {
  Red = '#e20427',
  Yellow = '#f6b415',
}
export const DEFAULT_PAGE_TITLE = 'SWH Stories';
export enum Images {
  collectionHeader = '/images/collection-header-tree.png',
  inria = '/images/inria.png',
  inriaFoundation = '/images/inria-foundation.png',
  pisa = '/images/pisa.png',
  swh = '/images/swh-full.png',
  unesco = '/images/unesco.png',
  sloan = '/images/Alfred_P_Sloan_Foundation_Logo.png',
  santAnna = '/images/Sant\'Anna_School_of_Advanced_Studies_Logo_ENG.png',
  oki = '/images/Open_Knowledge_Initiatives_logo.png',
}
export const STORIES_API_ENDPOINT = 'https://stories.k2.services';
export const STORIES_API_INRIA_COLLECTION_ID = 45;
export const STORIES_API_PISA_COLLECTION_ID = 42;
export const STORIES_API_PUBLIC_KEY = 'tN5X1y7O.2NhLogJVhLsYANuCtSP1FjHPZHA6TUBd';
export const SCIENCE_STORIES_URL = 'https://sciencestories.io';
export const SWH_LOGO = '/images/swh.png';
export const SWH_URL = 'https://softwareheritage.org';
export const RouteCollectionIdMap: Record<string, number> = {
  inria: STORIES_API_INRIA_COLLECTION_ID,
  pisa: STORIES_API_PISA_COLLECTION_ID,
  stories: STORIES_API_PISA_COLLECTION_ID, // Deprecated route for backwards compatibility
};
export const FooterLinks = [
  { name: 'Software Heritage', logo: Images.swh, url: SWH_URL },
  { name: 'Università Di Pisa', logo: Images.pisa, url: 'https://unipi.it' },
  {
    name: 'Sant\'Anna School of Advanced Studies',
    logo: Images.santAnna,
    url: 'https://www.santannapisa.it/en',
  },
  {
    name: 'IITH-OKI',
    logo: Images.oki,
    url: 'https://meta.wikimedia.org/wiki/Special:MyLanguage/IIITH-OKI',
  },
  { name: 'INRIA', logo: Images.inria, url: 'https://www.inria.fr/en' },
  {
    name: 'INRIA La Fondation',
    logo: Images.inriaFoundation,
    url: 'https://www.inria.fr/en/inria-foundation-making-sense-digital-world',
  },
  {
    name: 'Alfred P. Sloan Foundation',
    logo: Images.sloan,
    url: 'https://sloan.org',
  },
  { name: 'UNESCO', logo: Images.unesco, url: 'https://unesco.org' },
];
