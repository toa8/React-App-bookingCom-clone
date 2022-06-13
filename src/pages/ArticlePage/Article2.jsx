import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Article.module.css";

const Article2 = () => {
  return (
    <div>
      <Header type="articles" />
      <div
        className={styles.img}
        style={{
          backgroundImage: `url("https://t-cf.bstatic.com/xdata/images/xphoto/1920x1080/155421743.webp?k=c1d8bddf8369d5f0f151963c3b0cdc9f7d863d800f39357613ae96c6c888382d&o=")`,
        }}
      ></div>
      <div className={styles.disp}>
        <div className={styles.header}>
          <p>5 city trips for cyclists</p>
        </div>
      </div>
      <div className={styles.titleDesc}>
        <p>
          A bike gets you around fast enough to see all the sights, yet slowly
          enough to spot the city’s secrets. It also lets you swiftly slip into
          living like a local, even if it’s just for the weekend. With bike
          rental booming, bike-sharing apps gaining momentum and transport
          providers now giving cheaper and easier options for carrying bikes as
          luggage, cycling city breaks are ever more appealing.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Copenhagen, Denmark</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/155421795.jpg?k=05e7fd69be08cb86c4d323839f23815ab8280598490821003f3a25f8a0a8773e&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          A few years ago, the number of bikes in Copenhagen officially exceeded
          the number of cars. This isn’t surprising when you take a look at the
          city’s infrastructure; bike lanes separated from car traffic, traffic
          lights timed according to the average cycling speed and now a network
          of Cycle Superhighways specially designed for commuters. Try it out
          for yourself by navigating the city by bike, whether you’re there to
          ride one of the world’s oldest roller coasters at Tivoli Gardens,
          encounter the local counter culture in Christiania or simply sip a
          beer or a coffee by the waterfront in Nyhavn. If you still have energy
          for a final sprint, head down to the gym at the eco-conscious Crowne
          Plaza Copenhagen Towers.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Amsterdam, The Netherlands</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/155421823.jpg?k=90288204368c7c48677acc74bd128f5444b67f23707ed4f00d2aae9186d3bf5f&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          In Amsterdam even the prime minister gets around by bicycle, and the
          Dutch are fiercely proud of their bike culture. You, too, can get the
          true Dutch experience by renting an omafiets (Dutch-style bike) that
          will whizz you around Amsterdam. Many hotels have rental bikes
          available – a particularly green one is the Conscious Hotel. Each
          sustainable feature of the hotel is explained on a little tag or sign,
          and it’s located right next to the lush Vondelpark..
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Bordeaux, France</p>
        <img
          src="https://t-cf.bstatic.com/data/xphoto/1182x887/353/35358404.jpg?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Bordeaux has had the official ‘vélotouristique’ (bicycle tourism)
          label since 2011. The very reasonably-priced ‘V3’ bike share scheme
          means you can pick up and drop off bicycles in 174 locations around
          the city. There are also several tourism cycle routes for you to
          follow; the whole city centre is a UNESCO Heritage Site, and if you
          head out of town you can visit the region’s famous vineyards. Many
          visitors will have planned an afternoon training their taste buds at
          the Cité du Vin, but don’t forget to stop by La Toque Cuivrée, known
          for the best ‘cannelés de Bordeaux’ – the city’s famous pastry. Rest
          your legs over a cocktail before bed at Mama Shelter, just around the
          corner.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Portland, USA</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/155421763.jpg?k=00ed6d37333ef5e0a65cc07df069aeeecf9cd5882eedb8e1b04e743d4b7d452c&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Often said to be the most bike-friendly city in the USA, Portland’s
          cycling citizens and their bikes come in every style. Waiting at the
          lights you’re just as likely to find yourself next to a home-welded
          tall bike as a full carbon speed machine or a sticker-covered fixed
          gear. A good place to call base is the Royal Sonesta Portland
          Downtown; not only is it ideally situated downtown but they’ll also
          lend you bikes to get around for free. From there, Portland is your
          oyster with its craft beer breweries, coffee roasteries and farmers’
          markets. The city lives up to its bike-friendly reputation with over
          500km of bike paths including Tilikum Crossing, the pedestrian and
          cycle bridge that crosses the Willamette River. If you’re travelling
          with your wheels, Portland’s airport even has a dedicated bike
          assembly station and cycle lanes to get there.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Kyoto, Japan</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/155421745.jpg?k=53ced2693565d51af87e9d46745f239be00f6ee14196cf840d68399750d9e237&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Kyoto is remarkably easy to navigate by bike since its streets are
          laid out in a grid pattern going North-South and East-West, modelled
          on the ancient Chinese capital, Chang’an. Although there aren’t many
          bike-only lanes, the city has a reputation for being bikeable. Certain
          'pedestrian areas' can be used if the roads are busy but only ones
          with a sign stating that this is indeed allowed (and if you are,
          remember to weave your way through pedestrians carefully and
          respectfully). Most attractions have a small bicycle parking lot next
          to them, but if you’re in the city centre you can use the big ones
          like at Kyoto Station or the WINGS Downtown parking lot. For the full
          local experience, stay at Yadoya Kikokuso; a traditional, family-run
          ryokan in the centre of Kyoto. From there, hop on your bike for a tour
          of the temples and shrines, then refuel with delicious Kyoto
          specialities at Nishiki Market.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Article2;
