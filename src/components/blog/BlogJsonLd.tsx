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
      "@id": `https://auralogicslabs.com/insights/${post.slug}`,
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
      "Technical guides on WordPress performance, SEO diagnostics, image optimisation, and static delivery from the Auralogics Labs team.",
    url: "https://auralogicslabs.com/insights",
    publisher: {
      "@type": "Organization",
      name: "Auralogics Labs",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://auralogicslabs.com/insights/${post.slug}`,
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
