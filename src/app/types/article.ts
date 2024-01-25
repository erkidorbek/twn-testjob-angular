export interface ArticleImage {
    small: string;
    title: string;
    alt: string;
}

export interface Article {
    title: string;
    intro: string;
    image: ArticleImage;
    body: string;
    tags: string[];
}
