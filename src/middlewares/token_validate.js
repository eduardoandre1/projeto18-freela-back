import DB from "../database/pg.js"

export default async function tokenvalidade(req,res,next){
        const {authorization} = req.headers
        const select = `SELECT * FROM "tokens" WHERE "token" = $1`
        try{
            const finder = await DB.query(select,[authorization.replace('Bearer',"").trim()])
            if(finder.rowCount === 0){
            return res.status(401).send("token invalidate please login refrese the page")}
            req.finder = finder
        }
        catch(err){return res.status(500).send(err.message)}
    next()
}
