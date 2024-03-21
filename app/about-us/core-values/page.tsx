

// @ts-nocheck


import { notFound } from "next/navigation"
import { allCoreValues } from "contentlayer/generated"

import { Mdx } from "@/components/mdx-components"

import "@/styles/mdx.css"

import Image from "next/image"
import Link from "next/link"

import {  cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
interface pageProps{

}

async function getValues() {
    const post = allCoreValues.find((post) => post.slugAsParams === 'core-values' )
    if (!post) {
        null
      }
    
      return post
}

const page = async() => {
    const post = await getValues()

  if (!post) {
    notFound()
  }

  console.log(post)
   return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      
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
        
      </div>
    </article>
   )
}

export default page