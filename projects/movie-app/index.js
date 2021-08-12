const API_URL =
  "https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=dev";

async function fetchTest(url) {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
}

// fetchTest(API_URL);

const API_tianqi =
  "http://aider.meizu.com/app/weather/listWeather?cityIds=101240101";

fetchTest(API_tianqi);
