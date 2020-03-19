import { Deserializable, deserializableProperty } from './deserializable';
import { News } from './news.model';

export class NewsArticles extends Deserializable {

    @deserializableProperty status: string;
    @deserializableProperty totalResults: string;
    @deserializableProperty articles: News[];

    constructor(json: any) {
        super(json);
    }
}
