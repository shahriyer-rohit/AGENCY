import type {MetadataRoute} from "next";
import {site} from "@/data/site";
import {posts} from "@/data/blog";

export default function sitemap():MetadataRoute.Sitemap {
  const pages = ["", "/about", "/services", "/destinations", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
  const articles = posts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...pages, ...articles];
}
