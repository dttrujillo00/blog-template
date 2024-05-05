

export type Article = {
    article_id: number;
    user_id: string;
    title: string;
    description: string;
    author: string;
    created_at: string;
    main_image_path: string
}

export type AddBlockElement = {
    type: string;
    text: string;
}

export type AddBlockModal = {
    show: boolean;
    type: string;
}

export type CustomParagraph = {
  article_id: string;
  textContent: string;
  index: number;
}

export type CustomHeading = {
  article_id: string;
  textContent: string;
  index: number;
}

export type CustomImg = {
  article_id: string;
  src: string;
  index: number;
  descrption: string;
}

export type CustomLink = {
  article_id: string;
  href: string;
  index: number;
  textContent: string;
}

export type ParagarphCollection = CustomParagraph[];
export type HeadingCollection = CustomHeading[];
export type ImgCollection = CustomImg[];
export type LinkCollection = CustomLink[];

export type ArticlesCollection = Article[];

export type AddBlockElementCollection = AddBlockElement[];


