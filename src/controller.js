import "regenerator-runtime";
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

  } catch(e) {
    console.log(e);
  };
  
};

export const saveData = async (req, res) => {
  
  let data = [];

  (async () => {
    data = await getData();

    for (var i = 0; i < data.length; i++) {
      try {
        const exist = await Article.findOne({ date: data[i].date})
  
        if(!exist) {
          await Article.create(data[i]);
        };

      } catch(e) {
        console.log(e);
      };

    };
    const dataInDB = await Article.find({});
    return res.render("home", { data: dataInDB });
  })();

  if(data) {
    console.log("Data is ready");
  };
};

export const saveComment = async (req, res) => {
  try {
    const { date, value } = req.body;
    const oneArticle = await Article.findOne({ date });

    const updatedArticle = await oneArticle.updateOne( { clickedDate: value } );
    if (!updatedArticle) {
      console.log("Article doesn't exist");
      return res.redirect("/");
    }

    return res.redirect("/");
    
  } catch (e) {
    return res.render("home", { err: e.message });
  };
};