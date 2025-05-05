import { Spotify } from "react-spotify-embed/Spotify";

export interface GalleryProps {
  src: string;
}

const StickyPlaylist = ({ src }: GalleryProps) => {
  return (
    <div className="sticky bottom-0 z-50 bg-primary p-4 text-center text-lg font-semibold text-primary-foreground [&_a:hover]:text-indigo-500 [&_a]:text-fuchsia-500">
      <Spotify wide link={src} />
    </div>
  );
};

export default StickyPlaylist;
