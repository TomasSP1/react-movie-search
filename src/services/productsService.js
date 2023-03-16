const searchProduct = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7cc39c3&s=${searchWord}`);
    const products = await response.json();
    return products;
}

export default searchProduct