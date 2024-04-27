

export type Article = {
    article_id: number;
    title: string;
    description: string;
    author: string;
    date: string;
    image_src: string
}

export type AddBlockElement = {
    type: string,
    text: string;
}

export type ArticlesCollection = Article[];

export type AddBlockElementCollection = AddBlockElement[];
