import PreviewBlogList from '@/components/blog/PreviewBlogList'
import { PreviewSuspense } from '@sanity/preview-kit'

export default function BlogPage() {
    return (
        <PreviewSuspense fallback={
            <div className="bg-white dark:bg-gray-900 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Loading...</h2>
                    </div>
                </div>
            </div>
        }>
            <PreviewBlogList/>
        </PreviewSuspense>
    )
}