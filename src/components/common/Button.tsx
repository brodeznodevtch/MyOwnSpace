import { cx } from '@/helpers/cx';
import SpinnerLoader from './SpinnerLoader';

const DefaultComponent = 'button' as const;
type DefaultComponentType = typeof DefaultComponent;

type ButtonPropsCustom<E extends React.ElementType> = {
  children: React.ReactNode;
  component?: E;
  loading?: boolean;
};

type ButtonProps<E extends React.ElementType> = ButtonPropsCustom<E> &
  Omit<React.ComponentProps<E>, keyof ButtonPropsCustom<E>>;

export const Button = <E extends React.ElementType = DefaultComponentType>({
  children,
  className,
  component,
  loading,
  ...otherProps
}: ButtonProps<E>) => {
  const Tag = component || DefaultComponent;

  return (
    <Tag
      className={cx(
        'inline-flex items-center justify-center py-2 rounded-md px-4 bg-turquoise-blue-500 text-white ',
        /* hover props */
        'hover:bg-turquoise-blue-600',
        /* disabled props */
        'disabled:opacity-50 disabled:cursor-wait',
        className,
      )}
      disabled={loading}
      {...otherProps}
    >
      {loading && <SpinnerLoader />}
      {children}
    </Tag>
  );
};
