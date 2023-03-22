/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Recruits = lazyLoad(
  () => import('./index'),
  module => module.Recruits,
);
