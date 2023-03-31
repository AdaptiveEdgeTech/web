import { client } from '@/utils/sanity'
import { Post } from '@/types'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PortableText } from '@portabletext/react'
import { PortableTextReactComponents } from '@portabletext/react/src/types'
import React from 'react'

type PostProps = {
    post: Post;
}

type SanityId = {
    _id: string
}

const components: Pick<PortableTextReactComponents, 'block' | 'list'> = {
    block: {
        normal: ({children}) => <p className="my-2">{children}</p>,
        h1: ({children}) => <h1 className="text-4xl my-4">{children}</h1>,
        h2: ({children}) => <h2 className="text-3xl my-4">{children}</h2>,
        h3: ({children}) => <h3 className="text-2xl my-2">{children}</h3>,
        h4: ({children}) => <h4 className="text-xl my-2">{children}</h4>,
        blockquote: ({children}) => <blockquote className="border-l-gray-600 dark:border-l-gray-400 border-solid border-l-2 pl-2 my-2 whitespace-pre-wrap">{children}</blockquote>,
    },
    list: {
        number: ({children}) => <ol className='list-decimal ml-6'>{children}</ol>,
        bullet: ({children}) => <ul className='list-disc ml-6'>{children}</ul>,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `*[_type=='post']{_id}`
    const ids: SanityId[] = await client.fetch(query)
    return {
        paths: ids.map((id) => ({
            params: {id: id._id}
        })),
        fallback: false
    }
}
export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
    if (params && params.id) {
        const query = `*[_id=='${params.id}']{_id,_updatedAt,title,'slug':slug.current,'body':body[]{_type,style,level,listItem,'children':children[]{_type,marks,text},'markDefs':markDefs[]{_key,href}},'mainImage':mainImage.asset->url,'categories': categories[]->{title,description}, 'author': author->{name,'image':image.asset->url,'slug':slug.current}}`
        console.log('Query: ', query)
        const posts: Post[] = await client.fetch(query)
        return { props: { post: posts[0] } }
    }
    return { redirect: { destination: '/', permanent: true } }

}

const BlogPostPage = ({ post }: PostProps) => {
    const date: Date = new Date(post._updatedAt)
    console.log(post.body)

    return (
        <article className='mx-auto w-full max-w-4xl p-9'>
            <header className='mb-4 lg:mb-6'>
                <h1 className="mb-4 text-3xl lg:text-6xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{post.title}</h1>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                    <img src={post.author.image} alt={post.author.name} className="h-16 w-16 rounded-full bg-white/10 mr-8" />
                    <div>
                        <p className='text-base font-bold text-gray-900 dark:text-white'>{post.author.name}</p>
                        <p className="font-light text-gray-500 dark:text-gray-400">
                            <time dateTime={date.toISOString()} className="mr-8">
                                {date.toDateString()}
                            </time>
                        </p>
                    </div>
                </div>
            </header>
            <img src={post.mainImage} alt={post.title} className='my-10'/>
            <PortableText value={post.body} components={components}/>
        </article>
    )
}

export default BlogPostPage