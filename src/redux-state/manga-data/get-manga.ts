import { MANGA } from "@consumet/extensions";

const mangadex = new MANGA.MangaDex()

export const getMangaInfoWithId = async (id: string) => {
    try {
        const response = await mangadex.fetchMangaInfo(id);
        return response;
    } catch (error) {
        return null; 
    }
}

export const getMangaInfoWithName =  async (name: string) => {
    try {
        const response = await mangadex.search(name);
        return response;
    } catch (error) {
        return null; 
    }
}