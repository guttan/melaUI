import { Deserializable, deserializableProperty } from './deserializable';

export class NewsSource extends Deserializable{

    @deserializableProperty id: string;
    @deserializableProperty name: string;
}
