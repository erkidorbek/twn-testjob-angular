import { ArticleImage } from "./article";

export interface TableResponse {
    list: TableRow[];
}

export interface TableRow {
    id: string;
    firstname: string;
    surname: string;
    sex: string;
    personal_code: number;
    phone: string;
    image: ArticleImage;
    intro: string;
}