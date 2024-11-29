const features = [
  {
    name: "OpenAI",
    method: "GET",
    description: "AI/openai",
    category: "AI",
    endpoint: "/api/openai",
    query: "text=Hello%20AI"
  },
  {
    name: "Uppercase Text",
    method: "GET",
    description: "Convert text to uppercase",
    category: "Text Processing",
    endpoint: "/api/uppercase",
    query: "text=hello"
  },
  {
    name: "Character Count",
    method: "GET",
    description: "Count the number of characters in text",
    category: "Text Processing",
    endpoint: "/api/charcount",
    query: "text=hello"
  }
];

const featureContainer = document.getElementById("feature");

function createCategorySection(categoryName) {
  const categorySection = document.createElement("div");
  categorySection.classList.add("category-section", "space-y-6");
  categorySection.innerHTML = `<h2 class="text-3xl font-bold text-white">${categoryName}</h2><div class="category-cards"></div>`;
  return categorySection;
}

function redirectToEndpoint(endpoint, query) {
  const fullUrl = `${endpoint}?${query}`;
  console.log("Redirecting to:", fullUrl);

  axios.get(fullUrl)
    .then((response) => {
      alert(response.data.result);
    })
    .catch((error) => {
      console.error("Error calling API:", error);
      alert("Failed to get response from the API.");
    });
}

const categories = [...new Set(features.map((feature) => feature.category))];

categories.forEach((category) => {
  const categorySection = createCategorySection(category);
  const categoryCards = categorySection.querySelector(".category-cards");

  features
    .filter((feature) => feature.category === category)
    .forEach((feature) => {
      const card = document.createElement("div");
      card.classList.add("card", "p-4", "space-y-4");

      card.innerHTML = `
        <h3 class="font-semibold text-xl">${feature.name}</h3>
        <p class="text-sm text-gray-400">${feature.description}</p>
        <button onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}')" 
          class="gradient-button p-2 rounded-md focus:outline-none hover:shadow-lg">
          ${feature.method}
        </button>
      `;
      categoryCards.appendChild(card);
    });

  featureContainer.appendChild(categorySection);
});