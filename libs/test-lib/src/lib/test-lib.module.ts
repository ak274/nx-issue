import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProducts from './+state/products.reducer';
import { ProductsEffects } from './+state/products.effects';
import { ProductsFacade } from './+state/products.facade';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProductsComponent },
    ]),

    StoreModule.forFeature(
      fromProducts.PRODUCTS_FEATURE_KEY,
      fromProducts.reducer
    ),

    EffectsModule.forFeature([ProductsEffects]),
  ],
  providers: [ProductsFacade],
  declarations: [ProductsComponent],
})
export class TestLibModule {}
