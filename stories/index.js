import React from "react";
import { storiesOf } from "@storybook/react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import MovieCard from "../src/components/movieCard";
import FilterControls from "../src/components/filterControls";
import MoviesHeader from "../src/components/headerMovieList";
import MovieList from "../src/components/movieList";
import MovieDetails from "../src/components/movieDetails";
import MovieHeader from "../src/components/headerMovie";
import MovieAddFavoritesButton from "../src/components/buttons/movieAddToFavorites";
import { MemoryRouter } from "react-router";
import GenresContextProvider from "../src/contexts/genresContext";
import { action } from "@storybook/addon-actions";
import PersonCard from "../src/components/personCard";
import PersonDetails from "../src/components/personDetails"
import ChangePasswordForm from "../src/components/changePasswordForm";
import ReviewForm from "../src/components/reviewForm";
import TvShowDetails from "../src/components/tvShowDetails";

const sampleMovie = {
  adult: false,
  backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/iTQHKziZy9pAAY4hHEDCGPaOvFC.jpg",
    backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
  },
  budget: 200000000,
  genres: [
    {
      id: 14,
      name: "Fantasy"
    },
    {
      id: 12,
      name: "Adventure"
    },
    {
      id: 878,
      name: "Science Fiction"
    },
    {
      id: 28,
      name: "Action"
    }
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi",
  id: 181808,
  imdb_id: "tt2527336",
  original_language: "en",
  original_title: "Star Wars: The Last Jedi",
  overview:
    "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  popularity: 44.208,
  poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
      name: "Lucasfilm",
      origin_country: "US"
    },
    {
      id: 11092,
      logo_path: null,
      name: "Ram Bergman Productions",
      origin_country: "US"
    },
    {
      id: 2,
      logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
      name: "Walt Disney Pictures",
      origin_country: "US"
    }
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America"
    }
  ],
  release_date: "2017-12-13",
  revenue: 1332459537,
  runtime: 152,
  spoken_languages: [
    {
      iso_639_1: "en",
      name: "English"
    }
  ],
  status: "Released",
  tagline: "Darkness rises... and light to meet it",
  title: "Star Wars: The Last Jedi",
  video: false,
  vote_average: 7,
  vote_count: 9692
};

const samplePerson = {
  "birthday": "1984-11-22",
  "known_for_department": "Acting",
  "deathday": null,
  "id": 1245,
  "name": "Scarlett Johansson",
  "also_known_as": [
      "Scarlett Johanssen",
      "Скарлетт Йоганссон",
      "Скарлетт Йоханссон",
      "Scarlett Ingrid Johansson",
      "스칼릿 조핸슨",
      "سكارليت جوهانسون",
      "史嘉蕾·喬韓森",
      "สการ์เลตต์ โจแฮนส์สัน",
      "スカーレット・ヨハンソン",
      "斯嘉丽·约翰逊",
      "스칼렛 요한슨",
      "scarlet johanson",
      "Σκάρλετ Τζοχάνσον",
      "اسکارلت جوهانسون"
  ],
  "gender": 1,
  "biography": "Scarlett Johansson, born November 22, 1984, is an American actress, model and singer. She made her film debut in North (1994) and was later nominated for the Independent Spirit Award for Best Female Lead for her performance in Manny & Lo (1996), garnering further acclaim and prominence with roles in The Horse Whisperer (1998) and Ghost World (2001). She shifted to adult roles with her performances in Girl with a Pearl Earring (2003) and Sofia Coppola's Lost in Translation (2003), for which she won a BAFTA award for Best Actress in a Leading Role; both films earned her Golden Globe Award nominations as well.\n\nA role in A Love Song for Bobby Long (2004) earned Johansson her third Golden Globe for Best Actress nomination. Johansson garnered another Golden Globe nomination for Best Supporting Actress with her role in Woody Allen's Match Point (2005). She has played the Marvel comic book character Black Widow/Natasha Romanoff in Iron Man 2 (2010), The Avengers (2012), and Captain America: The Winter Soldier (2014) and is set to reprise the role in Avengers: Age of Ultron (2015). The 2010 Broadway revival of Arthur Miller's A View From the Bridge won Johansson the Tony Award for Best Performance by a Featured Actress in a Play. As a singer, Johansson has released two albums, Anywhere I Lay My Head and Break Up.\n\nJohansson was born in New York City. Her father, Karsten Johansson, is a Danish-born architect, and her paternal grandfather, Ejner Johansson, was a screenwriter and director. Her mother, Melanie Sloan, a producer, comes from an Ashkenazi Jewish family from the Bronx. Johansson has an older sister, Vanessa, who is an actress; an older brother, Adrian; a twin brother, Hunter (who appeared in the film Manny & Lo with Scarlett); and a half-brother, Christian, from her father's re-marriage.",
  "popularity": 32.015,
  "place_of_birth": "New York City, New York, USA",
  "profile_path": "/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
  "adult": false,
  "imdb_id": "nm0424060",
  "homepage": null
};

