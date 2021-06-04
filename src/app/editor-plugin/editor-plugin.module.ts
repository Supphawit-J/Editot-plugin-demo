import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoEditorComponent } from './demo-editor/demo-editor.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [
    DemoEditorComponent
  ],
  imports: [
    CommonModule,
    CKEditorModule
  ]
})
export class EditorPluginModule { }
