type Rating = {
    rate: number;
    count: number;
}


export type Course = {
    id: number;
    title: string;
    description: string;
    category: string;
    level: string;
    price: number;
    instructor: string;
    duration: number;
    rating: Rating;
    frontImg: string;
    urlVideo: string;
}