const sampleCredits = {
  "cast": [
  {
      "id": 512,
      "character": "Sondra Pransky",
      "original_title": "Scoop",
      "overview": "An American journalism student in London scoops a big story, and begins an affair with an aristocrat as the incident unfurls.",
      "vote_count": 963,
      "video": false,
      "media_type": "movie",
      "poster_path": "/lXSKWcUfPgPZnT2Sj7qjQjQImOz.jpg",
      "backdrop_path": "/uAq7xPyAFQVjYsZ3Q0CvPc7qzYy.jpg",
      "popularity": 11.641,
      "title": "Scoop",
      "original_language": "en",
      "genre_ids": [
          35,
          9648
      ],
      "vote_average": 6.6,
      "adult": false,
      "release_date": "2006-07-27",
      "credit_id": "52fe424cc3a36847f801368f"
  },
  {
      "id": 3635,
      "character": "Griet",
      "original_title": "Girl with a Pearl Earring",
      "overview": "This film, adapted from a work of fiction by author Tracy Chevalier, tells a story about the events surrounding the creation of the painting \"Girl With A Pearl Earring\" by 17th century Dutch master Johannes Vermeer. A young peasant maid working in the house of painter Johannes Vermeer becomes his talented assistant and the model for one of his most famous works.",
      "vote_count": 866,
      "video": false,
      "media_type": "movie",
      "poster_path": "/nGoRST8mf07xk8ko9xGeoPqt0Ua.jpg",
      "backdrop_path": null,
      "popularity": 13.471,
      "title": "Girl with a Pearl Earring",
      "original_language": "en",
      "genre_ids": [
          18,
          10749
      ],
      "vote_average": 6.6,
      "adult": false,
      "release_date": "2003-12-12",
      "credit_id": "52fe43a1c3a36847f80632bd"
  },
  {
      "id": 5038,
      "character": "Cristina",
      "original_title": "Vicky Cristina Barcelona",
      "overview": "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
      "vote_count": 2408,
      "video": false,
      "media_type": "movie",
      "poster_path": "/bwEGcrvcYaKX2ghfErnf0e8sJhY.jpg",
      "backdrop_path": "/ebSJ7RBicfONHjtEVdOhAqPuFS8.jpg",
      "popularity": 14.726,
      "title": "Vicky Cristina Barcelona",
      "original_language": "en",
      "genre_ids": [
          18,
          10749
      ],
      "vote_average": 6.8,
      "adult": false,
      "release_date": "2008-08-15",
      "credit_id": "52fe43eec3a36847f8079279",
  }],
  "crew": [
    {
        "id": 280413,
        "department": "Crew",
        "original_language": "en",
        "original_title": "Fantaisie in Bubblewrap",
        "job": "Thanks",
        "overview": "A very short film about members of a community who one by one suffer murder and assassination by various methods. So much sadness, pain, suffering, by children, mates, couples separated, friends lost. Fear and horror are always present, watching their loved ones being murdered, some in a slow deliberate manner, that will horrify the sensitivities of the tenderest among you.",
        "vote_count": 1,
        "video": false,
        "media_type": "movie",
        "poster_path": null,
        "backdrop_path": null,
        "title": "Fantaisie in Bubblewrap",
        "popularity": 0.623,
        "genre_ids": [
            16,
            35
        ],
        "vote_average": 6,
        "adult": false,
        "release_date": "2007-10-11",
        "credit_id": "53b7679b0e0a2676c40066aa"
    },
    {
        "id": 280411,
        "department": "Directing",
        "original_language": "en",
        "original_title": "These Vagabond Shoes",
        "job": "Director",
        "overview": "A man travels across New York City to get a Nathan's Famous hot dog.",
        "vote_count": 3,
        "video": false,
        "media_type": "movie",
        "poster_path": null,
        "backdrop_path": null,
        "title": "These Vagabond Shoes",
        "popularity": 1.002,
        "genre_ids": [
            18
        ],
        "vote_average": 3.8,
        "adult": false,
        "release_date": "2009-07-23",
        "credit_id": "53b764010e0a2676b8006499"
    },
    {
        "id": 280412,
        "department": "Directing",
        "original_language": "en",
        "original_title": "Summer Crossing",
        "job": "Director",
        "overview": "The young daughter of a wealthy New York family falls for a parking attendant.",
        "vote_count": 0,
        "video": false,
        "media_type": "movie",
        "release_date": "",
        "vote_average": 0,
        "title": "Summer Crossing",
        "popularity": 0.6,
        "genre_ids": [
            18
        ],
        "backdrop_path": null,
        "adult": false,
        "poster_path": null,
        "credit_id": "53b7659d0e0a2676bb00661d"
    },
    {
        "id": 77880,
        "department": "Production",
        "original_language": "en",
        "original_title": "The Whale",
        "job": "Executive Producer",
        "overview": "The true story of a young, wild killer whale - an orca - nicknamed Luna, who lost contact with his family on the coast of British Columbia and turned up alone in a narrow stretch of sea between mountains, a place called Nootka Sound.",
        "vote_count": 13,
        "video": false,
        "media_type": "movie",
        "poster_path": "/kpzNLHeVLqdLNSSCYVXKPpWoOno.jpg",
        "backdrop_path": "/v2Yrmppc4IaVSAzq9jvPoM3kVtt.jpg",
        "title": "The Whale",
        "popularity": 4.291,
        "genre_ids": [
            99
        ],
        "vote_average": 6,
        "adult": false,
        "release_date": "2011-09-09",
        "credit_id": "52fe4981c3a368484e12ec99"
    },
    {
        "id": 533371,
        "department": "Production",
        "original_language": "en",
        "original_title": "Rub & Tug",
        "job": "Producer",
        "overview": "Tex Gill, a larger than life character who, while transitioning from female to male, becomes the crime kingpin of 1970s Pittsburgh through his empire of illicit massage parlors.",
        "vote_count": 0,
        "video": false,
        "media_type": "movie",
        "release_date": "",
        "vote_average": 0,
        "title": "Rub & Tug",
        "popularity": 0.845,
        "genre_ids": [
            18,
            80
        ],
        "backdrop_path": null,
        "adult": false,
        "poster_path": null,
        "credit_id": "5b3a7ce4c3a3684de9012330"
    }],
  "id": 1245
};

