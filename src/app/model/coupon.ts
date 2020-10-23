export class Coupon {
    public constructor(
        public id?: number,
        public company_id?: number,
        public category_id?: string,
        public title?: string,
        public description?: string,
        public start_date?: Date,
        public end_date?: Date,
        public amount?: number,
        public price?: number,
        public image?: string,

        
    ){}
        
}
