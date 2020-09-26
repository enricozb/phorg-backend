export interface Config {
  // uuid4 -> library path
  libraries: Record<string, string>;
}

export interface Library {
  id: string;
  name: string;
  albums: Album[];
  media: Record<string, Media>;
}

export interface Album {
  id: string;
  name: string;
}

export interface Media {
  id: string;
}

export interface ImportStatus {
  ongoing: boolean;
  precentage: number;
  message: string;
  errors: string[];
}
