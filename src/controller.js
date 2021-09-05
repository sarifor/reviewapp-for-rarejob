import request from "request";
import cheerio from "cheerio";

export const getData = (req, res) => {
  let articles = [];
  let result = [];

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

      }
    }
  );
  
};