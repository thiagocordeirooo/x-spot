import SpotifyExplicitContent from "../spotify-explicit-content.model";
import SpotifyFollowers from "./spotify-followers.model";
import SpotifyExternalUrls from "./spotify-external-urls.model";
import SpotifyImage from "./spotify-image.model";

export default interface SpotifyUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: SpotifyExplicitContent;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: string;
  uri: string;
}
