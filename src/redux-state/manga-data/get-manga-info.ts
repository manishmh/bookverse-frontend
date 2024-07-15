import { MANGA } from "@consumet/extensions";

export const mangaServers = [
  "MangaDex",
  "AsuraScans",
  "BRMangas",
  "FlameScans",
  "MangaHere",
  "MangaHost",
  "Mangakakalot",
  "MangaPill",
  "MangaReader",
  "Mangapark",
  "Mangasee123",
];

export const getServerInstance = (serverName: string): any => {
  switch (serverName) {
    case "MangaDex":
      return new MANGA.MangaDex();
    case "AsuraScans":
      return new MANGA.AsuraScans();
    case "BRMangas":
      return new MANGA.BRMangas();
    case "FlameScans":
      return new MANGA.FlameScans();
    case "MangaHere":
      return new MANGA.MangaHere();
    case "MangaHost":
      return new MANGA.MangaHost();
    case "Mangakakalot":
      return new MANGA.MangaKakalot();
    case "MangaPill":
      return new MANGA.MangaPill();
    case "MangaReader":
      return new MANGA.MangaReader();
    case "Mangapark":
      return new MANGA.Mangapark();
    case "Mangasee123":
      return new MANGA.Mangasee123();
    default:
      throw new Error("Unknown server");
  }
};

const fetchFromServers = async (fetchFunction: (serverInstance: any) => Promise<any>): Promise<any> => {
  for (const serverName of mangaServers) {
    const serverInstance = getServerInstance(serverName);
    try {
      const response = await fetchFunction(serverInstance);
      return response;
    } catch (error) {
      console.error(`Failed to fetch from ${serverName}, trying next server...`);
    }
  }
  throw new Error("All servers failed to fetch manga info.");
};

export const fetchMangaInfoWithID = async (itemId: string) => {
  return fetchFromServers((serverInstance) => serverInstance.fetchMangaInfo(itemId));
};

export const fetchMangaInfoWithName = async (name: string) => {
  return fetchFromServers((serverInstance) => serverInstance.search(name));
};
