import SpeakerStamp from '../components/SpeakerStamp'

// Ken Wheeler - Director of OSS at FormidableLabs - https://twitter.com/ken_wheeler / https://github.com/kenwheeler
// Kim Brandwijk - Author of SupergraphQL - https://github.com/kbrandwijk
// Sara Vieira - Frontend Engineer at YLD.io - https://twitter.com/NikkitaFTW / https://github.com/SaraVieira
// Martijn Walraven - Technical Product Manager at Apollo - https://twitter.com/martijnwalraven / https://github.com/martijnwalraven
// Manjula Dabe - Senior Engineer at Bookmyshow - https://twitter.com/manjula_dube / https://github.com/manjula91
// Ivan Goncharov - GraphQL & OpenAPI/Swagger consultant at APIsGuru - https://github.com/IvanGoncharov

export const speakersList = [
  {
    imageUrl: '/static/speakers/speaker-1',
    imageFormat: 'jpg',
    name: 'Ken Wheeler',
    bio: 'Director of OSS at FormidableLabs',
    twitter: 'ken_wheeler',
    github: 'kenwheeler',
    renderStamp: () => <SpeakerStamp src="/static/speaks-at-ra.png" />,
  },
  {
    imageUrl: '/static/speakers/speaker-2',
    imageFormat: 'jpg',
    name: 'Kim Brandwijk',
    bio: 'API Consultant & Author of SupergraphQL',
    twitter: undefined,
    github: 'kbrandwijk',
  },
  {
    imageUrl: '/static/speakers/speaker-3',
    imageFormat: 'jpg',
    name: 'Sara Vieira',
    bio: 'Frontend Engineer at YLD.io',
    twitter: 'NikkitaFTW',
    github: 'SaraVieira',
  },
  {
    imageUrl: '/static/speakers/speaker-4',
    imageFormat: 'jpg',
    name: 'Martijn Walraven',
    bio: 'Technical Product Manager at Apollo',
    twitter: 'martijnwalraven',
    github: 'martijnwalraven',
  },
  {
    imageUrl: '/static/speakers/speaker-5',
    imageFormat: 'jpg',
    name: 'Manjula Dube',
    bio: 'Senior Engineer at Bookmyshow',
    twitter: 'manjula_dube',
    github: 'manjula91',
    renderStamp: () => <SpeakerStamp src="/static/speaks-at-ra-white.png" />,
  },
  {
    imageUrl: '/static/speakers/speaker-6',
    imageFormat: 'jpg',
    name: 'Ivan Goncharov',
    bio: 'GraphQL & OpenAPI/Swagger Consultant at APIsGuru',
    twitter: undefined,
    github: 'IvanGoncharov',
  },
  {
    imageUrl: '/static/speakers/speaker-8',
    imageFormat: 'jpg',
    name: 'Ruben Verborgh',
    bio: 'Decentralized Query Wizard at Ghent Univeristy',
    twitter: 'RubenVerborgh',
    github: 'RubenVerborgh',
  },
  {
    imageUrl: '/static/speakers/speaker-7',
    imageFormat: 'jpg',
    name: 'Nikolas Burk',
    bio: 'Developer at Graphcool',
    twitter: 'nikolasburk',
    github: 'nikolasburk',
  },
]
