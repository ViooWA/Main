const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');
});

const features = [
  {
    name: "OpenAI",
    method: "GET",
    description: "AI/openai",
    category: "AI",
    endpoint: "../api/api",
    query: "tag=openai&text=Hai%20kamu"
  },
  {
    name: "BlackBox",
    method: "GET",
    description: "AI/blackbox",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=blackbox&text=Hai%20kamu"
  },
  {
    name: "LuminAI",
    method: "GET",
    description: "AI/luminai",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=luminai&text=Hai%20kamu"
  },
  {
    name: "SimiSimi",
    method: "GET",
    description: "AI/simisimi",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=simisimi&text=Hai%20kamu"
  },
  {
    name: "Gemini",
    method: "GET",
    description: "AI/gemini",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=gemini&text=Hai%20kamu"
  },
  {
    name: "Mora-AI",
    method: "GET",
    description: "AI/morai",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=morai&text=Hai%20kamu&username=Vioo"
  },
  {
    name: "Moshi-AI",
    method: "GET",
    description: "AI/moshiai",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=moshiai&text=Hai%20kamu"
  },
  {
    name: "Latukam",
    method: "GET",
    description: "AI/latukam",
    category: "AI",
    endpoint: "../api.js",
    query: "tag=latukam&text=Hai%20kamu"
  },
  {
    name: "Google-Search",
    method: "GET",
    description: "Search/google",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=google&text=Kylian%20Mbappe"
  },
  {
    name: "NPM Search",
    method: "GET",
    description: "Search/npm",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=npm&text=Axios"
  },
  {
    name: "Pinterest",
    method: "GET",
    description: "Search/pinterest",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=pinterest&text=Kylian%20Mbappe"
  },
  {
    name: "Wikimedia",
    method: "GET",
    description: "Search/wikimedia",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=wikimedia&text=Harimau"
  },
  {
    name: "Playstore",
    method: "GET",
    description: "Search/playstore",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=playstore&text=Minecraft"
  },
  {
    name: "Happymod",
    method: "GET",
    description: "Search/happymod",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=happymod&text=Minecraft"
  },
  {
    name: "Komiku-Search",
    method: "GET",
    description: "Search/komiku",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=komiku&text=Shikanoko"
  },
  {
    name: "McpeDL",
    method: "GET",
    description: "Search/mcpedl",
    category: "SEARCH",
    endpoint: "../api.js",
    query: "tag=mcpedl&text=Jenny"
  },
  {
    name: "Brat-Sticker",
    method: "GET",
    description: "Maker/brat",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=brat&text=Halo%20kamu"
  },
  {
    name: "Yt-Comment",
    method: "GET",
    description: "Maker/ytcomment",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=ytcomment&text=Halo%20kamu&avatar=https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg&username=Vioo"
  },
  {
    name: "Carbonify",
    method: "GET",
    description: "Maker/carbon",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=carbon&text=Halo%20kamu"
  },
  {
    name: "Txt-Image",
    method: "GET",
    description: "Maker/txtimg",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=txtimg&text=Halo%20kamu"
  },
  {
    name: "MemeGen",
    method: "GET",
    description: "Maker/memegen",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=memegen&url=https://pomf2.lain.la/f/6wng83b5.jpg&text=Halo&text1=kamu"
  },
  {
    name: "BlurImage",
    method: "GET",
    description: "Maker/blurimg",
    category: "MAKER",
    endpoint: "../api.js",
    query: "tag=blurimg&url=https://i.ytimg.com/vi/LIohsg2kHEM/maxresdefault.jpg"
  },
  {
    name: "MediaFire",
    method: "GET",
    description: "Downloader/mediafire",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=mediafire&url=https://www.mediafire.com/file/o0008kd4n0q8dxa/Infinity-V1.0.0+.zip/file"
  },
  {
    name: "Tiktok",
    method: "GET",
    description: "Downloader/ttdl",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=ttdl&url=https://vm.tiktok.com/ZSjVn47bC/"
  },
  {
    name: "Instagram",
    method: "GET",
    description: "Downloader/igdl",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=igdl&url=https://www.instagram.com/p/DCQhOuXTRvE/?img_index=1&igsh=MWF2dXU3aWtpazY2NQ=="
  },
  {
    name: "Facebook",
    method: "GET",
    description: "Downloader/fbdl",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=fbdl&url=https://www.facebook.com/share/r/12BFZAtjpS8/?mibextid=qDwCgo"
  },
  {
    name: "Capcut",
    method: "GET",
    description: "Downloader/capcut",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=capcut&url=https://www.capcut.com/t/Zs8Sw9wsE/%20aesthetic"
  },
  {
    name: "Google-Drive",
    method: "GET",
    description: "Downloader/gdrive",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=gdrive&url=https://drive.google.com/file/d/1YTD7Ymux9puFNqu__5WPlYdFZHcGI3Wz/view?usp=drivesdk"
  },
  {
    name: "YouTube",
    method: "GET",
    description: "Downloader/ytdl",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=ytdl&url=https://youtube.com/shorts/kpsR7ogZZ5c?si=vlI0bE-11nyj3nI9"
  },
  {
    name: "Twitter",
    method: "GET",
    description: "Downloader/twitter",
    category: "DOWNLOADER",
    endpoint: "../api.js",
    query: "tag=twitter&url=https://twitter.com/Eminem/status/943590594491772928"
  },
  {
    name: "Otakudesu-Search",
    method: "GET",
    description: "Anime/otakudesu-src",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=otakudesu-src&text=Naruto"
  },
  {
    name: "Otakudesu-Detail",
    method: "GET",
    description: "Anime/otakudesu-detail",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=otakudesu-detail&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Otakudesu-Ongoing",
    method: "GET",
    description: "Anime/otakudesu-ongoing",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=otakudesu-ongoing"
  },
  {
    name: "Otakudesu-Download",
    method: "GET",
    description: "Anime/otakudesu-dl",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=otakudesu-dl&url=https://otakudesu.cloud/lengkap/btr-nng-sub-indo-part-1"
  },
  {
    name: "Animebatch-Search",
    method: "GET",
    description: "Anime/abatch-src",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=abatch-src&text=Maou"
  },
  {
    name: "Animebatch-Download",
    method: "GET",
    description: "Anime/abatch-dl",
    category: "ANIME",
    endpoint: "../api.js",
    query: "tag=abatch-dl&url=https://www.animebatch.id/maou-no-ore-ga-dorei-elf-wo-yome-ni-shitanda-ga-dou-medereba-ii-sub-indo/"
  },
  {
    name: "Tebak Gambar",
    method: "GET",
    description: "Games/tebakgambar",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakgambar"
  },
  {
    name: "Tebak HeroML",
    method: "GET",
    description: "Games/tebakheroml",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakheroml"
  },
  {
    name: "Tebak JKT",
    method: "GET",
    description: "Games/tebakjkt",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakjkt"
  },
  {
    name: "Tebak Hewan",
    method: "GET",
    description: "Games/tebakhewan",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakhewan"
  },
  {
    name: "Tebak Game",
    method: "GET",
    description: "Games/tebakgame",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakgame"
  },
  {
    name: "Tebak Bendera",
    method: "GET",
    description: "Games/tebakbendera",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebakbendera"
  },
  {
    name: "Tebak Lagu",
    method: "GET",
    description: "Games/tebaklagu",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebaklagu"
  },
  {
    name: "Tebak Lirik",
    method: "GET",
    description: "Games/tebaklirik",
    category: "GAMES",
    endpoint: "../api.js",
    query: "tag=tebaklirik"
  },
  {
    name: "ToBase64",
    method: "GET",
    description: "Convert/tobase64",
    category: "CONVERT",
    endpoint: "../api.js",
    query: "tag=tobase64&text=Halo%20kamu"
  },
  {
    name: "ToUtf8",
    method: "GET",
    description: "Convert/toutf8",
    category: "CONVERT",
    endpoint: "../api.js",
    query: "tag=toutf8&text=SGFsbyBrYW11"
  },
  {
    name: "To GithubRaw",
    method: "GET",
    description: "Convert/githubraw",
    category: "CONVERT",
    endpoint: "../api.js",
    query: "tag=githubraw&url=https://github.com/ViooWA/Web/blob/main/vercel.json"
  },
  {
    name: "To GithubOri",
    method: "GET",
    description: "Convert/githubori",
    category: "CONVERT",
    endpoint: "../api.js",
    query: "tag=githubori&url=https://raw.githubusercontent.com/ViooWA/Web/main/vercel.json"
  },
  {
    name: "NSFW",
    method: "GET",
    description: "NSFW/nsfw",
    category: "NSFW & SFW",
    endpoint: "../api.js",
    query: "tag=nsfw&text=trap"
  },
  {
    name: "SFW",
    method: "GET",
    description: "SFW/sfw",
    category: "NSFW & SFW",
    endpoint: "../api.js",
    query: "tag=sfw&text=waifu"
  }
];

function createCategorySection(categoryName) {
  const categorySection = document.createElement("div");
  categorySection.classList.add("p-6", "rounded-lg", "shadow-lg", "bg-gray-800");

  categorySection.innerHTML = `
    <h2 class="text-2xl font-semibold gradient-text mb-4">${categoryName}</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 category-cards"></div>
  `;

  return categorySection;
}

function redirectToEndpoint(endpoint, query, method) {
  const fullUrl = `${endpoint}?${query}`;

  if (method === "GET") {
    window.open(fullUrl, "_blank");
  } else if (method === "POST") {
    const data = Object.fromEntries(new URLSearchParams(query));
    axios.post(endpoint, data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Request berhasil! Lihat konsol untuk respons.");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        if (error.response) {
          console.error("Detail Error:", error.response.data);
        }
        alert("Terjadi kesalahan! Lihat konsol untuk detail.");
      });
  }
}

const featureContainer = document.getElementById("feature");
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