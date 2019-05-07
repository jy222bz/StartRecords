import {Injectable} from "@angular/core";


@Injectable()
export class BasketService {


    /*
    export interface IStorageItem {
        key: string;
        value: any;
    }

    export class StorageItem {
        key: string;
        value: any;

        constructor(data: IStorageItem) {
            this.key = data.key;
            this.value = data.value;
        }
    }

    // class for working with local storage in browser (common that can use other classes for store some data)
    export class LocalStorageWorker {
        localStorageSupported: boolean;

        constructor() {
            this.localStorageSupported = typeof window.localStorage != 'undefined' && window.localStorage != null;
        }

        // add value to storage
        add(key: string, item: string) {
            if (this.localStorageSupported) {
                localStorage.setItem(key, item);
            }
        }

        // get all values from storage (all items)
        getAllItems(): Array<StorageItem> {
            const list = new Array<StorageItem>();

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);

                list.push(new StorageItem({
                    key,
                    value
                }));
            }

            return list;
        }

        // get only all values from localStorage
        getAllValues(): Array<any> {
            const list = new Array<any>();

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);

                list.push(value);
            }

            return list;
        }

        // get one item by key from storage
        get(key: string): string {
            if (this.localStorageSupported) {
                const item = localStorage.getItem(key);
                return item;
            } else {
                return null;
            }
        }

        // remove value from storage
        remove(key: string) {
            if (this.localStorageSupported) {
                localStorage.removeItem(key);
            }
        }

        // clear storage (remove all items from it)
        clear() {
            if (this.localStorageSupported) {
                localStorage.clear();
            }
        }
    }
*/
}
