import type { NextApiRequest, NextApiResponse } from "next";
import { tycs } from "../api/db"

/* type Data ={
    data: products[];
}
 */
export default function handler(req:NextApiRequest, res:NextApiResponse){
    res.status(200).json({tycs});
}