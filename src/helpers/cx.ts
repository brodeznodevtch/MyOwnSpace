import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

// Wrapper around the classNames package that also merges tailwind classes
export const cx = (...args: classNames.ArgumentArray): string => {
  return twMerge(classNames(...args));
};
