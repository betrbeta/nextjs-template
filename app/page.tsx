"use client";

import React, {useEffect, useState} from "react";
import "./styles/style.css";
import mixpanel from "../config/mixpanel";

import CookieBanner from "./components/CookiesBanner";
import Link from "next/link";
import LikeIconSvg from "./components/LikeIconSvg";
import DislikeIconSvg from "./components/DislikeIconSvg";
var feedbackComponent = require("@ramseyinhouse/feedback-component")

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['feedback-component']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
    }
  }

const FetchWebsite = ({url}: {url: string}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    /**
     * Track website fetch event
     * @param url - URL of the website
     */
    const trackWebsiteFetch = (url: string) => {
      mixpanel.track("Website Fetched", {url});
    };

    const getSiteAvailability = async () => {
      try {
        await fetch(url, {mode: "no-cors", signal: abortController.signal});
        setHasError(false);

        // Track website fetch event
        trackWebsiteFetch(url);
      } catch (err) {
        setHasError(true);
      }
    };

    getSiteAvailability();

    return () => abortController.abort();
  }, [url]);

  return (
    <div>
      {hasError ? (
        <div className="error">An error occurred while loading the website.</div>
      ) : (
        <iframe
          src={url}
          style={{
            width: "100%",
            height: "600px",
            border: "none",
          }}
        ></iframe>
      )}
    </div>
  );
};

