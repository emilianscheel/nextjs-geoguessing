import 'external-svg-loader';

export default function Icon({ src, alt, id, className, theme }) {
  return (
    <svg
      data-src={src}
      width="24px"
      height="24px"
      alt={alt}
      className="icon"
      id={id}
    />
  );
}
