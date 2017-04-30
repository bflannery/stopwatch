import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { HomeComponent } from './home/home.component';


const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
