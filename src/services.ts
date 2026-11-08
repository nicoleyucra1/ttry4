import { api } from './api';
import type { LoginRequest, RegisterRequest, AuthResponse, Album, Song, SongById, AlbumById } from './types';

export async function loginRequest(data: LoginRequest): Promise<AuthResponse>{
    const res = await api.post<AuthResponse>('/api/auth/login', data);
    return res.data;
}

export async function registerRequest(data: RegisterRequest): Promise<AuthResponse> {
    const res = await api.post<AuthResponse>('/api/auth/register', data);
    return res.data;
}

export async function getAlbumList(): Promise<Album[]>{
    const res = await api.get<Album[]>('/api/albums')
    return res.data;
}

export async function getSongsByAlbum(albumId: number):Promise<Song[]>{
    const res = await api.get<Song[]>(`api/albums/${albumId}/songs`);
    return res.data;
}

export async function addFavoriteSong(data: SongById): Promise<void>{
    await api.post<void>('/api/user/favorites', data);
}

export async function deleteFavoriteSong(data: SongById): Promise<void>{
    await api.delete('/api/user/favorites', {data});
}