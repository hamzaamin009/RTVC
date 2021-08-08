import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AudioServiceService {
  constructor(private http: HttpClient) {}

  convertToText() {
    // debugger;
    // let headers = new HttpHeaders()
    // headers = headers.set('x-rapidapi-key', '0ef27806c5mshc088b91954ae0d3p1892b6jsn0aff40dfab3c').set('x-rapidapi-host', 'dev132-cricket-live-scores-v1.p.rapidapi.com')
    return this.http.post(
      'https://speech.googleapis.com/v1p1beta1/speech:recognize',
      {
        audio: {
          content: 'E:AngularProjectmyProjectsrcdata123.mpeg',
        },
        config: {
          enableAutomaticPunctuation: true,
          encoding: 'LINEAR16',
          languageCode: 'en-US',
          model: 'default',
        },
      }
    );
  }
}
