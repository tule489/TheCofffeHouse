/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Tea = lazyLoad(
  () => import('./index'),
  module => module.Tea,
);
