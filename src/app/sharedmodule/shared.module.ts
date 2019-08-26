import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports:[
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatSlideToggleModule,
        CommonModule,
        MatSnackBarModule
    ],
    exports:[
        MatToolbarModule,
        MatCardModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatTooltipModule,
        MatSlideToggleModule,
        CommonModule,
        MatSnackBarModule
    ],
    declarations:[]
})

export class SharedModule{

}