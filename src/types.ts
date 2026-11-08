export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest{
    email:string;
    password: string;
    name: string;
}

export interface AuthResponse {
    token: string;
}

export interface Album{
    id: number;
    title: string;
    year: number;
    coverUrl: string;
}

export interface Song{
    id: number;
    title: string;
    durations: string;
    albumId: number;
}

export interface SongById{
    songId: number;
}

export interface AlbumById{
    albumId:number;
}