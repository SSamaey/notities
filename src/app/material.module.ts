import {NgModule} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [ 
        MatButtonModule, 
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule 
    ],
    exports: [ 
        MatButtonModule, 
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
     ]
})

export class MaterialModule {}