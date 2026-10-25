const BASE_URL = "https://saravan.dev";

// Only real pages; template demo routes (blog, intro, *_single, ...) are noindexed and left out
const routes = [
  { path: "", priority: 1 },
  { path: "/agencies", priority: 0.9 },
  { path: "/service", priority: 0.9 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/about", priority: 0.7 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
