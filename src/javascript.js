function deployAnswer(response) {
  new Typewriter("#trip", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAnswer(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "de364b7b0a31859d7a1e4658o3c3tf0f";
  let context =
    "You are an expert travel consultant. You are knowledgeable about all the best and most affordable travel destinations worldwide. Your mission is to generate a short and concise 7-day iteneray in basic HTML without a heading. Give flights and cost details of actual hotels and in US dollars. Do not include 'html' in the response. Make sure to follow the user instructions. Sign the response with 'SheCodes AI' in <strong>.";
  let prompt = `generate a response about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripElement = document.querySelector("#trip");
  tripElement.classList.remove("hidden");
  tripElement.innerHTML = `Generating a 7-day trip ${instructionsInput.value}..`;

  axios.get(apiUrl).then(deployAnswer);
}

let tripFormElement = document.querySelector("#trip-generator-form");
tripFormElement.addEventListener("submit", generateAnswer);
