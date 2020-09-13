import React from 'react';
import productAssets from '../assets/productAssets';

export default function findProductAssets(category) {
  for (let productAsset of productAssets) {
    if (productAsset.category === category) return productAsset.thumb;
  }
}