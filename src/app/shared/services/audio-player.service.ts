import {Injectable} from '@angular/core';
import {Howl, Howler} from 'howler';

@Injectable()
export class AudioPlayerService {
    sound = null;
    playing = false;

    constructor() {


    }

    play(tracks) {
        this.stop();
        if (tracks instanceof Array) {
            this.sound = new Howl({
                src: tracks,
                onend: function () {
                    console.log('Finished!');
                }
            });
        } else {

            console.log(tracks);
            this.sound = new Howl({
                src: [tracks],
                format: ['mp3', 'aac'],

                onplayerror: (error) => {
                    console.log(error);
                },
                onloaderror: (id, error) => {
                    console.log(error);
                },

                onplay: (id) => {
                    this.playing = true;
                    console.log(id);
                },
                onend: () => {
                    this.playing = false;
                    console.log('Finished!');
                }, autoplay: true
            });
        }
        this.sound.play();
    }

    stop() {
        if (this.sound !== null) {
            this.sound.stop();
        }
    }

    isPlaying() {
        return this.sound != null && this.playing;
    }

    setVolume(value: number) {
        Howler.volume(0.5);
    }
}
