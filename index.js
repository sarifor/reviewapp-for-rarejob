import request from "request";
import cheerio from "cheerio";

const getNews = () => {
    request(
      {
        url: "https://www.rarejob.com/dna/2021/08/",
        method: "GET"
      },
      (error, response, body) => {
        if (error) {
          console.error(error);
          return;
        }
        if (response.statusCode === 200) {
          console.log("response ok");
          const $ = cheerio.load(body);
          const list_text_inner_arr = $(".h2.entry-title > a").toArray();
          console.log(list_text_inner_arr);
          console.log(list_text_inner_arr.length);

          /*const result = [];

          list_text_inner_arr.forEach((div) => {
              const aFirst = $(div).find("a").first();
              result.push({
                aFirst,
              });              
          });

          console.log(result);*/
        }
      }
    );
  };

getNews();