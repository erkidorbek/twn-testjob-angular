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
    imageUrl: string
    intro: string;
}