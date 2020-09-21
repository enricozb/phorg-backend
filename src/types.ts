export interface Config {
  // uuid4 -> Library
  libraries: Record<string, Library>;
}

export interface Library {
  id: string;
  name: string;
  path: string;
}

export interface LibraryConfig {
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
