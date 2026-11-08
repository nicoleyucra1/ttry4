export function readIds(key: string): number[]{
    return JSON.parse(localStorage.getItem(key) || '[]');
}

export function addId(key: string, id: number){
    const ids = readIds(key);
    if (!ids.includes(id)){
        localStorage.setItem(key, JSON.stringify([...ids,id]));
    }
}

export function removeId(key: string, id:number){
    const nuevos = readIds(key).filter((x) => x !== id);
    localStorage.setItem(key, JSON.stringify(nuevos));
}