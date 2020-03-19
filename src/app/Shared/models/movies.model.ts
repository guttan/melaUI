import { Deserializable, deserializableProperty } from './deserializable';

export class Movies extends Deserializable {

    @deserializableProperty popularity: string;
    @deserializableProperty vote_count: number;
    @deserializableProperty video: boolean;
    @deserializableProperty poster_path: string;
    @deserializableProperty id: number;
    @deserializableProperty adult: boolean;
    @deserializableProperty backdrop_path: string;
    @deserializableProperty original_language: string;
    @deserializableProperty original_title: string;
    @deserializableProperty genre_ids: number[];
    @deserializableProperty title: string;
    @deserializableProperty vote_average: string;
    @deserializableProperty overview: string;
    @deserializableProperty release_date: Date;

    constructor(json: any) {
        super(json);
    }

    /*
    "popularity": 283.117,
    "vote_count": 925,
    "video": false,
    "poster_path": "/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
    "id": 454626,
    "adult": false,
    "backdrop_path": "/stmYfCUGd8Iy6kAMBr6AmWqx8Bq.jpg",
    "original_language": "en",
    "original_title": "Sonic the Hedgehog",
    "genre_ids": [
        28,
        35,
        878,
        10751
    ],
    "title": "Sonic the Hedgehog",
    "vote_average": 7.2,
    "overview": "Based on the global blockbuster videogame franchise from Sega, Sonic the Hedgehog tells the story of the world’s speediest hedgehog as he embraces his new home on Earth. In this live-action adventure comedy, Sonic and his new best friend team up to defend the planet from the evil genius Dr. Robotnik and his plans for world domination.",
    "release_date": "2020-02-12"
    */

}
