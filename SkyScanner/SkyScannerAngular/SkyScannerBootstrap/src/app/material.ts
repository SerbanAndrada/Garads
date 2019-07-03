import {MatButtonModule, MatCheckboxModule, MatInputModule, MatTableDataSource, MatStepperModule} from '@angular/material';
import {MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatSortModule,
        MatPaginatorModule, MatTableModule, FormsModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatSortModule,
        MatAutocompleteModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatSortModule,
        MatPaginatorModule, MatTableModule, FormsModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatSortModule,
        MatAutocompleteModule]
})

export class MaterialModule { }
