let express = require('express');
let app = express();
const path = require('path');
let nodemailer = require('nodemailer');
const router = express.Router(); 
const bodyParser = require('body-parser'); 
const httpMsgs = require('http-msgs'); 
// Static folder
//app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

var transporter = nodemailer.createTransport({
  host: "outlook",
  auth: {
    user: "papemorlo@hotmail.fr",
    pass: "#ecoss@ise!" 
  }
});

// verifying the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});


app.post('/access', (req, res) => {
    
  var email = req.body.email
  var message = req.body.message
  var content = `email: ${email} \n message: ${message} `

  var mail = {
    from: req.body.email, 
    to: "papemorlo@hotmail.fr", 
    message: content,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
 // httpMsgs.send500(req, res, "Invalid")
})


app.get('/', (req, res) => res.send('API Running'));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.info(`server has started on ${PORT}`))