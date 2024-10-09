import { AlbumCover } from "./AlbumCover";
import { AlbumName } from "./AlbumName";
import { ArtistName } from "./ArtistName";

export const AlbumCard = (props) => {
    return (
        <article className="album-card">
            <AlbumCover albumcard={props.albumcard} />
            <AlbumName albumcard={props.albumcard} />
            <ArtistName albumcard={props.albumcard} />
        </article>
    );
};