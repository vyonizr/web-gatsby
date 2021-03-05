import {
  fr,
  gamer,
  musicProducer,
  visualHobbyist,
  programmer,
} from "static/images/avatars"

const notFoundMessages = ["lost your compass?", "nothing to see", "page not found"]

const characters = [
  {
    role: "Fitrahtur Rahman",
    avatar: fr,
    links: [
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/fitrahtur-rahman/",
      },
      {
        name: "blog",
        url: "https://blog.vyonizr.com/",
      },
    ],
  },
  {
    role: "a music producer",
    avatar: musicProducer,
    links: [
      {
        name: "spotify",
        url:
          "https://open.spotify.com/artist/40lkpbIOSU33kN0mZyMvFW?si=cjJAEzngRh-IZdFX_up2uQ",
      },
      {
        name: "apple music",
        url: "https://music.apple.com/us/artist/vyonizr/818525307",
      },
      {
        name: "youtube",
        url: "https://www.youtube.com/channel/UCf5J9KJQsHHiVFWokEnegqg",
      },
    ],
  },
  {
    role: "a programmer",
    avatar: programmer,
    links: [
      {
        name: "github",
        url: "https://github.com/vyonizr/",
      },
      {
        name: "codewars",
        url: "https://www.codewars.com/users/vyonizr",
      },
    ],
  },
  {
    role: "a gamer",
    avatar: gamer,
    links: [
      {
        name: "steam",
        url: "https://steamcommunity.com/id/vyonizr/",
      },
    ],
  },
  {
    role: "a visual hobbyist",
    avatar: visualHobbyist,
    links: [
      {
        name: "vsco",
        url: "https://vsco.co/vyonizr/gallery",
      },
      {
        name: "deviantart",
        url: "https://www.deviantart.com/vyonizr",
      },
    ],
  },
]

export { notFoundMessages, characters }
