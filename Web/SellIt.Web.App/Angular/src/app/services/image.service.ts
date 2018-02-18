import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    public images: any;

    constructor() { }

    public setImages(images: any) {
        this.images = images;
    }

    public getBase64Images(): string[] {
        return this.images ? this.images.map(x => x.icon.split(',')[1]) : [];
    }

    private getBase64(input: any): any {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            return btoa(fileReader.result);
        };
        fileReader.readAsBinaryString(input.file);
    }
}