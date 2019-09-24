import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CronEditorComponent } from './cron-editor.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

@NgModule({
  declarations: [CronEditorComponent, TimePickerComponent],
  imports: [CommonModule, FormsModule, TranslateModule.forRoot()],
  exports: [CronEditorComponent]
})
export class CronEditorModule { }
