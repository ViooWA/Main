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

function redirectToEndpoint(endpoint, query, method) {
  const fullUrl = `${endpoint}?${query}`;

  axios({
    method: method.toLowerCase(),
    url: fullUrl,
  })
    .then((response) => {
      if (response.data.redirectUrl) {
        window.location.href = response.data.redirectUrl;
      } else {
        window.location.href = fullUrl;
      }
    })
    .catch(() => {
      window.location.href = fullUrl;
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
      card.classList.add(
        "card",
        "rounded-lg",
        "shadow-md",
        "p-4",
        "hover:shadow-xl",
        "transition-all",
        "duration-300"
      );

      card.innerHTML = `
        <h3 class="text-lg font-bold mb-2">${feature.name}</h3>
        <p class="text-sm mb-4">${feature.description}</p>
        <div class="button-container">
          <button
            class="py-2 px-4 rounded-lg gradient-button"
            onclick="redirectToEndpoint('${feature.endpoint}', '${feature.query}', '${feature.method}')"
          >
            ${feature.method}
          </button>
        </div>
      `;

      categoryCards.appendChild(card);
    });

  featureContainer.appendChild(categorySection);
});