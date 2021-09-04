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

          let titles = [];
          const list_text_inner_arr = $(".h2.entry-title > a").each((index, item)=>{titles.push(item.attribs.title)});
          console.log(titles);

        }
      }
    );
  };

getNews();