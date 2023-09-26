import axios from "axios"
import { useState } from "react"
import { SiteClient } from "datocms-client";
import ButtonLoader from "../button-loader";
import ErrorMessage from "./error-message";

 
const ContactForm = () => {
  const [contact,setContact] = useState({
     name:"",
     email:"",
     subject:"",
     message:""
  })
  const [message,setMessage] = useState({
     isError:false,
     isSubmit:false,
     isSuccess:false,
     message:""
  })
  const token = process.env.NEXT_PUBLIC_API_KEY
  const client = new SiteClient(token);

  const handlerChange = (e) => {
     const {name,value} = e.target
     setContact({...contact,
     [name]:value
     })
 
  }
 
  const submitContactForm = async (e) => {
     setMessage({...message ,
          isSubmit:true
      })
   e.preventDefault()
     try{
          const record = await client.items.create({
               itemType: "2325097",
               name: contact.name,
               email: contact.email,
               subject: contact.subject,
               message: contact.message,
             });
          if(record){
               successMessage(' Your message has been sent successfully!')
               return
          }
     }catch(error){
          console.log(error);
          errMessage(error)
     }
  }

  const errMessage = (msg) => {
     setMessage({...message ,
          isSubmit:false,
          isError:true,
          isSuccess:false,
          message:msg
      })
  }
  const successMessage = (msg) => {
     setMessage({...message ,
          isSubmit:false,
          isError:false,
          isSuccess:true,
          message:msg
      })
  }
    return(
  <form className="flex flex-col gap-4 items-start" onSubmit={ submitContactForm}>
  <h3 data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true" className="font-bold text-xl capitalize border-b-4 pb-2 rounded  border-purple-400 dark:text-teal-300">contact</h3>
 
 <div data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true" class="flex flex-col gap-2 w-full">
<label class="text-sm font-medium dark:text-white">Your name</label>
<input type="text" name="name"  defaultValue={contact.name}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  focus:outline-none required focus:ring-1 focus:ring-blue-500 dark:focus:ring-teal-300 dark:bg-gray-800 dark:border-none"  required onChange={handlerChange }/> 
</div>

<div class="flex flex-col gap-2 w-full" data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true">
<label class="text-sm font-medium dark:text-white">Your email</label>
<input type="email" name="email" defaultValue={contact.email}  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  focus:outline-none required focus:ring-1 focus:ring-blue-500 dark:focus:ring-teal-300 dark:bg-gray-800 dark:border-none"  required onChange={handlerChange }/> 
</div>

<div class="flex flex-col gap-2 w-full" data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true">
<label class="text-sm font-medium dark:text-white">Subject</label>
<input type="text" defaultValue={contact.subject}  name="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:placeholder-gray-400 dark:text-white  focus:outline-none required focus:ring-1 focus:ring-blue-500 dark:focus:ring-teal-300 dark:bg-gray-800 dark:border-none"  required onChange={handlerChange }/> 
</div>

<div class="flex flex-col gap-2 w-full" data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true">
<label class="text-sm font-medium dark:text-white">Message</label>
<textarea 
  name="message" 
  defaultValue={contact.message} 
  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white focus:outline-none required focus:ring-1 focus:ring-blue-500 dark:focus:ring-teal-300 dark:bg-gray-800 dark:border-none" 
  required 
  onChange={handlerChange}
></textarea>
 
</div>

{
     message.isSubmit ?  < ButtonLoader /> :
     <button  data-aos="fade-up"
     data-aos-duration="3000" data-aos-once="true" type="submit" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-teal-500 dark:hover:bg-teal-600 dark:focus:ring-teal-900  ">Submit</button>
}
 
 < ErrorMessage pesan={message?.message} error={message.isError} sukses={message?.isSuccess} />
 </form>
    )
}

export default ContactForm