import fetch from 'node-fetch';
import cheerio from "cheerio";

/*
C:\Users\ivego\Desktop\Node\reviewapp_for_rarejob\node_modules\node-fetch\src\index.js:9
import http from 'http';
       ^^^^

SyntaxError: Unexpected identifier
*/

export const getData = async (req, res) => {
  let articles = [];
  let result = [];

  try {
    const body = await fetch('https://www.rarejob.com/dna/2021/08/', {method: 'GET'});
    const $ = cheerio.load(body);

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
      console.log(result);
      return res.render("home", { result });
    });
  } catch(e) {
    console.log(e);
  };
  
};