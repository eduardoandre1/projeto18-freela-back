import DB from "../../database/pg.js";

export async function showServiçes(req,res)
{
	const select =`SELECT serviçe.*,"Users".name,category_type.* FROM serviçe 
		JOIN category_type ON category_type.id = serviçe.category
		JOIN "Users" ON "Users".id = serviçe.user_id
		JOIN "service_picture_prime" ON serviçe.id = service_picture_prime.serviçe_id
		JOIN   `
	try
	{
		const list = await DB.query(select)
	}catch(err){return res}
}