const Home = () => {
  const [url, setUrl] = useState("");

  async function createTemplate() {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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",
      },
      body: JSON.stringify({
        sender: {email: "savytskyimark@gmail.com"},
        templateName: "emailConfirmation",
        htmlContent: `<div
      style="
        font-family: Arial, sans-serif;
        font-size: large;
        max-width: 400px;
        margin: 0 auto;
        padding: 60px;
        border: 1px solid #e0e0e0;
        background-color: #ffffff;
      "
    >
      <div style="text-align: center; margin-bottom: 30px">
       <img  src="https://assets.vercel.com/image/upload/v1573246280/front/favicon/vercel/android-chrome-192x192.png" alt="vercel-3" crossorigin="anonymous" width='108' height='83' />
        <h2>Verify your email to log on to Vercel</h2>
      </div>

      <p>Hello,</p>
      <p>We have received a login attempt from Singapore</p>
      <p>To complete the login process, please click the button below:</p>
      <a
        href="www.google.com"
        style="
          display: block;
          width: 100px;
          padding: 15px 40px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 40px;
          margin-bottom: 40px;
          background-color: #000000;
          color: #ffffff;
          text-align: center;
          text-decoration: none;
          border-radius: 5px;
        "
        >VERIFY</a
      >
      <p>Or copy and paste this URL into a new tab of your browser:</p>
      <div style="width: auto; margin-bottom: 60px">
        <a href="www.google.com" style="word-wrap: break-word">
          https://vercel.com/confirm?email=nsemek%40gmail.com&token=3geBc7LFLhLAwVwWWCRRr2M&mode=login
        </a>
      </div>
      <hr />
      <p style="margin-top: 30px">
        If you didn't attempt to log in but received this email, or if the location doesn't match, please ignore this email. If you are concerned
        about your account's safety, please reply to this email to get in touch with us.
      </p>
    </div>`,
        subject: "Email confirmation",
        isActive: true,
      }),
    };

    fetch("https://api.brevo.com/v3/smtp/templates", options)
      .then((response) => response.json())
      .then(({id}) => sendEmail(id))
      .catch((err) => console.error(err));
  }

  async function sendEmail(id: number) {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": "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",
      },
      body: JSON.stringify({
        to: [{email: "dorozhe.zolota777@gmail.com"}],
        templateId: id,
      }),
    };

    await fetch("https://api.brevo.com/v3/smtp/email", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  const handleSendEmail = () => {
    createTemplate();
  };

  const[changeColor, setChangeColor] = useState(false)

  const handleFeedback = () =>{
    setChangeColor(!changeColor)
  }

  return (
    <>
      <div className="">
        <div>
          <div>
            <h1 className="title">Webpage Viewer</h1>
            <div>
              <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL" />
            </div>
            <div>{url && <FetchWebsite url={url} />}</div>
          </div>
          <CookieBanner />
          <Link href="/mySubscription">Go to subscription page</Link>
          <button type="button" onClick={handleSendEmail}>
            Send email
          </button>
        </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente explicabo a accusamus laudantium, corporis consequuntur. Aliquid, voluptates incidunt, natus accusantium quos debitis nemo quaerat cum rerum quo hic quod iste corporis eaque at esse ipsum quis voluptate! Illum reiciendis laboriosam fugit. A itaque tenetur recusandae inventore tempore. Numquam repudiandae cumque repellat aliquid temporibus ipsa doloribus adipisci corrupti incidunt corporis! Veritatis dolore excepturi deleniti. Ut quisquam ducimus, nostrum consequatur quam illum pariatur soluta aliquid voluptate dicta excepturi magni mollitia, hic a voluptatem odit, fugiat totam corrupti? Recusandae veritatis porro nam eum voluptate beatae maxime assumenda adipisci aliquid fugit, ad voluptatibus aut est qui molestias perferendis. Quibusdam accusamus numquam voluptatem, error aut fugit distinctio itaque. Eos facilis id libero doloremque consequatur beatae! Totam quisquam beatae ipsum, laudantium corporis autem perspiciatis sit quia dolorum ullam deserunt non nulla facere reprehenderit, suscipit tempore animi, iure similique in. Esse eius explicabo ab animi mollitia earum voluptatibus odio dolorum neque unde, provident dignissimos placeat nemo minima! Autem quis earum distinctio quae? Aliquam doloribus, ipsa laudantium porro iusto veniam et eligendi, nisi architecto reprehenderit animi dicta incidunt voluptatibus quibusdam culpa sunt dolores dignissimos libero quidem? Amet labore illo eaque, vero debitis impedit veritatis commodi quaerat facere illum tempore numquam iusto! Maxime ut voluptas fugit aut, vero recusandae aspernatur doloribus fugiat nihil dignissimos distinctio animi voluptatum, odio laboriosam asperiores, similique provident labore quia? Voluptate fugit enim, magni officia veritatis ipsum animi, amet qui aperiam beatae nobis repellat iste expedita officiis? Dolorum corrupti eos deleniti sequi vel, animi nostrum obcaecati repellat consequatur dolor temporibus repudiandae, eaque hic sapiente ab architecto impedit qui vitae a? Beatae laborum, qui perspiciatis ullam quae at. Doloremque nobis minima deleniti! Molestiae reprehenderit voluptate tempora error blanditiis enim. Nemo modi quasi vel corporis vitae. Animi ipsam at totam unde dignissimos culpa, autem aperiam? Perspiciatis asperiores quidem, magni architecto eaque culpa ab debitis error repellendus laboriosam, aspernatur voluptate! Facere placeat distinctio consectetur facilis molestias aliquid neque error iusto asperiores dignissimos id exercitationem excepturi, ut earum vel quia modi recusandae minima quasi ab nesciunt molestiae? Iure recusandae molestiae facere fugiat iusto quo error, officia rerum possimus, nobis vitae corrupti voluptatibus odit sit voluptates. Incidunt aliquam provident reiciendis, libero quis doloremque iste tempore rem voluptate dolorum repudiandae dolorem at laudantium ex nostrum a cumque vitae veritatis alias. Itaque error corporis quae laborum ut natus exercitationem placeat vero consequuntur ratione eius, amet quos iure, officiis excepturi, blanditiis non repudiandae sapiente in labore atque qui quam? Sapiente maxime in aut quasi necessitatibus quis magnam alias ex. Rerum ratione repudiandae veritatis. Ab ratione modi reprehenderit earum, nisi incidunt libero accusantium in dolorem repudiandae fugiat beatae tempora officia, laudantium blanditiis corrupti consequuntur, pariatur quaerat. Rerum mollitia consequuntur corrupti in velit omnis possimus! Quas, cumque? A, quibusdam? Excepturi voluptas eius asperiores reprehenderit in, harum molestias omnis recusandae a consectetur quisquam aspernatur laboriosam odit rem, vero ratione culpa! Sequi obcaecati est voluptatem velit voluptatibus dignissimos quae quos ea iure possimus modi voluptates nisi pariatur molestiae officia unde, dicta accusantium maiores cupiditate tempore recusandae odit quas. Voluptas illum, voluptatem dolor ex cum unde quisquam expedita ullam enim id, hic mollitia praesentium modi perspiciatis, obcaecati culpa ea nam laborum aliquid accusamus natus alias aliquam. Dolorem quas modi, harum, nobis quaerat deserunt nihil reiciendis dolor alias nam nesciunt ipsa, delectus ratione corrupti. Ad eius quibusdam eaque iure laudantium odio incidunt, cum earum quia magni explicabo porro expedita veniam omnis. Aperiam, ex eius vel velit alias repudiandae! Tempore nulla, est eius reprehenderit ad perspiciatis vero beatae, quisquam harum ducimus debitis placeat quis quidem quibusdam modi perferendis quod assumenda consectetur? Recusandae qui eligendi quo error officia placeat, voluptates ipsam eos et hic, ut cumque repudiandae adipisci cum beatae quidem. Odit asperiores accusantium ducimus sed cumque! Ab modi labore ea doloremque assumenda voluptate ducimus quis nihil, ut vero impedit eum necessitatibus accusantium vel? Ut beatae vitae, animi nulla repudiandae libero praesentium ad est suscipit excepturi earum. At dolorum nihil id corrupti sed voluptatem quam dolorem, molestiae, quasi amet ad veniam consectetur debitis, iste commodi ullam. Amet dolore minus voluptate exercitationem sunt eaque maxime, fugit ab accusantium minima dolor incidunt impedit facilis eveniet nisi beatae nam quos veniam! Nihil, quaerat deserunt eum, soluta unde culpa, quia nisi doloribus repellendus id sit cumque incidunt aliquid nostrum ipsa tempore sed fuga. Nesciunt accusantium, earum ipsum maiores corporis quae totam suscipit numquam cum eius facere perspiciatis illo aspernatur quam nisi, libero nam autem, neque vero sequi asperiores aliquid. Harum porro cupiditate accusamus est, velit aliquid qui quo labore voluptatum repellendus exercitationem maxime magni ullam id in quasi beatae pariatur accusantium sed, vitae incidunt. Id quas fugiat accusamus consequuntur labore eveniet odit atque ut vel maiores, veniam quo cumque nihil! Eveniet, animi. Et ut esse, est magni dolorem inventore quibusdam nesciunt? Consequuntur maiores iure magnam labore maxime facilis dolorum laborum quidem, nesciunt, pariatur culpa in!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda doloremque repellat soluta magni consequuntur delectus illum est iusto perspiciatis odit. Necessitatibus nam eligendi aut, quo veniam, voluptas assumenda adipisci officiis, ullam earum alias asperiores dolore! Dolorum expedita veniam reiciendis numquam nisi impedit necessitatibus nostrum laboriosam, aliquam ex fugit voluptates consequuntur minima, et incidunt earum voluptatum ratione unde facere assumenda iusto maxime a? Consectetur alias at eaque fuga dolorum. Numquam doloremque fuga ipsa veritatis magni, dignissimos architecto nemo vitae similique rem enim aut fugiat voluptate provident reprehenderit accusantium eum ad quia. Magni iusto perspiciatis doloribus libero minima aspernatur temporibus, consectetur animi ducimus optio perferendis? Aliquid quas inventore, saepe voluptas est unde neque, deserunt ullam veritatis repellendus expedita mollitia officia magnam quaerat optio? Cumque sed unde nesciunt numquam ab consequuntur, nihil illum quos perspiciatis deserunt totam nobis, harum enim, impedit quod vitae recusandae soluta at? Fugit, autem! Debitis, quaerat cum veniam eaque tempora non maiores beatae minima facere quisquam assumenda possimus nobis dolor vel modi fugiat sapiente repellendus, aliquid ab reiciendis ea? Quasi obcaecati blanditiis praesentium, quisquam corporis enim molestiae eaque. Rerum labore deserunt, magnam mollitia omnis molestiae porro a nam facilis velit aliquam minima molestias asperiores magni, architecto totam commodi excepturi ad doloribus repellat ea esse eligendi voluptatem! Corporis vero, nisi totam sint eligendi nostrum incidunt optio natus pariatur fuga iste ad quo expedita repudiandae atque quasi fugiat ipsum quos quae mollitia a. Eaque voluptatem non beatae architecto veniam rerum accusantium, culpa minus magnam, dolores ducimus laudantium et, officia dolorem provident dicta quasi repellendus doloremque vel consequuntur. Rerum blanditiis ut reprehenderit velit illo commodi, modi, maxime dolor harum molestias eveniet ipsum assumenda impedit atque facere magnam reiciendis totam quis. Dolores ullam eaque quo? Consectetur illum reprehenderit laboriosam vero quod minima quidem rem quae iste? Maxime porro itaque ullam harum corrupti quibusdam natus consequatur non voluptatum dolorum. Debitis porro quo culpa, facere illum ut facilis beatae dignissimos voluptas officiis doloribus ex quos nulla suscipit. Maiores obcaecati illum, harum mollitia unde itaque impedit fuga, laborum tempore, odio ad temporibus ipsum minima veniam aliquid porro quam eligendi sit at eos error! Sed fugit architecto voluptatibus libero ut repellat doloremque. Quibusdam corrupti totam iste hic repellendus sapiente ad ullam ea, omnis vitae! Laudantium, temporibus. Eaque unde modi eos explicabo excepturi magnam, temporibus molestias numquam ex quaerat rem iusto sapiente totam. Rem, cum sint! Sequi temporibus magnam officia incidunt numquam ullam. Mollitia officiis optio cum nisi quasi culpa at aliquam beatae repellat maxime atque fugiat enim, excepturi, aspernatur eligendi magnam porro, iusto non reiciendis libero iure! A qui ipsum nobis unde consequuntur sit officia accusantium, quos pariatur harum assumenda ab eius aliquam officiis quibusdam quod itaque cum. Aperiam eaque suscipit enim quisquam dolor debitis, fugiat dicta cupiditate eos esse totam, vel eius eveniet placeat autem. Quo, exercitationem temporibus deleniti aliquam quasi recusandae delectus quos, a minus accusamus, quas praesentium inventore vero dolore eum error consequuntur maiores accusantium iure tempore? Quibusdam enim corporis, repellat illo magnam tempore maxime quo nesciunt illum itaque provident ad architecto dolorum praesentium eaque, temporibus expedita, odio consectetur rerum. Eligendi dolore incidunt odio consequuntur laboriosam quod deserunt aut blanditiis nemo magni laudantium dicta iste laborum, architecto debitis corporis deleniti error sapiente molestias itaque impedit enim provident quisquam! Eaque laboriosam ducimus cum quasi illum porro quas neque voluptates, ullam illo cumque animi tempora consectetur tenetur, harum commodi dolorum. Libero numquam corporis illo voluptatem obcaecati dolore pariatur nesciunt commodi iste reprehenderit dolores non id provident sit cum laboriosam rerum esse nihil aspernatur similique quidem aperiam, nostrum voluptatum consequatur. Nemo, eaque quibusdam excepturi natus ipsum molestias explicabo optio beatae iure rem molestiae pariatur architecto, voluptatibus ut aut? Tempore aspernatur in quasi amet numquam perferendis, sint ratione quae impedit velit ad sequi nostrum, ex earum dolores non quibusdam incidunt perspiciatis. Nemo non voluptatum itaque quis exercitationem accusamus incidunt! Omnis molestias sunt reprehenderit eligendi! Facere quis reprehenderit possimus, eaque delectus, quia sit reiciendis blanditiis ut mollitia quos! Natus veritatis maxime iste veniam earum quaerat eaque tempora quo consequuntur quas aliquid exercitationem, libero dolorum voluptas nobis, harum error voluptatibus debitis, perspiciatis sunt inventore reiciendis? Odit, quia exercitationem. Voluptatum, et harum delectus magnam necessitatibus qui at rerum voluptatibus alias, iste placeat aliquam aliquid explicabo exercitationem modi hic ab mollitia omnis porro totam fugit quibusdam inventore. Laudantium, aut doloremque dolor maxime quo rem ipsam nesciunt cumque, dolorem libero aliquid alias quae a iure nisi provident accusamus quaerat aperiam neque fuga! Temporibus consectetur voluptas possimus rerum modi. Voluptate, harum. Veritatis, dolores fugit et aspernatur porro voluptate maxime autem ipsa sequi cum mollitia eaque corporis itaque magni. Eum quo sunt, animi dolore in iusto soluta veritatis assumenda obcaecati repudiandae modi praesentium natus expedita, sed possimus ipsa pariatur, unde doloremque tenetur tempora nam aperiam? Eos laborum cumque itaque temporibus, fugit, odio eius unde deserunt incidunt dolorum quisquam magnam aspernatur dolorem officia! Culpa, provident. Reiciendis impedit qui maxime consequatur unde tempore, voluptatibus harum delectus, iste ratione numquam voluptatum! Est commodi hic nam qui perspiciatis nesciunt itaque, non alias suscipit magni vitae ipsa quos, dolor, amet dolores vel inventore. Maiores odio provident sapiente quo, temporibus soluta laboriosam amet aut maxime pariatur iure perferendis rem quas delectus aperiam accusamus eligendi tempore placeat aspernatur consectetur vel ducimus excepturi! Illo corporis neque voluptates, dolorum magni voluptatibus facere soluta, itaque ipsa molestiae, quasi rem ipsum! Esse tempora perferendis temporibus qui animi commodi illum distinctio dolore in a, unde pariatur! Doloribus, vitae commodi! Voluptates commodi architecto mollitia eius iure! Iste pariatur esse eveniet inventore, aperiam minima dolor illo id aliquid laudantium maiores qui excepturi adipisci expedita quaerat labore architecto tenetur, reiciendis perferendis. Nesciunt iure eligendi, perspiciatis explicabo quaerat deserunt libero molestiae. Necessitatibus, iste. Sit, esse atque dolore iste doloremque culpa, voluptas iusto earum reprehenderit modi libero quis voluptatum praesentium! Perspiciatis voluptatum repellendus illo ipsa. Nisi maxime excepturi, ex velit sequi autem delectus cumque neque, impedit totam debitis dolorem corporis! Cumque, libero nulla. Accusantium accusamus tenetur nesciunt exercitationem saepe, fugit laudantium soluta magnam alias mollitia. Id accusamus placeat, cum quibusdam consectetur quo sint ad modi necessitatibus vel eius. Enim harum accusamus velit.
          </div>
          <div className={`fixed w-[16%] top-[93%] h-[5%] rounded-md p-[5px] m-1 ml-[80%] ${(changeColor === true)? 'bg-[#e8fcd7]':'bg-[#e6fafb]'}`}>
          <feedback-component onClick={handleFeedback}>
            <span slot="cta" className="text-[#003558] m-[3px]">
              Was this page helpful?
            </span>
            <span slot="confirmation" className="text-[#4e7a3e]" >
              Thank you for your feedback!
            </span>
              <span slot="option-icon:0">
                <LikeIconSvg/>
              </span>
              <span slot="option-icon:1">
                <DislikeIconSvg/>
              </span>
          </feedback-component>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora amet tempore natus explicabo voluptate dicta veniam vitae placeat laudantium mollitia eum nobis expedita perferendis consequatur vero corporis delectus facilis incidunt possimus debitis, illum recusandae quasi officiis quisquam! Quasi temporibus itaque assumenda ullam ducimus sunt tempora magni sapiente, quia voluptate, commodi aperiam ab nisi quis maiores nemo iure, blanditiis magnam reprehenderit excepturi quos. Voluptate ipsa autem dignissimos, perspiciatis unde sunt ratione magni nobis, aut cupiditate officiis alias! Fuga reiciendis neque, facere pariatur voluptatum exercitationem architecto repudiandae blanditiis quae fugiat delectus dolore totam, odio perspiciatis ad? Rerum assumenda omnis quos excepturi quod.
          </div>
      </div>
    </>
  );
};

export default Home;
