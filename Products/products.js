const Product = require("../Modules/product");

const getAllProducts = async (req, res) => {

    const { company, name, featured, select, sort } = req.query;
    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (company) {
        queryObject.company = company;
        console.log(queryObject);

    }

    let apiData = Product.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);

    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 5;
    let skip = (page-1)*limit;

    apiData = apiData.skip(skip);

    const mydata = await apiData;
    res.status(200).json(mydata);
}

const getAllProductsTesting = async (req, res) => {
    const mydata = await Product.find(req.query);
    console.log("Req.query object is = ", req.query);
    res.status(200).json(mydata);
}

module.exports = { getAllProducts, getAllProductsTesting };