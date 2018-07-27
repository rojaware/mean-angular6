import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

import { MemberComponent } from './book/member.component';
import { MemberDetailComponent } from './book-detail/member-detail.component';
import { MemberCreateComponent } from './book-create/member-create.component';
import { MemberEditComponent } from './book-edit/member-edit.component';

const appRoutes: Routes = [
 
  {
    path: '',
    redirectTo: 'members',
    pathMatch: 'full'
  },
  {
    path: 'members',
    component: MemberComponent,
    data: { title: 'Member List' }
  },
  {
    path: 'member-details/:id',
    component: MemberDetailComponent,
    data: { title: 'Member Details' }
  },
  {
    path: 'member-create',
    component: MemberCreateComponent,
    data: { title: 'Create Member' }
  },
  {
    path: 'member-edit/:id',
    component: MemberEditComponent,
    data: { title: 'Edit Member' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberDetailComponent,
    MemberCreateComponent,
    MemberEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
