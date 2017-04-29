# Drag Race API

An API to retrive information about _RuPaul's DraG Race_ Queens, Seasons and Episodes.

## Queen Endpoints

### GET `https://drag-race.club/api/queens`

example response
```
[
  {
    name: 'Trixie Matel',
    winner: false,
    place: 6,
    season: {
      label: 7,
      id: '71231dqd1',
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: '13131',
      },
    ],
    quote: 'Okay, calm down there public school.',
    image_url: 'http://trixie-matel.com/213131.jpg',
  },
  { ... },
]
```

### GET `https://drag-race.club/api/queens/:id`

example response:

```
  {
    name: 'Trixie Matel',
    winner: false,
    place: 6,
    season: {
      label: 7,
      id: '71231dqd1',
    },
    episodes: [
      {
        label: 'What a fun episode',
        id: '13131',
      },
    ],
    quote: 'Okay, calm down there public school.',
    image_url: 'http://trixie-matel.com/213131.jpg',
  }
```
