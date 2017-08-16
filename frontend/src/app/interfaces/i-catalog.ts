// export interface ICatalog {
//   _id: string;
//   category0: string;
//   category1: string[];
//   description: string;
// }

export interface ICatalog {
  _id: string;
  category0: {
    name: string;
    category1: [{
      name: string,
      description: string,
      }];
  };
}
