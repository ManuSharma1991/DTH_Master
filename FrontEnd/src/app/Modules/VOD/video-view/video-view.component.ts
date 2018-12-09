import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  videoList: Video[];
  constructor(private route: ActivatedRoute) {}
  filter;
  assetLocation;
  key = 'firstname';
  reverse = false;
  p = 1;
  itemsPerPage = 5;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  ngOnInit() {
    this.route.data.subscribe(data => {
      this.videoList = data.Video;
    });
  }

  reset() {
    this.filter = '';
  }

  videoLocation(videoLocation: String) {
    console.log(videoLocation);
    console.log(this.assetLocation);
    this.assetLocation = videoLocation;
    console.log(videoLocation);
    console.log(this.assetLocation);
  }
}
