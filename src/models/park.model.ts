export interface Park {
  total :	string; //example: 496
  data :	[
    id : string,
    name : string,
    fullName : string,
    description : string,
    images : [{
      caption : string,
      url : string
    }],
    parkCode : string,
    states : string
  ];
  limit : string; // example: 50
  start : string; // example: 0
  }