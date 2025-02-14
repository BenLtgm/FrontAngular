import { Film } from "./film"

export interface Artist {
    id: string,
    name: string,
    birthdate: string,
    listeners: number,
    films: Array<Film>
}
