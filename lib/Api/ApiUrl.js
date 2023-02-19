


class ApiUrl {
    static MainUrl = 'https://demo.royalscripts.com/genius-shop/api'; 
    static getsliders =  (`${this.MainUrl}/front/sliders`);
    static getCategories =  (`${this.MainUrl}/front/categories`);
    static getService =  (`${this.MainUrl}/front/services`);
    static getSingleCategory = (category) => (`${this.MainUrl}/front/?category=${category}`);
}



export default ApiUrl;