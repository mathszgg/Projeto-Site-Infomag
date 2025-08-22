import { readdirSync } from "node:fs";
import path from "node:path";

const carouselImagesName: string[] = readdirSync(path.join(process.cwd(), 'public', 'img/page/carousel'));
export const CarouselImagesAbsolutePath: string[] = carouselImagesName.map((item) => '/img/page/carousel/' + item);

const servicesImagesName: string[] = readdirSync(path.join(process.cwd(), 'public', 'img/page/services-widget'));
export const ServiceImagesAbsolutePath: string[] = servicesImagesName.map((item) => '/img/page/services-widget/' + item);