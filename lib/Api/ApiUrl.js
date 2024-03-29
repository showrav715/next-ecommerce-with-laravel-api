


class ApiUrl {
    static MainUrl = 'https://demo.royalscripts.com/genius-shop/api'; 
    static getsliders =  (`${this.MainUrl}/front/sliders`);
    static getBlogs =  (`${this.MainUrl}/front/blogs`);
    static getCategories =  (`${this.MainUrl}/front/categories`);
    static getService =  (`${this.MainUrl}/front/services`);
    static getProducts =  (`${this.MainUrl}/front/products`);
    static singleProduct = (id) => (`${this.MainUrl}/front/product/${id}/details`);
    static getSingleCategory = (category) => (`${this.MainUrl}/front/?category=${category}`);

    // Auth
    static login =  (`${this.MainUrl}/user/login`);
}



export default ApiUrl;