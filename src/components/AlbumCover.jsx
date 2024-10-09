export const AlbumCover = (props) => {
    return (
        <figure className="album-cover">
            <img src={props.albumcard.images[0].url} alt={props.albumcard.name} />
        </figure>
    );
};
