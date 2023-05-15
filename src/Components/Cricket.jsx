import React from 'react'
import Cards from "../Component/Cards"

const Cricket = () => {
    let obj = [
        
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"Bangladesh edges Ireland by 5 runs to clinch 2-0 win in ODI cricket series",
            image:"https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2019/05/01/Pictures/files-cricket-ban-wc-2019_912c4488-6bd8-11e9-9975-c8a46a094be1.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"CSK vs KKR Highlights, IPL 2023: Kolkata ease past Chennai to keep playoffs hopes alive",
            image:"https://static.toiimg.com/thumb/imgsize-59152,msid-100229760,width-400,resizemode-4/100229760.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },

        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
        {
            avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png",
            name:"Cricket Asociation",
            description:"RR vs RCB Highlights, IPL 2023: Parnell, Bracewell, Karn star as Royal Challengers Bangalore thrash RR by 112 runs",
            image:"https://www.hindustantimes.com/ht-img/img/2023/05/14/550x309/India-IPL-Cricket-32_1684066659569_1684066701451.jpg",
            likes:[],
            comments:[],
        },
    ]
  return (
    <div>
    {  obj.map((elem,i)=>{
       return <Cards item={elem} />
      })}
    </div>
  )
}

export default Cricket
