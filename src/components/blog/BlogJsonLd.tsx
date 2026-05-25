import type { BlogPost } from "@/data/blog";

export function BlogJsonLd({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://auralogicslabs.com${post.image.src}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Auralogics Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://auralogicslabs.com/auralogicslabs.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://auralogicslabs.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BlogListingJsonLd({ posts }: { posts: BlogPost[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Auralogics Labs Engineering Notes",
    description:
      "Technical articles on WordPress performance, static delivery, Core Web Vitals, and Nexora Engine infrastructure.",
    url: "https://auralogicslabs.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Auralogics Labs",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://auralogicslabs.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
