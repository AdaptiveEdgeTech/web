import PreviewBlogList from '@/components/blog/PreviewBlogList'
import { PreviewSuspense } from '@sanity/preview-kit'

export default function BlogPage() {
    return (
        <PreviewSuspense fallback="Loading...">
            <PreviewBlogList/>
        </PreviewSuspense>
    )
}