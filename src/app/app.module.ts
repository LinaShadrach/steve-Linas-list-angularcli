import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { NewPostComponent } from './new-post/new-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ByPricePipe } from './by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    NewPostComponent,
    DeletePostComponent,
    EditPostComponent,
    PostDetailComponent,
    ByPricePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
