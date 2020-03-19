import { Deserializable, deserializableProperty } from './deserializable';
import { NewsSource } from './news-source.model';

export class News extends Deserializable{

    @deserializableProperty source: NewsSource;
    @deserializableProperty author: string;
    @deserializableProperty title: string;
    @deserializableProperty description: string;
    @deserializableProperty url: string;
    @deserializableProperty urlToImage: string;
    @deserializableProperty publishedAt: string;
    @deserializableProperty content: string;

}
