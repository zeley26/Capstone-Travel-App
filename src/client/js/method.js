const fetchPhoto = async(city) => {

    const response4 = await fetch(`https://pixabay.com/api/?key=38915459-01949e6582c7f6d96c5f51baf&q=${encodeURIComponent(city)}`);
    const pixabayData = await response4.json();

    return pixabayData

}




module.exports = { fetchPhoto }