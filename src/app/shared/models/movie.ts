export class Movie {
  'Title': string;
  'Year': string;
  'imdbID': string;
  'Type': string;
  'Poster': string;


  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
