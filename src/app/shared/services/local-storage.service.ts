import {Injectable} from "@angular/core";
import {StorageItem} from "../models/storage-item";


@Injectable()
export class LocalStorageService {
    localStorageSupported: boolean;

    constructor() {
        this.localStorageSupported = typeof window.localStorage != 'undefined' && window.localStorage != null;
    }


    // add value to storage
    add(key: string, item) {
        if (this.localStorageSupported) {

            let total = localStorage.getItem(key);
            if (total == null) {
                total = '1';
            } else {
                total = String(parseInt(total, 10) + 1)
            }

            localStorage.setItem(key, total);
        }
    }

    getTotal(): number {
        if (this.localStorageSupported) {
            const values = this.getAllValues();
            let total = 0;

            for (let i = 0; i < values.length; ++i) {
                total += parseInt(values[i], 10);
            }

            return total;
        } else {
            return 0;
        }
    }


    // get all values from storage (all items)
    getAllItems(): Array<StorageItem> {
        const list = new Array<StorageItem>();

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            list.push(new StorageItem(key, value));
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
    get(key: string) {
        if (this.localStorageSupported) {
            return localStorage.getItem(key);
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
