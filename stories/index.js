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
  popularity: 271.416,
  known_for_department: "Acting",
  gender: 2,
  id: 1910848,
  profile_path: "/1fmjgN8EvDj1TiEJk2Zs4y0T40O.jpg",
  adult: false,
  known_for: [
      {
          original_name: "萌妻食神",
          vote_count: 6,
          poster_path: "/xb40Li6ff1BK0pVOxV4lutssCrR.jpg",
          media_type: "tv",
          name: "Cinderella Chef",
          vote_average: 9.2,
          id: 79574,
          first_air_date: "2018-04-23",
          original_language: "zh",
          genre_ids: [
              35,
              10765,
              10766
          ],
          backdrop_path: "/rnzmWKEiWPb8GC1mlqQojj8ccWj.jpg",
          overview: "",
          origin_country: []
      },
      {
          original_name: "外星女生柴小七",
          vote_count: 5,
          poster_path: "/5e2owvs9TWVsuIacTFxJGPp6KVW.jpg",
          media_type: "tv",
          name: "My Girlfriend is an Alien",
          vote_average: 7.8,
          id: 92779,
          first_air_date: "2019-08-19",
          original_language: "zh",
          genre_ids: [
              35,
              10765
          ],
          backdrop_path: "/kCl7piWv3pypgYfyLFi7ZgFGlYV.jpg",
          overview: "The alien girl Chai Xiaoqi tells the story of Fang Xiaoqi, the overbearing president of the alien girl who died from the \"Cape Town Planet\", who was suffering from the \"rainy weather heterosexual amnesia\". A high-energy hilarious and romantic cross-star love story. The female host Chai Xiaoqi is not only an alien, but also a true-handed witch. Once she inhales the hormones emitted by the males in the earth, she will fall into the \"flowery state\" and suffer from various diseases. The fun and ridiculously ridiculous romance will restore the singularity of the girl in the perfection of the girl. In order to survive on the human earth, Chai Xiaoqi will use his various super powers to solve one accident after another, like a roller coaster. The ups and downs will make the audience hooked. The male lord is cold and is an alternative overbearing president. When it rains, he will forget the opposite sex that appears around him. For this reason, he and the female host will launch various \"fighting and fighting\" laughter dramas. The experience of high sweetness and romance is expected to be Strongly slammed the girl's heart when it was broadcast.",
          origin_country: [
              "CN"
          ]
      },
      {
          original_name: "Devil Lover เผลอใจ..ให้นายปีศาจ",
          id: 74640,
          origin_country: [
              "TH"
          ],
          name: "Devil Lover เผลอใจ..ให้นายปีศาจ",
          backdrop_path: "/iRYOwW6DRIRwDYVmRWA8nbfaV2c.jpg",
          original_language: "th",
          first_air_date: "2015-10-07",
          genre_ids: [
              35
          ],
          vote_count: 0,
          media_type: "tv",
          vote_average: 0,
          overview: "",
          poster_path: "/moThN7iERydEHI2RbfrmhCp69R4.jpg"
      }
  ],
  name: "Thassapak Hsu"
};

const samplePerson2 = {
  birthday: null,
  known_for_department: "Acting",
  deathday: null,
  id: 2200292,
  name: "Laura Sohn",
  also_known_as: [],
  gender: 1,
  biography: "Laura Sohn is an American actress. She is a graduate of Rutgers University.",
  popularity: 89.495,
  place_of_birth: "New Jersey, USA",
  profile_path: "/iABra2b6kO0JfHdBnVMROYtkuuM.jpg",
  adult: false,
  imdb_id: "nm8089556",
  homepage: "http://www.rutgersactorpresentation.com/laura-sohn"
}

const sampleCredits = {
  cast: [
      {
          id: 81114,
          character: "Mary Yoon",
          episode_count: 1,
          overview: "A self-proclaimed \"pesky atheist\" is encouraged to help strangers by someone claiming to be God who friends him on Facebook.",
          origin_country: [
              "US"
          ],
          original_name: "God Friended Me",
          genre_ids: [
              18,
              9648,
              10751
          ],
          name: "God Friended Me",
      },
      {
          id: 46952,
          character: "Agent Alina Park",
          episode_count: 5,
          overview: "Raymond \"Red\" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this \"The Blacklist\". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.",
          origin_country: [
              "US"
          ],
          original_name: "The Blacklist",
          "genre_ids": [
              80,
              18,
              9648
          ],
          name: "The Blacklist",
      }
  ],
  crew: [],
  id: 2200292
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
    <PersonDetails person={samplePerson2} credits={sampleCredits} />
  ));

  storiesOf("General/changePassword", module).add("default", () => (
    <ChangePasswordForm/>
  ));

  storiesOf("Movie Details Page/reviewForm", module).add("default", () => (
    <ReviewForm/>
  ));