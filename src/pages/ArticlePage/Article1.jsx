import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Article.module.css";

const Article1 = () => {
  return (
    <div>
      <Header type="articles" />
      <div
        style={{
          backgroundImage: ` url("https://t-cf.bstatic.com/xdata/images/xphoto/2048x1536/156093184.webp?k=9fb3e790b48b90a70fb260b21350c573f6317358ef69947222a2628c6b2056db&o=")`,
        }}
        className={styles.img}
      ></div>
      <div className={styles.disp}>
        <div className={styles.header}>
          <p>5 of the top global LGBTQ+ destinations</p>
        </div>
      </div>
      <div className={styles.titleDesc}>
        <p>
          Pride season is on the horizon in many parts of the world, so take a
          look at our selection of the most appealing destinations for LGBTQ+
          travellers – then pick one of our suggested places to call home there.
          All accommodation is Proud Certified, so you can be sure of an
          especially warm welcome, no matter who you love or how you identify.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Amsterdam, Netherlands</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156094261.jpg?k=e7971e5895c5d7d2eb9fafe7a95e2fa5e91c1b547dad65060e947d47f5c1e807&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Call us biased, but we think our home city of Amsterdam is a pretty
          great place to be LGBTQ+. Widely regarded as the most LGBTQ+ friendly
          country in the world, in 2000 the Netherlands also became the first to
          legalise marriage for same-sex couples – and its open-minded capital
          continues to lead the way with its come-as-you-are attitude.
        </p>
        <p className={styles.desc}>
          The city centre's pink, triangular-shaped Homomonument is a memorial
          to persecuted LGBTQ+ people, and alongside it the Pink Point stand
          offers information about LGBTQ+ travel in the city. From there, once
          you’ve toured the canals, wandered the streets of the Jordaan and
          perhaps stopped by the Rijksmuseum, get your nightlife fix at spots
          like Bar Blend and SOHO on the Reguliersdwarsstraat or PRIK on nearby
          Spuistraat. Come early August, you won’t need to think twice about
          where you go to party, because you’ll find the energy of Amsterdam
          Pride takes over the entire city.
        </p>
        <p className={styles.desc}>
          After that, experience the glitz of the Waldorf Astoria Amsterdam, at
          the water’s edge inside the UNESCO-recognised canal ring. Or for
          something ever so slightly lower key, rest your head in a stunning,
          typical 18th-century Amsterdam house at 23 SouS.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Manchester, United Kingdom</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156092838.jpg?k=74f75605d84c47ec3922f03ef45d015842d68bb5ca33dc52ee18ce36cb64b807&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Canal Street sits at the heart of Manchester’s thriving LGBTQ+ scene,
          known as ‘The Village’. The area was originally born out of the
          decline of the city centre’s industrial heritage, and these days –
          whether during the city’s Pride celebrations in late August or at any
          other time of year – LGBTQ+ travellers are all but guaranteed a
          friendly welcome and great time here.
        </p>
        <p className={styles.desc}>
          Manchester's forward-thinking attitude doesn't end with the warm
          welcome it offers LGBTQ+ travellers, either. Take time to discover how
          the city has blended history and modernity at the Science and Industry
          Museum, then consider calling it a night at the ultra-sleek Dakota
          Manchester.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Sydney, Australia</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156096722.jpg?k=6b588908022344035d41ae6f972c85e3e90b51eb813ff3973309314713122af2&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Sydney is one of the most welcoming cities for LGBTQ+ travellers in
          not only Australia but the world. Particularly if you head down under
          during the early March Mardi Gras spectacular – which has been taking
          place in Sydney since 1978 – a colourful, fun-loving and open-minded
          vibe takes over the place.
        </p>
        <p className={styles.desc}>
          In the Darlinghurst area, Oxford Street began establishing itself as
          the beating heart of Sydney’s LGBTQ+ scene as far back as the mid-20th
          century, and the neighbourhood is still packed with cafés,
          restaurants, cocktail bars and nightclubs today. Once you’ve partied
          your way into the night, treat yourself to celebrity treatment and
          harbour views at five-star The Darling at The Star, just a 15-minute
          drive from the airport.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Toronto, Canada</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156185118.jpg?k=8f52cc5b77d6879665278d41fab6c481b07e93d3c3f17da19bc48df67682f554&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Home to the early-2000s drama, Queer as Folk, Toronto is Canada’s
          diverse, open-minded LGBTQ+ capital. It’s home to the country’s
          largest population of LGBTQ+ residents, has a rich history of Pride
          activism that dates back to the 1970s – and boasts not just one but
          arguably three distinct centres to the LGBTQ+ scene: Church and
          Wellesley, Queen West and Cabbagetown (said to have originally earned
          its name for the cabbages new arrivals from Ireland planted in their
          front gardens).
        </p>
        <p className={styles.desc}>
          Highlights of the main Church and Wellesley neighbourhood include
          Woody's (in business for over three decades) and North America's
          longest-operating LGBTQ+ bookshop, Glad Day. Late June is the ideal
          time to visit Toronto, not only for the pleasant summer temperatures
          but also to catch its month-long Pride, which culminates in a
          large-scale parade and festival weekend. Closer to Queen West,
          consider staying at the imposing Gladstone House, with its mix of
          playful, exposed-brick bedrooms and restored classic features like the
          statement old-fashioned glass elevator.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Article1;
