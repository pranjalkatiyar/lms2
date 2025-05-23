'use client';
import ReactPlayer from 'react-player';

export default function ReactPlayerCustom(props) {
  let { asset, src, poster, blurDataURL, thumbnailTime, ...rest } = props;
  let config = { file: { attributes: { poster } } };

  return <ReactPlayer
    url={src}
    config={config}
    width="100%"
    height="40%"
    {...rest}
  />;
}