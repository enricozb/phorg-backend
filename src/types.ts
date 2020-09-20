export interface Config {
  libraries: Library[];
}

export interface Library {
  id: string;
  name: string;
  path: string;
}

export interface Album {
  id: string;
  name: string;
}

export interface Media {
  id: string;
}
