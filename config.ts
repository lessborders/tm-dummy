import * as Models from 'models'

export const events: Models.Event[] = [
  {
    id: 1,
    name: 'Art lessons for students',
    start: new Date(2023, 4, 12, 21, 30),
    end: new Date(2023, 4, 12, 23, 30),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-2.jpg',
    location: 'Leipzig',
    badge: 'Info text',
    tags: ['art', 'painting'],
  },
  {
    id: 2,
    name: 'Spring Showcase "Season" of dance"',
    start: new Date(2023, 5, 7, 17, 0),
    end: new Date(2023, 5, 9, 17, 0),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-3.jpg',
    location: 'München',
    seated: true,
    tags: ['frühling', 'tanzen'],
  },
  {
    id: 3,
    name: 'Step-up Open Mic Night',
    start: new Date(2023, 5, 8, 14, 0),
    end: new Date(2023, 5, 9, 17, 0),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-6.jpg',
    location: 'Nürnberg',
    tags: ['comedy'],
  },
  {
    id: 4,
    name: 'A new way of life (Seated)',
    start: new Date(),
    end: new Date(new Date().getTime() + 86400000),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-1.jpg',
    location: 'München',
    tags: [],
    seated: true,
  },
  {
    id: 5,
    name: 'Trainee leadership program',
    start: new Date(),
    end: new Date(new Date().getTime() + 86400000),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-8.jpg',
    location: 'Berlin',
    tags: ['training'],
  },
  {
    id: 6,
    name: 'Shutter life',
    start: new Date(),
    end: new Date(new Date().getTime() + 86400000),
    image:
      'https://www.gambolthemes.net/html-items/barren-html/disable-demo-link/images/event-imgs/img-4.jpg',
    location: 'München',
    tags: ['photography', 'camera'],
  },
]

export const getEvent = (id: number): Models.Event => {
  const event = events.find((event) => event.id == id)!
  return event
}
