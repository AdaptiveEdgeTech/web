// import { client } from '@/utils/sanity'
// import { Post } from '@/types'
// import { GetStaticProps } from 'next'
import PreviewBlogList from '@/components/blog/PreviewBlogList'
import { PreviewSuspense } from '@sanity/preview-kit'

// type BlogProps = {
//     preview: boolean;
//     posts?: Post[];
// }
// export const query = `*[_type=='post' && !(_id in path('drafts.**'))]{_id,title,'slug':slug.current,'body':body[]{style,'children':children[]{marks,text},'markDefs':markDefs[]{_key,href}},'mainImageUrl':mainImage.asset->url,'categories': categories[]->{title,description}, 'author': author->{name,'image':image.asset->url,'slug':slug.current}}`
// export const getStaticProps: GetStaticProps<BlogProps> = async ({ preview = false }) => {
//     if (preview) {
//         return { props: { preview } }
//     }
//     const posts: Post[] = await client.fetch(query)
//     return { props: { preview, posts } }
// }
export default function BlogPage() {
    return (
        <PreviewSuspense fallback="Loading...">
            <PreviewBlogList/>
        </PreviewSuspense>
    )
}