export type Post = {
    _id: string;
    author: Author;
    body: Block[];
    categories: Category[];
    slug: string | null;
    title: string;
    mainImage: string;
    _updatedAt: string;
}

export type Category = {
    title: string;
    description: string | null;
}

export type Author = {
    name: string;
    image: string;
    slug: string | null;
}

export type Block = {
    children: BlockChild[];
    markDefs: MarkDef[];
    style: 'normal' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4'
}

export type MarkDef = {
    _key: string;
    href: string;
}

export type BlockChild = {
    marks: string[];
    text: string;
}
