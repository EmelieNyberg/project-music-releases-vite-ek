import Heart from "../assets/icons/heart.svg";
import Play from "../assets/icons/play.svg";
import Dots from "../assets/icons/dots.svg";

export const AlbumCover = (props) => {
    return (
        <div className="album-cover-container">
            <figure className="album-cover">
                <img src={props.albumcard.images[0].url} alt={props.albumcard.name} />
            </figure>
            <div className="album-cover-buttons">
                <button>
                    <img src={Heart} alt="Like button" />
                </button>
                <button>
                    <img src={Play} alt="Play button" />
                </button>
                <button>
                    <img src={Dots} alt="Meny button" />
                </button>
            </div>
        </div>
    );
};
