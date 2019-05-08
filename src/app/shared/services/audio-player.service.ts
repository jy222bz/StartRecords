import {Injectable} from '@angular/core';
import {Howl, Howler} from 'howler';

@Injectable()
export class AudioPlayerService {
    sound = null;

    constructor() {


    }

    play(tracks) {

        if (tracks instanceof Array) {
            this.sound = new Howl({
                src: tracks,
                onend: function () {
                    console.log('Finished!');
                }
            });
        } else {
            this.sound = new Howl({
                src: [tracks],
                onend: function () {
                    console.log('Finished!');
                }
            });
        }
        this.sound.play();
    }

    pause() {
        if (this.sound !== null) {
            this.sound.pause();
        }
    }

    setVolume(value: number) {
        Howler.volume(0.5);
    }
}
