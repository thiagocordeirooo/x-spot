import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
  private _storage = localStorage;

  public setItem(key: string, value: any): void {
    this._storage.setItem(key, JSON.stringify(value));
  }

  public getStringItem(key: string): string {
    const item = this._storage.getItem(key);
    if (item) {
      return item;
    }

    return null;
  }

  public getObjectItem(key: string): any {
    try {
      const item = this.getStringItem(key);
      if (item) {
        return JSON.parse(item);
      }

      return null;
    } catch {
      return null;
    }
  }

  public removeItem(key: string): void {
    this._storage.removeItem(key);
  }
}
