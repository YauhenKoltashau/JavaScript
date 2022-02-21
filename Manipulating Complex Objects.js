const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
  ];
  myMusic[1] = {
    "artist": "Curt Cobain",
    "title": "Nevermind",
    "release_year": 1991,
    "formats": [
       "CD",
       "Cassete", 
       "Online"]
  }

  console.log(myMusic[1].formats[2]);