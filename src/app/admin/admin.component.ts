import {
  Component,
  OnInit,
  ɵCompiler_compileModuleSync__POST_R3__,
} from '@angular/core';
import { AudioServiceService } from '../Service/audio-service.service';

import speech from '@google-cloud/speech';

import axios from 'axios';
import { HttpClient } from '@angular/common/http';

const gcsUri =
  'gs://speech-to-text-fyp/WhatsApp Audio 2021-07-26 at 10.42.03 PM.mpeg';
// const gcsUri =
//   'gs://speech-to-text-fyp/WhatsApp Audio 2021-07-26 at 10.42.03 PM.mpeg';
const audio = {
  uri: gcsUri,
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  options: any;
  convertedText: string = '';

  constructor(
    private audioService: AudioServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getCommentary();
  }

  convert() {
    this.audioService.convertToText().subscribe(
      (res) => {
        console.log('here is the res : ' + res);
      },
      (err) => {
        console.log('here is an error', err.message);
      }
    );
  }

  convertToText() {
    // debugger;
    // let headers = new HttpHeaders()
    // headers = headers.set('x-rapidapi-key', '0ef27806c5mshc088b91954ae0d3p1892b6jsn0aff40dfab3c').set('x-rapidapi-host', 'dev132-cricket-live-scores-v1.p.rapidapi.com')
    var response = this.http.post(
      'https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyDOtApEZT7KE_DvmDhMC9fG-1wisBVP7Zw',
      {
        audio: audio,
        config: {
          encoding: 'mp3',

          // sampleRateHertz: 44100,
          sampleRateHertz: 16000,
          languageCode: 'en-US',
        },
      }
    );
    response.subscribe((data: any) => {
      this.convertedText = data.results
        .map(({ alternatives }) => {
          return alternatives[0].transcript;
        })
        .join('. ');
      console.log(this.convertedText);
    });
  }

  /*******************RapidAPI******************/
  getCommentary() {
    // this.http.get(
    //   'https://dev132-cricket-live-scores-v1.p.rapidapi.com/comments.php'
    // );
    this.options = {
      method: 'GET',
      url: 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/comments.php',
      params: { seriesid: '2141', matchid: '43434' },
      headers: {
        'x-rapidapi-key': '0ef27806c5mshc088b91954ae0d3p1892b6jsn0aff40dfab3c',
        'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
      },
    };

    axios
      .request(this.options)
      .then((response) => {
        console.log('here is data : ', response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    /********************************************* */

    this.options = {
      method: 'GET',
      url: 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php',
      params: { upcomingLimit: '5', inprogresslimit: '5', completedlimit: '5' },
      headers: {
        'x-rapidapi-key': '0ef27806c5mshc088b91954ae0d3p1892b6jsn0aff40dfab3c',
        'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
      },
    };

    axios
      .request(this.options)
      .then(function (response) {
        console.log('here is upcoming matches : ', response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    /*************************************************** */

    this.options = {
      method: 'GET',
      url: 'https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php',
      params: { upcomingLimit: '5', inprogresslimit: '5', completedlimit: '5' },
      headers: {
        'x-rapidapi-key': '0ef27806c5mshc088b91954ae0d3p1892b6jsn0aff40dfab3c',
        'x-rapidapi-host': 'dev132-cricket-live-scores-v1.p.rapidapi.com',
      },
    };

    axios
      .request(this.options)
      .then((response) => {
        console.log('here is all matches: ', response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    this.http
      .get('https://cricket.sportmonks.com/api/v2.0/scores')
      .subscribe((res) => {
        console.log(res);
      });
  }
}
