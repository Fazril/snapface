import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';
import { NgStyle, NgClass, UpperCasePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
      NgStyle,
      NgClass,
      UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
