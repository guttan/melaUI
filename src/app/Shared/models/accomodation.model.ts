import { Deserializable, deserializableProperty } from './deserializable';

export class Accomodation extends Deserializable{

    @deserializableProperty accomodationType: string;
    @deserializableProperty firstName: string;
    @deserializableProperty lastName: string;
    @deserializableProperty location: string;
    @deserializableProperty gender: string;
    @deserializableProperty email: string;

    constructor(json: any) {
        super(json);
    }
}
