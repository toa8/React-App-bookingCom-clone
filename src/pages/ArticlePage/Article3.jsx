import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Article.module.css";

const Article1 = () => {
  return (
    <div>
      <Header type="articles" />
      <div
        style={{
          backgroundImage: `  url('https://t-cf.bstatic.com/xdata/images/xphoto/2048x1536/156200800.webp?k=9eb7f14183168922cb5236c988205bb130c621c2d24cfc6b23369994c2d4e862&o=')`,
        }}
        className={styles.img}
      ></div>
      <div className={styles.disp}>
        <div className={styles.header}>
          <p>6 luxurious long stays in Europe</p>
        </div>
      </div>
      <div className={styles.titleDesc}>
        <p>
          One of the ways in which travel can be most enjoyable and rewarding is
          when you get to live like a local; escaping the tourist trail to find
          a family-run restaurant or making friends while shopping at a local
          market. And when you book a long-stay in one of these six European
          homes-away-from-home, you’ll be able to get a taste of local life –
          with a dose of luxury thrown in, too.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Madrid, Spain</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156199550.jpg?k=d570e24b20f37bce500c87ee2b420862b1bd2fe1b9d393e0f95f99d27bd727db&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          For a sunny, cultural and delicious food-filled long stay in Europe,
          look no further than Madrid. More specifically – Amor de Dios 17
          Boutique Hotel, set within a Madrid townhouse in a quiet street in the
          centre of the city. It’s located between must-visits Plaza Mayor
          (Madrid’s expansive and atmospheric main square) and The Prado Museum
          (housing Spain’s largest national collection of art, and one of the
          largest collections in the world). You’ll likely spend the first few
          days sightseeing, while settling into local life with siestas and
          late-night dinners – try beer and tapas bar, Cervecería Restaurante
          Plaza Mayor, with al fresco seating on the plaza itself that’s perfect
          for people-watching. In the morning, wake up, step onto your soft
          mauve rug, draw your plum curtains and saunter outside for a strong
          coffee like the average Madrileño – just 15 minutes’ walk from the
          hotel, Santa Eulalia Boulangerie Patisserie does great coffee, freshly
          baked breads and pastries.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Munich, Germany</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156200544.jpg?k=16950ad8f87bc4ba92cb58a0eb3b78d2375e64815490270ab3a2275652b2c881&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Munich has many strings to its bow; surrounded by easily accessible,
          resplendent nature, and known for its great beer, bakeries and
          pleasant pace of life, the Bavarian capital is a great place to try to
          settle into the local scene. To treat yourself to a little luxury
          while doing so, spend your long stay at Schwan Locke, where studio
          apartments boast modern, playful interiors in a soothing pastel and
          earthy colour palette.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Bath, United Kingdom</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156199580.jpg?k=0e1161e3cc03f18ba5e45bb62f4a675138210b8d85ae9507724f66fe1257b304&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Named after its Roman-built baths, this elegant city is home to a
          multitude of world-class spas, making it an extra relaxing and idyllic
          long-stay location. And at Hiding Space - Trim Street Apartments,
          guests even have a hot tub on a rooftop with amazing views of the city
          in all its architectural grandeur. Bath’s cultural calendar is always
          teeming with festivals, exhibitions, performances and more, while
          lovers of fine food and drink will appreciate the many tearooms,
          gastropubs and sophisticated restaurants. Return home after days spent
          exploring the city, to your Trim Street Apartment to check out the
          glittering nighttime view featuring Bath Abbey from the rooftop.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Lisbon, Portugal</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156199559.jpg?k=fb4fc5fddbddefa3cf1f9abad0d795e99bdbf7a0233742545ad965bba2be08df&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Base yourself at Lisbon Art Stay Apartments in Lisbon’s Baixa district
          for a long stay in the Portuguese capital and you’ll be spoilt for
          choice in terms of local cafés and scenic spots from which to watch
          the world go by. Sleep deeply in your spacious suite featuring
          ‘Azulejo’ (Portuguese ceramic tilework), before a morning ‘Pastel de
          nata’ (traditional Portuguese custard tart) and coffee. Spend your
          days walking the city’s hilly streets exploring markets, bookshops and
          bars, or go for a walk, swim or surf on one of the many beautiful
          beaches that pepper the Portuguese coast.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>Dublin, Ireland</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156199558.jpg?k=58c625992832e493006c62e2c8884e49ca9987f62b2a14a4d7ae9cd3ebe42269&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Stay too long in Dublin – experiencing the super friendly locals, and
          the pulsating pub and live music scene – and you won’t want to leave.
          But in the meantime, make the most of the Irish capital by staying at
          Zanzibar Locke, a collection of glamorous studio apartments
          exceptionally well-located right by the river and moments from the
          Temple Bar neighbourhood. Despite being in the thick of it, behind the
          building’s Georgian façade lies a serene and Scandi-style interior
          that’s minimal and plush. The relaxing lobby has a bar (though you’ll
          be unlikely to need it given the array of local pubs) and is also a
          nice place to enjoy breakfast each day before heading out for a stroll
          around the city.
        </p>
      </div>
      <div className={styles.context}>
        <p className={styles.title}>The Hague, Netherlands</p>
        <img
          src="//bstatic.com/xdata/images/xphoto/1182x887/156200402.jpg?k=d775763c21a54a1674f936d2d266618f45137c1e15a9a9ca1e623d2059fa9649&o=?size=S"
          alt=""
        />
        <p className={styles.desc}>
          Though often overlooked by visitors in favour of larger Dutch cities
          like Amsterdam or Rotterdam, The Hague is an infinitely charming
          option for those looking for a more local than touristy experience.
          This walkable (though to truly experience local life, you’ll have to
          hire a bike) seaside city is relatively quiet but quirky, with
          everything from cocktail bars and ‘kibbeling’ (fresh fried fish)
          stands on the beach in summer, to exceptional art collections; The
          Hague’s Mauritshuis museum is home to Vermeer’s masterpiece, Girl with
          a Pearl Earring. Stay in a chic studio suite at COVE Centrum right in
          the heart of the city and enjoy having all the city’s must-sees on
          your doorstep.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Article1;
