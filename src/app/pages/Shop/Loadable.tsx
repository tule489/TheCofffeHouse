/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Coffee = lazyLoad(
  () => import('./index'),
  module => module.Coffee,
);
