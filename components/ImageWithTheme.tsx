import { useTheme } from 'next-themes';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function ImageWithTheme(props) {
  const { theme } = useTheme();

  return (
    <>
      <Zoom>
        <img
          alt={props.alt}
          src={theme === 'light' ? props.light : props.dark}
          {...props}
        />
      </Zoom>
    </>
  );
}
