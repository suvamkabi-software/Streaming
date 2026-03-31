function createParticles() {
  const container = document.getElementById("particles");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";

    const colors = [
      "var(--neon-cyan)",
      "var(--neon-purple)",
      "var(--neon-pink)",
    ];
    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    particle.style.boxShadow = `0 0 10px ${particle.style.background}`;

    container.appendChild(particle);
  }
}
createParticles();

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");

function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");
  currentSlide = index;
  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

setInterval(nextSlide, 5000);

const trendingData = [
  {
    rank: "01",
    title: "My Hero Academia",
    genre: "Adventure",
    episodes: "170 EP",
    image:
      "https://m.media-amazon.com/images/M/MV5BY2QzODA5OTQtYWJlNi00ZjIzLThhNTItMDMwODhlYzYzMjA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    badge: "HOT",
  },
  {
    rank: "02",
    title: "Dandadan",
    genre: "supernatural",
    episodes: "24 EP",
    image:
      "https://m.media-amazon.com/images/I/81KBp6IbjEL._UF1000,1000_QL80_.jpg",
    badge: "TOP",
  },
  {
    rank: "03",
    title: "Hitori No Shita - The Outcast",
    genre: "Adventure",
    episodes: "80 EP",
    image: "https://images.justwatch.com/poster/342838090/s718/season-6.jpg",
    badge: "NEW",
  },
  {
    rank: "04",
    title: "Blue Lock",
    genre: "Sports ",
    episodes: "38 EP",
    image:
      "https://www.hindustantimes.com/ht-img/img/2024/06/24/original/blue_lock_season_2_1719233143370.jfif",
    badge: "HOT",
  },
  {
    rank: "05",
    title: "Chainsaw Man",
    genre: "Horror",
    episodes: "12 EP",
    image:
      "https://assets.teenvogue.com/photos/68f616ae1c9496efb7a87a1e/master/w_1600%2Cc_limit/unnamed%2520(83).jpg",
    badge: "TOP",
  },
  {
    rank: "06",
    title: "Rooster Fighter",
    genre: "action-dramedy ",
    episodes: "12 EP",
    image:
      "https://artworks.thetvdb.com/banners/v4/series/452575/posters/66a37133a9380.jpg",
    badge: "NEW",
  },
];

const horizontalContainer = document.getElementById("horizontalContainer");
trendingData.forEach((anime) => {
  const card = document.createElement("div");
  card.className = "trending-card";
  card.innerHTML = `
                <div class="trending-card-inner">
                    <div class="trending-card-bg" style="background-image: url('${anime.image}')"></div>
                    <div class="trending-rank">${anime.rank}</div>
                    <div class="trending-content">
                        <span class="trending-badge">${anime.badge}</span>
                        <h3 class="trending-title">${anime.title}</h3>
                        <div class="trending-meta">
                            <span>${anime.genre}</span>
                            <span>•</span>
                            <span>${anime.episodes}</span>
                        </div>
                    </div>
                </div>
            `;
  horizontalContainer.appendChild(card);
});

const trendingSection = document.querySelector(".trending-section");
let scrollProgress = 0;
let targetProgress = 0;
let isInTrending = false;

const trendingObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      isInTrending = entry.isIntersecting;
    });
  },
  { threshold: 0.1 },
);

trendingObserver.observe(trendingSection);

window.addEventListener("scroll", () => {
  if (!isInTrending) return;

  const rect = trendingSection.getBoundingClientRect();
  const sectionHeight = trendingSection.offsetHeight - window.innerHeight;
  const scrolled = Math.max(0, -rect.top);
  const progress = Math.min(1, scrolled / sectionHeight);

  targetProgress = progress;
});

function animateHorizontalScroll() {
  // Smooth interpolation (inertia effect)
  scrollProgress += (targetProgress - scrollProgress) * 0.1;

  const maxTranslate =
    horizontalContainer.scrollWidth - window.innerWidth + 100;
  const translate = scrollProgress * maxTranslate;

  horizontalContainer.style.transform = `translateX(-${translate}px)`;

  requestAnimationFrame(animateHorizontalScroll);
}
animateHorizontalScroll();

