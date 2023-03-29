import { client } from '@/utils/sanity'
import { Post } from '@/types'
import { GetStaticProps, GetStaticPaths } from 'next'

type PostProps = {
    post: Post;
}

type SanityId = {
    _id: string
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
        const query = `*[_id=='${params.id}']{_id,_updatedAt,title,'slug':slug.current,'body':body[]{style,'children':children[]{marks,text},'markDefs':markDefs[]{_key,href}},'mainImageUrl':mainImage.asset->url,'categories': categories[]->{title,description}, 'author': author->{name,'image':image.asset->url,'slug':slug.current}}`
        console.log('Query: ', query)
        const posts: Post[] = await client.fetch(query)
        return { props: { post: posts[0] } }
    }
    return { redirect: { destination: '/', permanent: true } }

}

const BlogPostPage = ({ post }: PostProps) => {
    const date: Date = new Date(post._updatedAt)

    return (
        <article className='mx-auto w-full max-w-4xl'>
            <header className='mb-4 lg:mb-6'>
                <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                    <img src={post.author.image} alt={post.author.name} className="h-16 w-16 rounded-full bg-white/10 mr-8" />
                    <div>
                        <p className='text-xl font-bold text-gray-900 dark:text-white'>{post.author.name}</p>
                        <p className="text-base font-light text-gray-500 dark:text-gray-400">
                            <time dateTime={date.toISOString()} className="mr-8">
                                {date.toLocaleDateString()}
                            </time>
                        </p>
                    </div>
                </div>
            </header>
            Post: {JSON.stringify(post, null, 2)}

        </article>
    )
}

export default BlogPostPage