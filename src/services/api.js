export const ExerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "23b5f050b1mshde672cff6bcdec7p118632jsn58627ad03391",
  },
};

//   export const youtubeSearchOptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
//       "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     },
//   };
export const FetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
};
