import { title } from "process";

export default {
  name: "book",
  type: "document",
  title: "book",
  fields: [
    {
      name: "name",
      type: "string",
      title: "name",
    },

 
        {
          name: "price",
          type: "number",
          title: "price",
        },



        {
            name: "auther",
            type: "string",
            title: "Auther",
          },

          {
            name: "slug",
            type: "slug",
            title: "slug",
            description:"the slug of book post.",

          },


          {
            name: "image",
            type: "image",
            title: "image",
            description:"the image of the auther.",
          },
          
          {
            name: "heading",
            type: "string",
            title: "Heading",
            description:"the heading of the book.",
          },
          {
            name: "content",
            type: "string",
            title: "content",
            description:"the content of the book.",
          },



  ],

  
  

  
};