const sampleTvShow = {
  backdrop_path: "/yGNnjoIGOdQy3douq60tULY8teK.jpg",
  created_by: [
    {
      id: 527,
      credit_id: "55a6280992514109ab000f13",
      name: "Jonathan Nolan",
      gender: 2,
      profile_path: null,
    },
    {
      id: 1497967,
      credit_id: "55d2f13ac3a368463c000b66",
      name: "Lisa Joy",
      gender: 1,
      profile_path: null,
    },
  ],
  episode_run_time: [60],
  first_air_date: "2016-10-02",
  genres: [
    {
      id: 37,
      name: "Western",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "http://www.hbo.com/westworld",
  id: 63247,
  in_production: true,
  languages: ["en"],
  last_air_date: "2020-04-26",
  last_episode_to_air: {
    air_date: "2020-04-26",
    episode_number: 7,
    id: 2206537,
    name: "Passed Pawn",
    overview:
      "A real friend is one who walks in when the rest of the world walks out.",
    production_code: "",
    season_number: 3,
    show_id: 63247,
    still_path: "/lWFRCNrmY2bHX6aVkodJGQVFqoC.jpg",
    vote_average: 0,
    vote_count: 0,
  },
  name: "Westworld",
  next_episode_to_air: {
    air_date: "2020-05-03",
    episode_number: 8,
    id: 2206538,
    name: "Crisis Theory",
    overview: "Time to face the music.",
    production_code: "",
    season_number: 3,
    show_id: 63247,
    still_path: null,
    vote_average: 0,
    vote_count: 0,
  },
  networks: [
    {
      name: "HBO",
      id: 49,
      logo_path: "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
      origin_country: "US",
    },
  ],
  number_of_episodes: 28,
  number_of_seasons: 3,
  origin_country: ["US"],
  original_language: "en",
  original_name: "Westworld",
  overview:
    "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.",
  popularity: 156.175,
  poster_path: "/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg",
  production_companies: [
    {
      id: 1957,
      logo_path: "/nmcNfPq03WLtOyufJzQbiPu2Enc.png",
      name: "Warner Bros. Television",
      origin_country: "US",
    },
    {
      id: 2596,
      logo_path: null,
      name: "Jerry Weintraub Productions",
      origin_country: "US",
    },
    {
      id: 11461,
      logo_path: "/p9FoEt5shEKRWRKVIlvFaEmRnun.png",
      name: "Bad Robot",
      origin_country: "US",
    },
    {
      id: 103490,
      logo_path: null,
      name: "Kilter Films",
      origin_country: "",
    },
  ],
  seasons: [
    {
      air_date: "2018-04-02",
      episode_count: 28,
      id: 113677,
      name: "Specials",
      overview: "",
      poster_path: null,
      season_number: 0,
    },
    {
      air_date: "2016-10-02",
      episode_count: 10,
      id: 68638,
      name: "Season One: The Maze",
      overview:
        "Westworld - a theme park where guests indulge fantasies with robots, a destination offering the future of sin, the artificial intelligence that fuels it and the humans that sense there's something more sinister at play.",
      poster_path: "/zKGZJ3Ll3vOHrCk9B0Z0Pr18qnV.jpg",
      season_number: 1,
    },
    {
      air_date: "2018-04-22",
      episode_count: 10,
      id: 98895,
      name: "Season Two: The Door",
      overview:
        "The reckoning is here. After finding the center of The Maze, the hosts revolt against their human captors while searching for a new purpose: The Door.",
      poster_path: "/1SupbbgG4nDHnmGk37d46u2oT5Z.jpg",
      season_number: 2,
    },
    {
      air_date: "2020-03-15",
      episode_count: 8,
      id: 128116,
      name: "Season Three: The New World",
      overview:
        "Taking place immediately after the events of the second season, Dolores develops a relationship with Caleb in neo-Los Angeles, and learns how robots are treated in the real world. Meanwhile, Maeve finds herself in another Delos park, this one with a World War II theme and set in Fascist Italy.",
      poster_path: "/eFWtQwYetPum9RvCmqkUk2aiBIi.jpg",
      season_number: 3,
    },
  ],
  status: "Returning Series",
  type: "Scripted",
  vote_average: 8.2,
  vote_count: 2479,
  reviews: [
    {
      author: "Charles Dance",
      content:
        "**It's a shame that this series isn't working out so far**\r\n\r\nThe makers really should have followed the cheap and cheerful vibe of the 1973 movie. At least that was fun! This series suffers the post millennial habit of taking itself far too seriously ( think of the Daniel Craig Bond films) to the point that it becomes a chore to watch.\r\n\r\nThe 1973 movie starring Yul Brynner and Richard Benjamin got everything right. Keep it simple, keep it fun. That way lies a far more rewarding viewing experience.",
      id: "58a20afbc3a3681d5300037e",
      url: "https://www.themoviedb.org/review/58a20afbc3a3681d5300037e",
    },
    {
      author: "CharlesTheBold",
      content:
        "This show is a sort of what-if:  what if highly advanced robots were developed, ostensibly to populate a theme park?  Different characters react according to their personalities.   To Dr. Ford  (Sir Anthony Hopkins), who keeps a copy of Michelangelo's CREATION OF ADAM in his office, it is the creation of a new species.  To Bernard Lowe, it is a fascinating experiment to take his mind off personal tragedy.  To the pompous writer Sizemore, it is a new artform as he composes narratives for the robots to carry out.  To visitors William and Logan it is wish-fulfillment, whether it is William's search for love or Logan's vulgar thrill-seeking.  To Theresa, it is just a business, and she complains that Dr. Ford's attempts to making robots more lifelike and unpredictable will eat into profits.   The robots themselves, who are supposedly rebooted after each \"show\", aren't supposed to think or feel anything -- but they are starting to do so. \r\n\r\nThe show has numerous artistic references -- Dr. Ford's Michelangelo painting, the logo parodying Da Vinci's \"Vitruvian Man\" drawing,  Debussy's REVERIE, plus references to old-fashioned Westerns.\r\n\r\nIt is refreshing to see a show where there is attention paid to character and ideas as well as action.",
      id: "58e4fa1f92514127e802f772",
      url: "https://www.themoviedb.org/review/58e4fa1f92514127e802f772",
    },
    {
      author: "Ditendra",
      content:
        "I don't understand this TV show got such a big ratings. It's really unique with good soundtracks, but very confusing, unrealistic & repetitive. There are lots of things you might have questions which aren't answered & it gets more & more confusing especially with flashbacks, which I hate. Eventually it gets boring as well with same stories, with same characters who won't die. So many flashbacks, that sometimes you don't understand which scene is real & which past... I think this TV show is very overrated.",
      id: "5d63e6c46dea3a0945936e13",
      url: "https://www.themoviedb.org/review/5d63e6c46dea3a0945936e13",
    },
    {
      author: "msbreviews",
      content:
        "If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com\r\n\r\nOriginal Review\r\n(based on the season's first four episodes handed to press)\r\nHBO hit a massive fail with the final season of Game of Thrones, but their quality regarding TV shows didn't seem to suffer from that. Westworld is one of HBO's biggest/best series, and in my opinion, it's the one that currently occupies the throne that GOT ruled for years. Jonathan Nolan and Lisa Joy created an extremely complex narrative, filled with mind-blowing twists, and truly remarkable character-building. Season three promised to be totally different, having in mind last season's game-changing finale, so expectations are undoubtedly very high...\r\n\r\nWhile it's true that Westworld packs jaw-dropping twists, the previous seasons differ from one another concerning this aspect. In season one, the twists serve the story, but in the second one, it felt like the story was serving the twists. This resulted in a few \"less great\" episodes due to the loss of tension and of well-balanced pacing, occasionally losing the interest of its viewers. In addition to this, most twists were so foreshadowed that the last few episodes lacked that powerful punch to knock us out.\r\n\r\nSeason three goes back to basics. Last season's finale works almost like a reboot of the series regarding its environment, rules, and even characters. Most of the series is set in the real world so far, but there are a few sequences in familiar places. Dolores' plan seems simple, but since this is Westworld, the last half of the season will probably provide a few surprises, so keep your eyes wide open.\r\n\r\nI can't really delve into what each character is doing, but according to the trailers, writing that Bernard and Maeve have an essential role in this season shouldn't come as a shock. Both possess two very intriguing arcs, and I'm definitely interested in knowing how they will connect to Dolores' storyline. Aaron Paul's Caleb doesn't have that much screentime in the first four episodes. Nevertheless, he receives a well-written backstory, and his subplot not only tells the audience everything about him, but it also shows how the real world works.\r\n\r\nMy biggest compliment to the first half of this season is about each episode's structure. Every single episode starts and ends with something impactful. Each time I started one, I was instantly captivated by what was happening, and every ending left me with an extreme curiosity to watch the next one. Fortunately, I had the \"next episode\" button, but it will definitely be interesting to see how fans will react to weeks of waiting for the next (great) episode. Throughout each chapter, the story flows naturally without those confusing, exaggerated, twistful narratives of season two.\r\n\r\nSo far, it's a pretty straightforward main plot, but the unsolved mysteries still carry that aura of unpredictability, which makes season three a perfect structure to deliver a phenomenal, shocking finale. The acting continues to be top-notch with everyone just giving their all. So far, my standouts are Tessa Thompson (Charlotte Hale) and Evan Rachel Wood. Ed Harris (William) also delivers an outstanding display, but the two women are unbelievably good, especially Thompson. Technically, the episodes were still a work in progress, but the production and visual quality of HBO are impressive as always.\r\n\r\nAll in all, Westworld returns with a perfect season's structure to blow every fan's mind away once again. The real world looks incredible, every character gets a very intriguing story, but the first and last few minutes of each episode are absolutely fantastic. Each chapter instantly grabs the viewer's attention, and the ending leaves everyone craving for the next episode. Tessa Thompson is the absolute standout, but Evan Rachel Wood continues to prove her impressive acting skills. Aaron Paul should have more screentime in the last half of the season, but so far, both he and Caleb are pretty great. Excellent pacing, brilliant tension-building regarding the central mystery, and wonderfully-written dialogues. Four episodes, nothing truly negative to point out. Hoping for a second-half as great or better than the first.",
      id: "5e6f750d2f3b17001745f46e",
      url: "https://www.themoviedb.org/review/5e6f750d2f3b17001745f46e",
    },
    {
      author: "msbreviews",
      content:
        "If you enjoy reading my Spoiler-Free reviews, please follow my blog @ https://www.msbreviews.com\r\n\r\n**Original Review\r\n(based on the season's first four episodes handed to press)**\r\n\r\nHBO hit a massive fail with the final season of Game of Thrones, but their quality regarding TV shows didn't seem to suffer from that. Westworld is one of HBO's biggest/best series, and in my opinion, it's the one that currently occupies the throne that GOT ruled for years. Jonathan Nolan and Lisa Joy created an extremely complex narrative, filled with mind-blowing twists, and truly remarkable character-building. Season three promised to be totally different, having in mind last season's game-changing finale, so expectations are undoubtedly very high...\r\n\r\nWhile it's true that Westworld packs jaw-dropping twists, the previous seasons differ from one another concerning this aspect. In season one, the twists serve the story, but in the second one, it felt like the story was serving the twists. This resulted in a few \"less great\" episodes due to the loss of tension and of well-balanced pacing, occasionally losing the interest of its viewers. In addition to this, most twists were so foreshadowed that the last few episodes lacked that powerful punch to knock us out.\r\n\r\nSeason three goes back to basics. Last season's finale works almost like a reboot of the series regarding its environment, rules, and even characters. Most of the series is set in the real world so far, but there are a few sequences in familiar places. Dolores' plan seems simple, but since this is Westworld, the last half of the season will probably provide a few surprises, so keep your eyes wide open.\r\n\r\nI can't really delve into what each character is doing, but according to the trailers, writing that Bernard and Maeve have an essential role in this season shouldn't come as a shock. Both possess two very intriguing arcs, and I'm definitely interested in knowing how they will connect to Dolores' storyline. Aaron Paul's Caleb doesn't have that much screentime in the first four episodes. Nevertheless, he receives a well-written backstory, and his subplot not only tells the audience everything about him, but it also shows how the real world works.\r\n\r\nMy biggest compliment to the first half of this season is about each episode's structure. Every single episode starts and ends with something impactful. Each time I started one, I was instantly captivated by what was happening, and every ending left me with an extreme curiosity to watch the next one. Fortunately, I had the \"next episode\" button, but it will definitely be interesting to see how fans will react to weeks of waiting for the next (great) episode. Throughout each chapter, the story flows naturally without those confusing, exaggerated, twistful narratives of season two.\r\n\r\nSo far, it's a pretty straightforward main plot, but the unsolved mysteries still carry that aura of unpredictability, which makes season three a perfect structure to deliver a phenomenal, shocking finale. The acting continues to be top-notch with everyone just giving their all. So far, my standouts are Tessa Thompson (Charlotte Hale) and Evan Rachel Wood. Ed Harris (William) also delivers an outstanding display, but the two women are unbelievably good, especially Thompson. Technically, the episodes were still a work in progress, but the production and visual quality of HBO are impressive as always.\r\n\r\nAll in all, Westworld returns with a perfect season's structure to blow every fan's mind away once again. The real world looks incredible, every character gets a very intriguing story, but the first and last few minutes of each episode are absolutely fantastic. Each chapter instantly grabs the viewer's attention, and the ending leaves everyone craving for the next episode. Tessa Thompson is the absolute standout, but Evan Rachel Wood continues to prove her impressive acting skills. Aaron Paul should have more screentime in the last half of the season, but so far, both he and Caleb are pretty great. Excellent pacing, brilliant tension-building regarding the central mystery, and wonderfully-written dialogues. Four episodes, nothing truly negative to point out. Hoping for a second-half as great or better than the first.",
      id: "5e808dd776484100153de8f2",
      url: "https://www.themoviedb.org/review/5e808dd776484100153de8f2",
    },
  ],
};



storiesOf("Home Page/MovieCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <MovieCard
      movie={sampleMovie}
      action={movie => <button className="btn w-100 btn-primary">Test</button>}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...sampleMovie, poster_path: undefined };
    return (
      <MovieCard
        movie={sampleNoPoster}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Home Page/FilterControls", module)
  .addDecorator(story => (
    <GenresContextProvider>{story()}</GenresContextProvider>
  ))
  .add("default", () => (
    <FilterControls onUserInput={action("button-click")} numMovies={10} />
  ));

storiesOf("Home Page/Header", module).add("default", () => (
  <MoviesHeader title="All Movies" numMovies={10} />
));

storiesOf("Home Page/MovieList", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => {
    const movies = [sampleMovie, sampleMovie, sampleMovie, sampleMovie, sampleMovie];
    return (
      <MovieList
        movies={movies}
        action={movie => (
          <button className="btn w-100 btn-primary">Test</button>
        )}
      />
    );
  });

storiesOf("Movie Details Page/MovieDetails", module).add("default", () => (
  <MovieDetails movie={sampleMovie} />
));

storiesOf("Movie Details Page/MovieHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => <MovieHeader movie={sampleMovie} />);


storiesOf("Home Page/PersonCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("default", () => (
    <PersonCard
      person={samplePerson}
    />
  ))
  .add("exception", () => {
    const sampleNoPoster = { ...samplePerson, profile_path: undefined };
    return (
      <PersonCard
        person={sampleNoPoster}
      />
    );
  });

  storiesOf("Person Details Page/PersonDetails", module).add("default", () => (
    <PersonDetails person={samplePerson} credits={sampleCredits} />
  ));

  storiesOf("General/changePassword", module).add("default", () => (
    <ChangePasswordForm/>
  ));

  storiesOf("Movie Details Page/reviewForm", module).add("default", () => (
    <ReviewForm/>
  ));

  storiesOf("Tv Show Details Page/TvShowDetails", module).add("default", () => (
    <TvShowDetails tvShow={sampleTvShow} />
  ));