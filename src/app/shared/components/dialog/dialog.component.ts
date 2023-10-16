import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent {

  title: string
  content: string

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>
    ) {
      const data = inject(MAT_DIALOG_DATA);
      this.title = data.title;
      this.content = data.content;
    }
}
