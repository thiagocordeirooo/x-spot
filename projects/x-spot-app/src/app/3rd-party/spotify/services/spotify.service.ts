import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@x-spot-app/environments/environment";
import { SpotifyAlbum, SpotifyConfig, SpotifyCredentials, SpotifySearch, SpotifyUser } from "../models";

@Injectable()
export class SpotifyService {
  private _spotifyConfigs: SpotifyConfig = environment.spotify;

  // TODO: Melhorar o controle de cache das requisições HttpClient
  private _spotifyServiceCache = {};

  constructor(private httpClient: HttpClient) {}

  public authorize(): void {
    const { accounts_url, client_id, scopes, redirect_uri } = this._spotifyConfigs;

    const authorizeUrl = `${accounts_url}/authorize?response_type=code&client_id=${client_id}&scope=${scopes}&redirect_uri=${encodeURIComponent(
      redirect_uri
    )}`;

    window.location.href = authorizeUrl;
  }

  public async token(code: string): Promise<SpotifyCredentials> {
    try {
      const { accounts_url, client_id, client_secret, redirect_uri } = this._spotifyConfigs;

      const httpParams = new HttpParams()
        .set("client_id", client_id)
        .set("client_secret", client_secret)
        .set("grant_type", "authorization_code")
        .set("code", code)
        .set("redirect_uri", redirect_uri);

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      const spotifyCredentials = await this.httpClient
        .post(`${accounts_url}/api/token`, httpParams, {
          headers,
        })
        .toPromise();

      return spotifyCredentials;
    } catch (error) {}
  }

  public async refreshToken(spotifyCredentials: SpotifyCredentials): Promise<SpotifyCredentials> {
    try {
      const { accounts_url, client_id, client_secret } = this._spotifyConfigs;

      const httpParams = new HttpParams()
        .set("client_id", client_id)
        .set("client_secret", client_secret)
        .set("grant_type", "refresh_token")
        .set("refresh_token", spotifyCredentials.refresh_token);

      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };

      return await this.httpClient
        .post(`${accounts_url}/api/token`, httpParams, {
          headers,
        })
        .toPromise();
    } catch (error) {}
  }

  public async me(): Promise<SpotifyUser> {
    try {
      const { api_url } = this._spotifyConfigs;
      return await this.httpClient.get<SpotifyUser>(`${api_url}/v1/me`).toPromise();
    } catch {}
  }

  public async searchAlbums(query: string): Promise<SpotifySearch> {
    try {
      const { api_url } = this._spotifyConfigs;
      const url = `${api_url}/v1/search?q=${query}&type=album`;

      let spotifySearch = null;

      if (this._spotifyServiceCache[url]) {
        spotifySearch = this._spotifyServiceCache[url];
      } else {
        spotifySearch = await this.httpClient.get<SpotifySearch>(url).toPromise();
        this._spotifyServiceCache[url] = spotifySearch;
      }

      return spotifySearch;
    } catch {}
  }

  public async getAlbumById(id: string): Promise<SpotifyAlbum> {
    try {
      const { api_url } = this._spotifyConfigs;
      const url = `${api_url}/v1/albums/${id}`;

      let spotifyAlbum = null;
      if (this._spotifyServiceCache[url]) {
        spotifyAlbum = this._spotifyServiceCache[url];
      } else {
        spotifyAlbum = await this.httpClient.get<SpotifyAlbum>(`${api_url}/v1/albums/${id}`).toPromise();
        this._spotifyServiceCache[url] = spotifyAlbum;
      }

      return spotifyAlbum;
    } catch {}
  }
}
