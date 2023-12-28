export const users = [
  {
    id: 0,
    username: 'daviddiaz.dev',
    profileImage: require('../assets/images/profilePicture/profile_linkedin.jpeg'),
    closeFriends: false,
    seenHistories: false,
  },
  {
    id: 1,
    username: 'ronaldinho',
    profileImage: require('../assets/images/profilePicture/ronaldinho.jpeg'),
    closeFriends: true,
    seenHistories: false,
  },
  {
    id: 2,
    username: 'cristiano',
    profileImage: require('../assets/images/profilePicture/cristiano.jpeg'),
    closeFriends: false,
    seenHistories: false,
  },
  {
    id: 3,
    username: 'leomessi',
    profileImage: require('../assets/images/profilePicture/leomessi.jpeg'),
    closeFriends: false,
    seenHistories: false,
  },
  {
    id: 4,
    username: 'andreapirlo21',
    profileImage: require('../assets/images/profilePicture/andreapirlo21.jpeg'),
    closeFriends: false,
    seenHistories: true,
  },
];

export const feed = [
  {
    id: 0,
    userId: 4,
    picture: require('../assets/images/posts/pirlo1.jpeg'),
    likes: '1.220 Me gusta',
    comments: 117,
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    ago: 'Hace 2 minutos',
  },
  {
    id: 0,
    userId: 2,
    picture: require('../assets/images/posts/cristiano1.jpeg'),
    likes: '5.822 Me gusta',
    comments: 2000,
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    ago: 'Hace 7 minutos',
  },
  {
    id: 0,
    userId: 1,
    picture: require('../assets/images/posts/ronaldinho1.jpeg'),
    likes: '12.330 Me gusta',
    comments: 455,
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    ago: 'Hace 9 minutos',
  },
  {
    id: 0,
    userId: 3,
    picture: require('../assets/images/posts/messi1.jpeg'),
    likes: '21.700 Me gusta',
    comments: 1000,
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    ago: 'Hace 14 minutos',
  },
  {
    id: 0,
    userId: 4,
    picture: require('../assets/images/posts/pirlo2.jpeg'),
    likes: '24.000 Me gusta',
    comments: 1500,
    description:
      'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
    ago: 'Hace 15 minutos',
  },
];
