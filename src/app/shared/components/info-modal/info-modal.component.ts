import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './info-modal.component.html',
  styleUrl: './info-modal.component.scss'
})
export class InfoModalComponent {

  /**
   *
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<InfoModalComponent>,
  ) {


  }

  close(){
    this.dialogRef.close()
  }

}
