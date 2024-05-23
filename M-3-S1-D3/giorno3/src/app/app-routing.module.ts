import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ActivePostsComponent } from './component/active-posts/active-posts.component';
import { InactivePostsComponent } from './component/inactive-posts/inactive-posts.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';

const routes: Routes = [
{path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
{path:'home',
  component:HomeComponent,
  title:'home'
},
{path:'active-posts',
  component: ActivePostsComponent,
title:'active-posts'
},
{path:'inactive-posts',
  component: InactivePostsComponent,
},

{path:'active-posts/:id',
  component: PostDetailComponent,
},

{path:'inactive-posts/:id',
  component: PostDetailComponent,
},


{path:'home/:id',
  component: PostDetailComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
