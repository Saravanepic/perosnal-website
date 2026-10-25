export const metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  robots: { index: false, follow: true },
};

export default function Layout({ children }) {
  return children;
}
