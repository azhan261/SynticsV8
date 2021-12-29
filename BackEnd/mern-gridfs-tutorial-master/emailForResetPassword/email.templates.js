

module.exports = {
  confirm: id => ({
    subject: "Password Reset Confirmation Didactics.one",
    html: `
    Thanks for your request. To reset your Didactics’ password, please click on the link below:
    <br />
    <br />
    Link:

    <a href='http://localhost:3000/reset-password/${id}'x>
      http://localhost:3000/reset-password/${id}
    </a>
    <br />
    <br />
    Thanks,
    <br />
    <br />
    The Didactics Team
   
    `,
    text: `Copy and paste this link:http://localhost:3000/confirm/${id}`
  })
};
