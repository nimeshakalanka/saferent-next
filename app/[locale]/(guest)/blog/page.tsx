import Blogs from "@/components/blog/blogs";
import { getAllCategory, getAllPosts } from "@/lib/queries";
import { Metadata } from "next";

// SEO Metadata
export const metadata: Metadata = {
  title: "Blog",
  description:
    "Discover tips, guides, and insights about renting items safely. Articles on equipment rental, best practices, and community stories.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saferent.com/blog",
    title: "SafeRent Blog | Rental Tips & Guides",
    description:
      "Discover tips, guides, and insights about renting items safely. Articles on equipment rental, best practices, and community stories.",
    siteName: "SafeRent",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "SafeRent Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SafeRent Blog | Rental Tips & Guides",
    description:
      "Discover tips, guides, and insights about renting items safely. Articles on equipment rental, best practices, and community stories.",
    images: ["/og-blog.jpg"],
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = await getAllCategory();

  return <Blogs cats={categories} blogPosts={posts} />;
}
