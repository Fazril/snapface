import { Component, OnInit } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
      FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {

      faceSnaps!: FaceSnap[];

      constructor(private faceSnapsService: FaceSnapsService) { }

      ngOnInit(): void {
        this.faceSnaps = this.faceSnapsService.getFaceSnaps();
      }
}
