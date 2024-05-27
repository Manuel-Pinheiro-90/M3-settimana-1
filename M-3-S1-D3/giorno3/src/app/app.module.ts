import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivePostsComponent } from './component/active-posts/active-posts.component';
import { InactivePostsComponent } from './component/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { SinglePostComponent } from './component/single-post/single-post.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostDetailComponent,
    NavbarComponent,
    HomeComponent,
    SinglePostComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
FormsModule   //aggiungere per mettere form

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



