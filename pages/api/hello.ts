// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer')
require('dotenv').config()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  interface Body{
    name: string,
    email: string,
    message: string
  }
  const body: Body = req.body
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'titonwudinjo@gmail.com',
        pass: process.env.AUTHKEY
    }
});
if(body.email.includes('@') && !body.email.endsWith('@') ){
  try {
      
          let mailOptions = {
              from: 'no-reply@setQR',
              to: 'titonwudinjo@gmail.com',
              subject: 'portfolio message',
              html: `<div>
                      <h2>New message from ${body.name} </h2>
                      <h3>user's email address: ${body.email}</h3>
                      <h4>Message:</h4>
                      <p>${body.message}</p>
              </div>`
          };
          try {
              await transporter.sendMail(mailOptions, function(error: any, info: any){
                  if (error) {
                      console.log(error);
                  } else {
                      return res.status(200).json({msg: 'OK'})
                  }
              });
          } catch (error) {
              return res.status(400).json({ msg: 'something went wrong', error: error})
          }
      }
   catch (error) {
     
  }
 }

 else{
  return res.status(400).json({ msg: 'invalid email'})
 }


  
}
