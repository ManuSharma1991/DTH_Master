import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-registration',
  templateUrl: './video-registration.component.html',
  styleUrls: ['./video-registration.component.css']
})
export class VideoRegistrationComponent {
  video: Video;
  constructor(private videoService: VideoService) {}

  videoRegistrationForm = new FormGroup({
    videoname: new FormControl('', [Validators.required]),
    videocategory: new FormControl('', [Validators.required]),
    videoduration: new FormControl('', [Validators.required]),
    videofrequency: new FormControl('', [Validators.required]),
    videostarttime: new FormControl('', Validators.required),
    videoendtime: new FormControl('', [Validators.required]),
    videocost: new FormControl('', [Validators.required]),
    preview: new FormControl('', [Validators.required])
  });

  register() {
    console.log(this.videoRegistrationForm.value);
    this.videoService
      .insertVideo(this.videoRegistrationForm.value)
      .subscribe(data => {
        this.video = data;
      });
  }

  reset() {
    this.videoRegistrationForm.reset();
  }
}
