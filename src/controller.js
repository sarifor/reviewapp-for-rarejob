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

    return res.render("home", { finalResult });

  } catch(e) {
    console.log(e);
  };
  
};

export const saveData = async (req, res) => {
  const tempArray = [
    {
      url : "url1",
      title: "title1",
      date: "date1",
      clickedDate: "clickedDate1",
    },
    {
      url : "url2",
      title: "title2",
      date: "date2",
      clickedDate: "clickedDate2",
    },

  ];

  /*try {
    await Article.create({
      url,
      title,
      date,
      clickedDate,
    });
    console.log("saved");
    return res.end();
  } catch (error) {
    console.log(error);
    return res.end();
  }*/  
  console.log(tempArray[1].url);

};