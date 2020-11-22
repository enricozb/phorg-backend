export interface Config {
  // uuid4 -> library path
  libraries: Record<string, string>;
}

export type guid = string;
export type burst_id = string;
export type content_id = string;

export interface Socket {
  path: string;
}

export interface LibraryMedia {
  items: Record<guid, Media>;
  burst_id: Record<burst_id, guid[]>;
  content_id: Record<content_id, guid[]>;
}

export interface Library {
  id: string;
  name: string;
  albums: Album[];
  media: LibraryMedia;
}

export type LibraryPreview = Pick<Library, "id" | "name">;

export interface Album {
  id: string;
  name: string;
}

export interface Media {
  filename: string;
  timestamp: string;
  burst_id: string;
  content_id: string;
}
