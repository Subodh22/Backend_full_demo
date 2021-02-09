import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import {Router, RouterModule}from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PostsService } from './posts.service';

const Routes = [

  {
    path: '',
    children: [
        {
            path: '',
            redirectTo: 'test_api/neo4j_get',
            pathMatch: 'full'
        },
        {
            path: 'test_api/neo4j_get',
            component: PostsComponent
        }
    ]
}];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
