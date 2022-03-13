import { useTheme } from 'next-themes';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  return (
    <img
      alt={props.alt}
      src={theme === 'light' ? props.light : props.dark}
      {...props}
    />
  );
}
