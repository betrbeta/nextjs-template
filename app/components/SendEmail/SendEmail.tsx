import { useState } from "react";

export const SendEmail = () => {
  const [email, setEmail] = useState<string>("");

  async function createTemplate() {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": `${process.env.NEXT_PUBLIC_MAILER_APIKEY}`,
      },
      body: JSON.stringify({
        sender: { email: "rudenko.sergey.v@gmail.com" },
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
      .then(({ id }) => sendEmail(id))
      .catch((err) => console.error(err));
  }

  async function sendEmail(id: number) {
    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": `${process.env.NEXT_PUBLIC_MAILER_APIKEY}`,
      },
      body: JSON.stringify({
        to: [{ email: `${email}` }],
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
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center transition-all">
      <input
        className="px-6 py-3 w-[300px] text-[#330033] border-[3px] border-black border-solid rounded-s-[22px] border-r-0 border-l-0"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        placeholder="Write E-mail here ..."
      />
      <button
        type="submit"
        className="px-6 py-3 text-white whitespace-nowrap transition-all hover:bg-white hover:text-[#330033] rounded-e-[22px] border-[3px] border-black border-solid"
        onClick={handleSendEmail}
      >
        Send mail
      </button>
    </div>
  );
};
