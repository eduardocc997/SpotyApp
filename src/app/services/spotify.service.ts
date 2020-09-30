import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Spotify Service listo!');
   }

   getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD13dEz7ofTyXBCM5vrDS_Ug0BTehVgn6i7sLwiLIpvixra8yr2tojBLMn7Q5DnAXDOapIEXszW5JQMZX0'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtistas( termino:string ){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD13dEz7ofTyXBCM5vrDS_Ug0BTehVgn6i7sLwiLIpvixra8yr2tojBLMn7Q5DnAXDOapIEXszW5JQMZX0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers });
  }
}
