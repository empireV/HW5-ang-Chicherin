import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './components/menu/menu.component';
import {FooterComponent} from './components/footer/footer.component';


const routes: Routes = [
  {path: 'showMenu', outlet: 'menu', component: MenuComponent, children: [
      {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(value => value.CommentModule)}
    ]},
  {path: 'showFooter', outlet: 'footer', component: FooterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
