import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnapsService } from '../services/face-snaps.service';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
      NgStyle,
      NgClass,
      UpperCasePipe,
      LowerCasePipe,
      TitleCasePipe,
      DatePipe,
      RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit{


          faceSnap!: FaceSnap;

          constructor(private faceSnapsService: FaceSnapsService,
                      private route: ActivatedRoute) {}

          snapButtonText!: string;
          isSnaped!: boolean;

          ngOnInit() {
              this.prepareInterface();
              this.getFaceSnap();
          }

          private prepareInterface() {
            this.snapButtonText = 'Oh Snap!';
            this.isSnaped = false;
          }

          private getFaceSnap() {
            const faceSnapId = this.route.snapshot.params['id'];
            this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
          }

          onClickButtonSnap() {
            if(this.isSnaped == true){
                this.unSnap();
            }else{
                this.snap();
            }
          }

          unSnap(){
                this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
                this.isSnaped = false;
                this.snapButtonText = 'Oh Snap!';
          }

          snap(){
                this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
                this.isSnaped = true;
                this.snapButtonText = 'Oops, un Snap!';
          }
}
