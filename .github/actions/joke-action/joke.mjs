import request from 'request-promise';

const options = {
  method: "GET",
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
    "User-Agent":
      "Writing JavaScript action GitHub Learning Lab course.  Visit lab.github.com or to contact us.",
  },
  json: true,
};

export default async function getJoke() {
  const response = await request(options);

  return response.joke;
}
