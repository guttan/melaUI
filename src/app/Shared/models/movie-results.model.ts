import { Deserializable, deserializableProperty } from './deserializable';
import { Movies } from './movies.model';

export class MovieResults extends Deserializable {

    @deserializableProperty results: Movies[];

    constructor(json: any) {
        super(json);
    }
}
