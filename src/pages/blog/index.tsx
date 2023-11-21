import PreviewBlogList from '@/components/blog/PreviewBlogList'
import PreviewProvider from '@/components/blog/PreviewProvider'

export default function BlogPage() {
    return (
        <PreviewProvider>
            <PreviewBlogList/>
        </PreviewProvider>
    )
}