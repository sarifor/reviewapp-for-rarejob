import Article from "./models/Article";
import axios from "axios";
import cheerio from "cheerio";

let articles = [];
let result = [];

const accessURL = async () => {
  const baseURL = "https://www.rarejob.com/dna/2021/08/";
  const client = axios.create({
    baseURL: baseURL
  });

  for (var i = 1; i < 5; i++) {
    const response = await client.get(`/page/${i}`);
    const $ = cheerio.load(response.data);

    $(".h2.entry-title > a").each((index, item)=>{articles.push(item.attribs)});

    articles.forEach((div) => { // 배열의 각 요소에 대해 함수 실행
      const path = div.href;
      const url = `https://www.rarejob.com${path}`;
      const title = div.title;
      const date = url.substring(28, 38);

      result.push({
          url,
          title,
          date,
      });

    });

    articles = [];
     
  }

};

export const getData = async (req, res) => {
  try {
    await accessURL();

    let finalResult = [];
    finalResult = result;
    result = [];


    return finalResult;
    // return res.render("home", { finalResult });

  } catch(e) {
    console.log(e);
  };
  
};

export const saveData = (req, res) => {
  
  const finalResult = getData();
  console.log(finalResult);

  return res.end();


  /*for (var i = 0; i < tempArray.length; i++) {
    console.log(tempArray[i].date);

    try {
      const exist = await Article.findOne({ date: tempArray[i].date})

      if(exist) {
        console.log(`${tempArray[i]} already exist`);
        res.end();
      } else {
        await Article.create(tempArray[i]);
        console.log(`${tempArray[i]} added`);
        res.end();
      };
    } catch(e) {
      console.log(e);
      res.end();
    };
  };*/
  
};