const animeData = [
  {
    title: "Berserk",
    rating: "9.9",
    genres: ["Action/Adventure", "Dark Fantasy"],
    episodes: "25",
    image:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/lepoint/ZKBKEQAY4VPTBLIZQVFKNGJMOY.jpg",
  },
  {
    title: "Dororo",
    rating: "9.8",
    genres: ["Dark Fantasy", "Action"],
    episodes: "24",
    image:
      "https://m.media-amazon.com/images/M/MV5BZGE2ZDZjNGItNzE5NS00MWFiLTlmNTItZmQ1YzJkNTUwNjZjXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Dragon Ball",
    rating: "9.9",
    genres: ["fantasy", "action-adventure"],
    episodes: "800+",
    image:
      "https://m.media-amazon.com/images/M/MV5BMGQ0ZWE4NDYtYWY0Mi00MjE0LWI1MzctZDA1NGExYzE3N2FiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Death Note",
    rating: "9.0",
    genres: ["Thriller", "Psychological"],
    episodes: "37",
    image: "https://images.justwatch.com/poster/210194718/s718/season-1.jpg",
  },
  {
    title: "Naruto",
    rating: "9.3",
    genres: ["action-adventure", "fantasy"],
    episodes: "720",
    image:
      "https://i.pinimg.com/736x/ee/8b/22/ee8b228891e70d0fa3fc96ac272e6df8.jpg",
  },
  {
    title: "Attack on Titan",
    rating: "9.1",
    genres: [" dark fantasy ", "post-apocalyptic"],
    episodes: "94",
    image:
      "https://imgc.allpostersimages.com/img/posters/trends-international-attack-on-titan-season-4-key-visual-3_u-L-FAAQE20.jpg",
  },
  {
    title: "One Piece",
    rating: "9.2",
    genres: [" Comedy ", "Adventure"],
    episodes: "1,155+",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Demon Slayer",
    rating: "8.6",
    genres: ["Supernatural", "Thriller"],
    episodes: "63",
    image:
      "https://pic8.iqiyipic.com/image/20250430/ac/33/a_100449112_m_601_en_m2_240_240.jpg",
  },
];

let displayedAnime = 0;
const animePerLoad = 4;

function loadAnimeGrid() {
  const grid = document.getElementById("animeGrid");
  const toLoad = animeData.slice(displayedAnime, displayedAnime + animePerLoad);

  toLoad.forEach((anime, index) => {
    const card = document.createElement("div");
    card.className = "anime-card reveal-scale";
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
                    <div class="anime-poster">
                        <img src="${anime.image}" alt="${anime.title}">
                        <div class="anime-rating">★ ${anime.rating}</div>
                    </div>
                    <div class="anime-info">
                        <h3 class="anime-title">${anime.title}</h3>
                        <div class="anime-genre">
                            ${anime.genres.map((g) => `<span class="genre-tag">${g}</span>`).join("")}
                        </div>
                        <div class="anime-stats">
                            <span class="episodes">📺 ${anime.episodes} Episodes</span>
                            <span style="color: var(--neon-cyan);">Watch →</span>
                        </div>
                    </div>
                `;
    grid.appendChild(card);

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  displayedAnime += animePerLoad;

  setTimeout(() => {
    toLoad.forEach((_, index) => {
      const cards = document.querySelectorAll(".anime-card");
      const card = cards[displayedAnime - animePerLoad + index];
      if (card) card.classList.add("active");
    });
  }, 100);
}

function loadMore() {
  const btn = document.getElementById("loadMoreBtn");
  btn.classList.add("loading");
  btn.textContent = "Loading";

  setTimeout(() => {
    if (displayedAnime < animeData.length) {
      loadAnimeGrid();
      btn.classList.remove("loading");
      btn.textContent = "Load More";
    } else {
      const newAnime = {
        title: "Random Anime " + Math.floor(Math.random() * 100),
        rating: (Math.random() * 2 + 7).toFixed(1),
        genres: ["Action", "Adventure"],
        episodes: Math.floor(Math.random() * 100),
        image: `https://images.unsplash.com/photo-${["1560972550-aba3456b5564", "1618336753974-aae8e04506aa", "1578632767115-351597cf2477"][Math.floor(Math.random() * 3)]}?w=600`,
      };
      animeData.push(newAnime);
      loadAnimeGrid();
      btn.classList.remove("loading");
      btn.textContent = "Load More";
    }
  }, 1500);
}

loadAnimeGrid();

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-scale")
  .forEach((el) => {
    revealObserver.observe(el);
  });

function openModal(type) {
  document.getElementById(type + "Modal").classList.add("active");
}

function closeModal(type) {
  document.getElementById(type + "Modal").classList.remove("active");
}

function handleLogin(e) {
  e.preventDefault();
  alert("Welcome back to Streaming! 🚀");
  closeModal("login");
}

function handleSignup(e) {
  e.preventDefault();
  alert("Welcome to the future of anime! 🎉");
  closeModal("signup");
}

window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.classList.remove("active");
  }
};

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
