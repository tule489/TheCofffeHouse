/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Store = lazyLoad(
  () => import('./index'),
  module => module.Store,
);
