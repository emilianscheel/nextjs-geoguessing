const accessToken = 'MLY|4924225717699056|d997e3f37309c2f4c26231bbe09ea306';

export default function getImageCoordinates(imageId) {
  let URL = `https://graph.mapillary.com/${imageId}/?access_token=${accessToken}`;

  return fetch(URL);
}
