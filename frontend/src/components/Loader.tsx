type LoaderProps = {
  className?: string;
  size?: number;
  ariaLabel?: string;
};

export default function Loader({
  className,
  size = 50,
  ariaLabel = 'Loading',
}: LoaderProps) {
  return (
    <div
      className={['loader', className].filter(Boolean).join(' ')}
      style={{ width: size }}
      role="status"
      aria-label={ariaLabel}
    />
  );
}
