import './contact.scss';
import React from 'react';
import { contact } from '../../Data';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& label': {
    color: '#be81ef',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#be81ef',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#be81ef',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

const Contact = () => {
  const d = new Date();
  let month = d.getMonth();
  let date = d.getDate();
  let mL = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  month = mL[month];

  return (
    <>
      <div className="content4">
        <div className="contact">
          <div className="line"></div>
          <Container>
            <a href={`mailto:${contact.email}`} target="blank">
              <div type="button" className="email">
                {contact.email}
              </div>
            </a>
          </Container>
          <div className="line"></div>

          <Container>
            <div className="call-section">
              <div className="call">call</div>
              <div className="call-number">
                <a href="tel:8200-394-360">{contact.call}</a>
              </div>
            </div>
          </Container>

          <div className="line"></div>

          <Container>
            <div className="namefield">
              <div className="name">Name</div>

              <CssTextField
                label="Enter Name"
                id="custom-css-outlined-input"
                color="success"
              >
                <input type="text" />
              </CssTextField>
            </div>
          </Container>
          <div className="line"></div>
          <Container>
            <div className="namefield">
              <div className="name">Email</div>

              <CssTextField
                label="Enter Email"
                id="custom-css-outlined-input"
              />
            </div>
          </Container>
          <div className="line"></div>
          <Container>
            <div className="namefield">
              <div className="name">Message</div>

              <CssTextField
                label="Enter Message"
                id="custom-css-outlined-input"
              />
            </div>
          </Container>
        </div>
        <div className="loop-holder">
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-holder__text">
            <div className="availability">
              <div className="avail-container">
                <div className="Date_div">
                  <span id="date">{date}</span>
                </div>
                <div className="info_div">
                  <span id="month">{month}</span>
                  <span className="Avail">available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
