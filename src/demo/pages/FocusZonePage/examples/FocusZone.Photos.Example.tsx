/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import { FocusZone, Image } from '../../../../index';
import { createArray } from '../../../../utilities/index';
import './FocusZone.Photos.Example.scss';

const PHOTOS = createArray(25, () => {
  const randomWidth = 50 + Math.floor(Math.random() * 150);

  return {
    url: `http://placekitten.com/${ randomWidth }/100`,
    width: randomWidth,
    height: 100
  };
});

export const PhotosExample = () => (
  <FocusZone>
    <ul className='ms-FocusZoneExamples-photoList'>
      { PHOTOS.map((photo, index) => (
      <div key={ index } className='ms-FocusZoneExamples-photoCell' data-is-focusable={true}>
        <Image src={ photo.url } width={ photo.width } height={ photo.height } />
      </div>
      )) }
    </ul>
  </FocusZone>
);

export default PhotosExample;
