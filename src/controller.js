import axios from "axios";
import cheerio from "cheerio";

let articles = [];
let result = [];

const accessURL = async () => {
  const baseURL = "https://www.rarejob.com/dna/2021/08/";
  const client = axios.create({
    baseURL: baseURL
  });
  
  const response = await client.get("/");
  const $ = cheerio.load(response.data);

  $(".h2.entry-title > a").each((index, item)=>{articles.push(item.attribs)});
  // console.log(articles);

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

  // console.log(result);
};


export const getData = async (req, res) => {
  try {
    accessURL();
    console.log("now in getData Function");
    console.log(result); // 전역변수에 값을 넣었는데도, [](빈 배열)만 나옴.
    return res.render("home", { result });
  } catch(e) {
    console.log(e);
  };
  
};