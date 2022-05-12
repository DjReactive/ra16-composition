export const staticNews = [
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "01.01.2000",
    desc_short: "Старая новость в ленте",
  },
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "02.01.2000",
    desc_short: "2 Очередная новость в ленте",
  },
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "03.01.2000",
    desc_short: "3 Очередная новость в ленте",
  },
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "04.01.2000",
    desc_short: "4 Очередная новость в ленте",
  },
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "05.01.2000",
    desc_short: "5 Очередная новость в ленте",
  },
  {
    icon: "https://link.img",
    url: "https://news_url",
    date: "06.01.2000",
    desc_short: "Самая свежая новость в ленте",
  },
];

export const staticBlocks = {
  weather: {
    name: 'Погода',
    id: 'weather',
  },
  visited: {
    name: 'Посещаемое',
    id: 'visited',
  },
  map: {
    name: 'Карта',
    id: 'map',
  },
  tele: {
    name: 'Телепрограмма',
    id: 'tele',
    items: [
      {
        time: '10:10',
        title: 'Старый фильм',
        context: 'BBC',
      },
      {
        time: '11:20',
        title: 'Хороший сериал',
        context: 'Serial.TV',
      },
      {
        time: '13:00',
        title: 'Новости в эфире',
        context: 'NewsCity',
      },
    ],
  },
  live: {
    name: 'Эфир',
    id: 'live',
    items: [
      {
        title: 'Последний герой',
        context: 'EPHIRE',
      },
      {
        title: 'React.JS',
        context: 'EPHIRE',
      },
      {
        title: 'Очередной фильм',
        context: 'EPHIRE',
      },
    ],
  },
}
