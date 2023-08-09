import DB from "../database/pg.js"

export default function alredy_have_pg(tabela,coluna,item){
    return async(req,res,next)=>{
        const input = Object.entries(req.body)
        const value = input.find((Element)=> Element[0]==item)
        const select = `SELECT * FROM "${tabela}" WHERE "${coluna}" = $1`
        try{
            const finder = await DB.query(select,[value[1]])
            if(finder.rowCount !== 0){
            return res.sendStatus(409)
        }
        }catch(err){return res.status(500).send(err.message)}
    next()
    }
}