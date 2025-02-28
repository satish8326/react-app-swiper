import { ProductStore } from "./ProductStore";

export const fetchData = async () => {

    const json = ["beds.json", "armchairs.json"];

    json.forEach( async (category, index) => {

        const products:any = await fetchProducts(category);
        let categoryName = category.replace(".json", "");
        categoryName = categoryName.replace("_", " ");
        categoryName = uppercaseWords(categoryName);

        const productCategory:any = {
            name: categoryName,
            slug: category.replace(".json", ""),
            cover: products[6].image,
            products:products
        };
        console.log(productCategory);
        ProductStore.update((s: { products: any[]; }) => { s.products = [ ...s.products, productCategory ]; });
        if(json.length == index + 1){
            console.log(ProductStore);
        }
    });
}

const fetchProducts = async (category: string) => {
    const response = await fetch(`products/${ category }`);
    const data = await response.json();
    //  Set a product id
    await data.forEach((d: { id: any; }, i: number) => {
        d.id = i + 1;
    });
    return data;
}

const uppercaseWords = (words: string) => {

    words = words.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return words;
}
