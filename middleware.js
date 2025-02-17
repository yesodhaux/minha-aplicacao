export function middleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permite todas as origens
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
