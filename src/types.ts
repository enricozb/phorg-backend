export interface Config {
  // uuid4 -> library path
  libraries: Record<string, string>;
}

export interface Library {
  id: string;
  name: string;
  albums: Album[];
  media: Media[];
}

export interface Album {
  id: string;
  name: string;
}

export interface Media {
  id: string;
}
