import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoEditorComponent} from "./editor-plugin/demo-editor/demo-editor.component";

const routes: Routes = [{
  path: '',
  component: DemoEditorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
