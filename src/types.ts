export interface Config {
  // uuid4 -> library path
  libraries: Record<string, string>;
}

type guid = string;
type burst_id = string;
type content_id = string;

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
