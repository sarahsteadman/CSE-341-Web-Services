const eleanorRoute = (req, res) => {
    res.send('Eleanor Steadman');
}
const bridgetRoute = (req, res) => {
    res.send('Bridget Steadman');
}

module.exports = {
    eleanorRoute,
    bridgetRoute
};