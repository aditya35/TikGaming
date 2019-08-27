import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import
 {
     MatSidenavModule,
     MatGridListModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatListModule,
     MatFormFieldModule,
     MatInputModule,
     MatCardModule,
     MatSelectModule,
     MatTabsModule,
     MatExpansionModule,
     MatSnackBarModule,
     MatDialogModule,
     MatTooltipModule,
 } from '@angular/material';

@NgModule (
{
    imports: 
    [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatTabsModule,
        MatExpansionModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule,
    

   ],
   exports:
   [
       BrowserAnimationsModule,
       MatSidenavModule,
       MatGridListModule,
       MatToolbarModule,
       MatIconModule,
       MatButtonModule,
       MatListModule,
       MatFormFieldModule,
       MatInputModule,
       MatCardModule,
       MatSelectModule,
       MatTabsModule,
       MatExpansionModule,
       MatSnackBarModule,
       MatDialogModule,
       MatTooltipModule,

   ],
      }
)
export class MaterialModule{

}