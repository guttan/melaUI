/**
 * Deserializable allows you to instantiate your class using any object.
 * It will copy over any properties with matching names.
 * Be sure to mark any properties you want to be deserialized with the @deserializableProperty decorator.
*/
export abstract class Deserializable {

    constructor(json: any) {
        if (json) {
            this['deserializablePropertyArray'].forEach(p => this[p] = json[p]);
        }
    }

}

/**
 * In a class that extends Deserializable,
 * properties marked as @deserializableProperty
 * will be deserialized when a new object is instantiated.
*/
export function deserializableProperty(target: Object, propertyKey: string | symbol) {
    if (target['deserializablePropertyArray'] === undefined) {
        target['deserializablePropertyArray'] = [];
    }
    target['deserializablePropertyArray'].push(propertyKey.toString());
}
