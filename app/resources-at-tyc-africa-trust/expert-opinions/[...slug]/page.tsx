import { notFound } from "next/navigation";
import { allAuthors, allExpertOpinions } from "contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import "@/styles/mdx.css";

import Image from "next/image";
import Link from "next/link";

import { cn, formatDate } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

// ✅ Define correct interface
interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// ✅ Keep this pure and synchronous
function getPostFromParams(params: { slug: string[] }) {
  const slug = params?.slug?.join("/");
  const post = allExpertOpinions.find((post) => post.slugAsParams === slug);
  return post ?? null;
}

// ✅ Make the page async and await params
export default async function PostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = getPostFromParams(resolvedParams);

  if (!post) {
    notFound();
  }

  const authors =
    post.authors?.map((author) =>
      allAuthors.find(({ slug }) => slug === `/authors/${author}`)
    ) ?? [];

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/resources-at-tyc-africa-trust/expert-opinions"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        See all stories
      </Link>

      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}

        <h1 className="inline-block mt-2 text-4xl leading-tight font-heading lg:text-5xl">
          {post.title}
        </h1>

        {authors.length > 0 && (
          <div className="flex mt-4 space-x-4">
            {authors.map(
              (author) =>
                author && (
                  <Link
                    key={author._id}
                    href="/"
                    className="flex items-center space-x-2 text-sm"
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className="bg-white rounded-full"
                    />
                    <div className="flex-1 leading-tight text-left">
                      <p className="font-medium">{author.title}</p>
                      <p className="text-[12px] text-muted-foreground"></p>
                    </div>
                  </Link>
                )
            )}
          </div>
        )}
      </div>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 transition-colors border rounded-md bg-muted"
        />
      )}

      <Mdx code={post.body.code} />

      <hr className="mt-12" />

      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/resources-at-tyc-africa-trust/expert-opinions"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          See all stories
        </Link>
      </div>
    </article>
  );
}
