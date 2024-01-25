export interface TableResponse {
    list: TableRow[];
}

export interface TableRow {
    firstname: string;
    surname: string;
    sex: string;
    personal_code: number;
    phone: string;
}